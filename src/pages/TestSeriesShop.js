import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Dropdown, Accordion } from 'react-bootstrap';
import { imageUrl } from "../services/dataurl";
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//Component
import ClientsSlider from '../components/Home/ClientsSlider';
import NewsLetter from '../components/NewsLetter';
import { getTestSeriesAsQuery } from "../services/testseries.service";
import { downloadFile } from "../services/downloadFile.service";
import { CategoryListGet } from "../services/book.service";
//element
import CounterSection from '../elements/CounterSection';
// import ShopSidebar from '../elements/ShopSidebar';

//Images
import book16 from './../assets/images/books/grid/book16.jpg';
import book8 from './../assets/images/books/grid/book8.jpg';
import book14 from './../assets/images/books/grid/book14.jpg';
import book15 from './../assets/images/books/grid/book15.jpg';
import book4 from './../assets/images/books/grid/book4.jpg';
import book9 from './../assets/images/books/grid/book9.jpg';
import book2 from './../assets/images/books/grid/book2.jpg';
import book7 from './../assets/images/books/grid/book7.jpg';
import book13 from './../assets/images/books/grid/book13.jpg';
import book10 from './../assets/images/books/grid/book10.jpg';
import book11 from './../assets/images/books/grid/book11.jpg';

const lableBlogData = [
    { name: 'Architecture' },
    { name: 'Art' },
    { name: 'Action' },
    { name: 'Biography & Autobiography' },
    { name: 'Body, Mind & Spirit' },
    { name: 'Business & Economics' },
    { name: 'Children Fiction' },
    { name: 'Children Non-Fiction' },
    { name: 'Comics & Graphic Novels' },
    { name: 'Cooking' },
    { name: 'Crafts & Hobbies' },
    { name: 'Design' },
    { name: 'Drama' },
    { name: 'Education' },
    { name: 'Family & Relationships' },
    { name: 'Fiction' },
    { name: 'Foreign Language Study' },
    { name: 'Games' },
    { name: 'Gardening' },
    { name: 'Health & Fitness' },
    { name: 'History' },
    { name: 'House & Home' },
    { name: 'Humor' },
    { name: 'Literary Collections' },
    { name: 'Mathematics' }
];

const cardDetials = [
    { image: book16, title: 'Thunder Stunt', subtitle1: 'ADVANTURE', subtitle2: 'SCIENCE', price1: '54.78', price2: '70.00' },
    { image: book14, title: 'A Heavy Lift', subtitle1: 'RACING', subtitle2: 'DRAMA', price1: '25.18', price2: '68.00' },
    { image: book15, title: 'Terrible Madness', subtitle1: 'SPORTS', subtitle2: 'GAME', price1: '25.30', price2: '38.00' },
    { image: book4, title: 'Such Fun Age', subtitle1: 'ADVANTURE', price1: '20.15', price2: '33.00' },
    { image: book9, title: 'Pushing Clouds', subtitle1: 'ADVANTURE', price1: '30.12', price2: '40.00' },
    { image: book2, title: 'Homie', subtitle1: 'HORROR', subtitle2: 'DRAMA', price1: '15.25', price2: '45.00' },
    { image: book7, title: 'SECONDS', subtitle1: 'SPORTS', subtitle2: 'GAME', price1: '21.78', price2: '36.00' },
    { image: book13, title: 'REWORK', subtitle1: 'THRILLER', price1: '23.20', price2: '49.00' },
    { image: book11, title: 'ALL GOOD NEWS', subtitle1: 'DRAMA', subtitle2: 'COMEDY', price1: '40.78', price2: '68.00' },
    { image: book10, title: 'Emily The Back', subtitle1: 'DRAMA', subtitle2: 'SIRIAL', price1: '54.78', price2: '63.00' },
    { image: book8, title: 'The Adventure', subtitle1: 'BIOGRAPHY', price1: '37.00', price2: '47.00' },
    { image: book14, title: 'A Heavy Lift', subtitle1: 'STORY', subtitle2: 'BIOGRAPHY', price1: '22.00', price2: '51.00' },
];



function TestSeriesShop() {
    const [accordBtn, setAccordBtn] = useState();
    const [selectBtn, setSelectBtn] = useState('');
    const [categoryBtn, setCategoryBtn] = useState('Category');
    const [testSeriesList, setTestSeriesList] = useState([])
    const [startDate, setStartDate] = useState('01/01/24');
    const [endDate, setEndDate] = useState(new Date());
    const [fileType, setFileType] = useState("File Type");
    const [category, setCategory] = useState([]);
    const getTestSeriesData = async () => {
        let data = {
            categoryId: selectBtn
        }
        const result = await getTestSeriesAsQuery(data)
        setTestSeriesList(result.data)
        console.log(result.data);

    }
    const getCategoryData = async () => {
        const categoryData = await CategoryListGet()
        setCategory(categoryData.data)
        console.log("categoryList-->", categoryData.data);
    }


    useEffect(() => {
        getTestSeriesData()
        getCategoryData()
    }, [selectBtn])




    const handleClick = async () => {
        let data = {
            fromDate: startDate,
            toDate: endDate,
            categoryId: selectBtn,
            fileType: fileType
        }
        const result = await getTestSeriesAsQuery(data)
        setTestSeriesList(result.data)
    }



    const handleFileClick = async (file) => {
        let data = {
            fromDate: startDate,
            toDate: endDate,
            categoryId: selectBtn,
            fileType: file
        }
        const result = await getTestSeriesAsQuery(data)
        setTestSeriesList(result.data)
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
                                            {category.map((data, i) => {
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
                                    <h4 className="title">Test Series</h4>
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
                                            {lableBlogData.map((item, ind) => (
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
                                    {testSeriesList.map((data, i) => (
                                        <div className="col-book style-2" key={i}>
                                            <div className="dz-shop-card style-1">
                                                {/* <div className="dz-media">
                                                    <img src={data.image} alt="book" />									
                                                </div> */}
                                                {/* <div className="bookmark-btn style-2">
                                                    <input className="form-check-input" type="checkbox" id={`flexCheckDefault${i+21}`} />
                                                    <label className="form-check-label" htmlFor={`flexCheckDefault${i+21}`}>
                                                        <i className="flaticon-heart"></i>
                                                    </label>
                                                </div>  */}
                                                <div className="dz-content">
                                                    <h5 className="title">{data._id}</h5>
                                                    <ul className="dz-tags">
                                                        <li><Link to={"books-grid-view"}>{data.subtitle1},</Link></li>
                                                        <li><Link to={"books-grid-view"}>{data.subtitle2}</Link></li>
                                                    </ul>
                                                    {/* <ul className="dz-rating">
                                                        <li><i className="flaticon-star text-yellow"></i></li>	
                                                        <li><i className="flaticon-star text-yellow"></i></li>	
                                                        <li><i className="flaticon-star text-yellow"></i></li>	
                                                        <li><i className="flaticon-star text-yellow"></i></li>		
                                                        <li><i className="flaticon-star text-yellow"></i></li>		
                                                    </ul> */}
                                                    <div className="book-footer">
                                                        <div className="price">
                                                            {/* <span className="price-num">{data.plan}</span> */}
                                                            <span className="price-num">{data.documents[0].plan}</span>

                                                        </div>

                                                        <Dropdown>
                                                            <Dropdown.Toggle className="i-false">
                                                                Download File <i className="ms-4 font-14 fa-solid fa-caret-down" />
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu>
                                                                {data.documents.map((datas, i) => (
                                                                    <Dropdown.Item
                                                                        key={i}
                                                                        onClick={() => downloadFile(imageUrl + datas.file, `${datas.fileType.toUpperCase()}`)}
                                                                    >
                                                                        <i className="flaticon-download-1 m-r10"></i> {datas.fileType.toUpperCase()}
                                                                    </Dropdown.Item>
                                                                ))}
                                                            </Dropdown.Menu>
                                                        </Dropdown>



                                                        {/* <a href={imageUrl + data.documents[0]?.file} className="btn btn-secondary box-btn btnhover btnhover2" target="_black" download><i className="flaticon-download-1 m-r10"></i> Download</a> */}
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
export default TestSeriesShop;