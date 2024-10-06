import React, { useState, useEffect } from 'react';
import moment from "moment"

import { Link } from 'react-router-dom';
import { Collapse, Dropdown, Accordion } from 'react-bootstrap';
import { imageUrl } from "../services/dataurl";
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//Component
import ClientsSlider from '../components/Home/ClientsSlider';
import NewsLetter from '../components/NewsLetter';
import { getallPreviousYearPaper } from "../services/previousYearPaper.service";
import { downloadFile } from "../services/downloadFile.service";
import { CategoryListGet } from "../services/book.service";
//element
import CounterSection from '../elements/CounterSection';
// import ShopSidebar from '../elements/ShopSidebar';


const lableBlogData = [
    { name: 'Architecture' },
    { name: 'Art' },
    { name: 'Action' },
    { name: 'Biography & Autobiography' },
    { name: 'Body, Mind & Spirit' },
    { name: 'Business & Economics' },
    { name: 'Children Fiction' },

];






function PreviousYears() {
    const [accordBtn, setAccordBtn] = useState();
    const [selectBtn, setSelectBtn] = useState();
    const [categoryBtn, setCategoryBtn] = useState('Category');
    const [paperList, setPaperList] = useState([])
    const [startDate, setStartDate] = useState('01/01/24');
    const [endDate, setEndDate] = useState(new Date());
    const [fileType, setFileType] = useState("File Type");
    const [category, setCategory] = useState(['0']);
    const getPreviousYearsData = async () => {
        let data = {
            categoryId: selectBtn
        }
        const result = await getallPreviousYearPaper(data)
        if (result.status) {
            setPaperList(result.data)
        }
        console.log("getallPreviousYearPaper", result);

    }
    const getCategoryData = async () => {
        const categoryData = await CategoryListGet()
        setCategory(categoryData.data)
        console.log("categoryList-->", categoryData.data);
    }


    useEffect(() => {
        getPreviousYearsData()
        getCategoryData()
    }, [selectBtn])




    const handleClick = async () => {
        let data = {
            fromDate: startDate,
            toDate: endDate,
            categoryId: selectBtn
        }
        const result = await getallPreviousYearPaper(data)
        setPaperList(result.data)
    }



    const handleFileClick = async (file) => {
        let data = {
            fromDate: startDate,
            toDate: endDate,
            categoryId: selectBtn,
            fileType: file
        }
        const result = await getallPreviousYearPaper(data)
        setPaperList(result.data)
        setFileType(file)
    }
    return (
        <>
            <div className="page-content bg-grey">
                <div className="content-inner-1 border-bottom">
                    <div className="container">
                        <div className="row ">

                            <div className='col-xl-3'>

                                <div className="shop-filter">
                                    <div className="d-flex justify-content-between">
                                        <h4 className="title">Filter Option</h4>
                                        <Link to={"#"} className="panel-close-btn"><i className="flaticon-close"></i></Link>
                                    </div>
                                    <div className='card'>
                                        <div className='card-body'>
                                            <Dropdown>
                                                <Dropdown.Toggle className="i-false">{categoryBtn} <i className="ms-4 font-14 fa-solid fa-caret-down" /></Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    {category?.map((data, i) => {
                                                        return (
                                                            <Dropdown.Item key={i} onClick={() => { setSelectBtn(data._id); setCategoryBtn(data.categoryName) }}>{data.categoryName}</Dropdown.Item>
                                                        )
                                                    })}

                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>


                                </div>

                            </div>
                            <div className="col-xl-9" >
                                <div className="d-flex justify-content-between align-items-center">
                                    <h4 className="title">Previous Year Paper</h4>
                                    <Link to={"#"} className="btn btn-primary panel-btn">Filter</Link>
                                </div>
                                <div className="filter-area m-b30">
                                    <div className="grid-area">
                                        <div className="shop-tab">
                                            <div className='d-flex justify-content-between align-items-center' >
                                                <span className='mx-3'>Start Date </span>
                                                <DatePicker selected={startDate} onChange={(date) => { setStartDate(date); handleClick(); }} />
                                                <span className='mx-3'>End Date </span>
                                                <DatePicker selected={endDate} onChange={(date) => { setEndDate(date); handleClick(); }} />
                                            </div>

                                        </div>
                                    </div>
                                    <div className="category">
                                        {/* <div className="filter-category">
                                            <Link to={"#"} data-bs-toggle="collapse"
                                                onClick={() => setAccordBtn(!accordBtn)}
                                            >
                                                <i className="fas fa-list me-2"></i>
                                                Categories
                                            </Link>
                                        </div> */}

                                        <div className="form-group">
                                            <i className="fas fa-sort-amount-down me-2 text-secondary"></i>
                                            <Dropdown>
                                                <Dropdown.Toggle className="i-false">
                                                    {fileType} <i className="ms-4 font-14 fa-solid fa-caret-down" />
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item onClick={() => handleFileClick('pdf')}>PDF</Dropdown.Item>
                                                    <Dropdown.Item onClick={() => handleFileClick('ppt')}>PPT</Dropdown.Item>
                                                    <Dropdown.Item onClick={() => handleFileClick('pptPdf')}>PDF + PPT</Dropdown.Item>
                                                    <Dropdown.Item onClick={() => handleFileClick('editable')}>EDITABLE FILE</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>

                                    </div>
                                </div>
                                <Collapse in={accordBtn} className="acod-content">
                                    <div>
                                        <div className="widget widget_services style-2">
                                            {lableBlogData?.map((item, ind) => (
                                                <div className="form-check search-content" key={ind}>
                                                    <input className="form-check-input" type="checkbox" value="" id={`productCheckBox${ind + 1}`} />
                                                    <label className="form-check-label" htmlFor={`productCheckBox${ind + 1}`}>
                                                        {item.name}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </Collapse>
                                <div className="row book-grid-row">
                                    {paperList?.map((data, i) => (
                                        <div className="col-book style-2" key={i}>
                                            <div className="dz-shop-card style-1">
                                                <div className="dz-content">
                                                    <h5 className="title">{data.examType}</h5>
                                                    <h5 className="title">{data.subject}</h5>
                                                    <ul className="dz-tags">
                                                        <li><Link to={"books-grid-view"}>{data.subtitle1},</Link></li>
                                                        <li><Link to={"books-grid-view"}>{data.subtitle2}</Link></li>
                                                    </ul>
                                                    <div className="book-footer">
                                                        <div className="price">
                                                            
                                                                <span className="price-num">{moment(data.createdAt).format("DD-MM-YYYY")}</span>
                                                       
                                                        </div>

                                                        
                                                            <button className='btn btn-primary'  onClick={() => window.location.href=data.file}>File</button>
                                                  
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}


                                </div>
                                {/* <div className="row page mt-0">
                                    <div className="col-md-6">
                                        <p className="page-text">Showing 12 from 50 data</p>
                                    </div>
                                    <div className="col-md-6">
                                        <nav aria-label="Blog Pagination">
                                            <ul className="pagination style-1 p-t20">
                                                <li className="page-item"><Link to={"#"} className="page-link prev" >Prev</Link></li>
                                                <li className="page-item"><Link to={"#"} className="page-link active" >1</Link></li>
                                                <li className="page-item"><Link to={"#"} className="page-link">2</Link></li>
                                                <li className="page-item"><Link to={"#"} className="page-link">3</Link></li>
                                                <li className="page-item"><Link to={"#"} className="page-link next" >Next</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white py-5">
                    <div className="container">
                        <ClientsSlider />
                    </div>
                </div>
                <section className="content-inner">
                    <div className="container">
                        <div className="row sp15">
                            <CounterSection />
                        </div>
                    </div>
                </section>
                <NewsLetter />
            </div>
        </>
    )
}
export default PreviousYears;