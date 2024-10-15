import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Collapse, Dropdown, Accordion } from 'react-bootstrap';
import { imageUrl } from "../services/dataurl";
import { HotToaster } from "../utils/Toaster"

//Component
import ClientsSlider from '../components/Home/ClientsSlider';
import NewsLetter from '../components/NewsLetter';
import { getAllEbooks, addBookToCart } from "../services/book.service";
import { CategoryListGet } from "../services/book.service";
//element
import CounterSection from '../elements/CounterSection';
import ShopSidebar from '../elements/ShopSidebar';

const selectYear = [
    { year: 2022, year2: 2011},
    { year: 2021, year2: 2010},
    { year: 2020, year2: 2009},
    { year: 2019, year2: 2008},
    { year: 2018, year2: 2007},
    { year: 2017, year2: 2006},
    { year: 2016, year2: 2005},
    { year: 2015, year2: 2004},
    { year: 2014, year2: 2003},
    { year: 2013, year2: 2002},
    { year: 2012, year2: 2001},
];

const categoryBlog1 = [
    {name:'Action'     , name2:'Fantasy' },
    {name:'Advanture'  , name2:'History' },
    {name:'Animation'  , name2:'Horror'  },
    {name:'Biography'  , name2:'Mystery' },
    {name:'Comedy'     , name2:'Romance' },
    {name:'Crime'      , name2:'Sci-fi'  },
    {name:'Documentary', name2:'Sport'   },
    {name:'Design'     , name2:'Science' },
];
const publishBlog = [
    {title:'Action'},
    {title:'Advanture'},
    {title:'Animation'},
    {title:'Biography'},
    {title:'Comedy'},
    {title:'Crime'},
    {title:'Documentary'},
];
const accordionBlog2 = [
    {title:'Best Sales (105)'},
    {title:'Most Commented (21)'},
    {title:'Newest Books (32)'},
    {title:'Featured (129)'},
    {title:'Watch History (23)'},
    {title:'Best Books (44)'},
];

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





function Ebooks() {
    const [accordBtn, setAccordBtn] = useState();
    const [selectBtn, setSelectBtn] = useState('Newest');
    const location = useLocation()
    const [ebooks, setEbooksData] = useState([]);
    const [category, setCategory] = useState([]);
    const [categoryBtn, setCategoryBtn] = useState();
    useEffect(() => {
        getallebooks()
        console.log("---", ebooks);
        getCategoryData()
    }, [categoryBtn])
    const getCategoryData = async () => {
        const categoryData = await CategoryListGet()
        setCategory(categoryData.data)
        console.log("categoryList-->", categoryData.data);
    }
    const getallebooks = async () => {
        console.log("locationlocation", location.pathname.split("/")[2])
        let data

        data = {
            categoryId: categoryBtn
        }

        const result = await getAllEbooks(data);
        if (result.status && result.data) {
            setEbooksData(result.data);
        }
    };
    const addToCart = async (item) => {
        let data = {
            bookId: item._id
        }
        let result = await addBookToCart(data)
        HotToaster(result.status, result.message)

    }
    return (
        <>
            <div className="page-content bg-grey">
                <div className="content-inner-1 border-bottom">
                    <div className="container">
                        <div className="row ">
                            {/* <div className="col-xl-3">
                                <div className="shop-filter">
                                    <div className="d-flex justify-content-between">
                                        <h4 className="title">Filter Option</h4>
                                        <Link to={"#"} className="panel-close-btn"><i className="flaticon-close"></i></Link>
                                    </div>
                                    <Accordion className="accordion-filter" defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>
                                                Price Range
                                            </Accordion.Header>
                                            <Accordion.Body >
                                                <div className="range-slider style-1">
                                                    <div id="slider-tooltips">
                                                      
                                                    </div>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header >
                                                Shop by Category
                                            </Accordion.Header>
                                            <Accordion.Body >
                                                <div className="widget dz-widget_services d-flex justify-content-between">
                                                    <div className="">
                                                        {categoryBlog1.map((item, ind) => (
                                                            <div className="form-check search-content" key={ind}>
                                                                <input className="form-check-input" type="checkbox" value="" id={`shopcategoryCheckBox-${ind + 11}`} />
                                                                <label className="form-check-label" htmlFor={`shopcategoryCheckBox-${ind + 11}`}>
                                                                    {item.name}
                                                                </label>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <div className="">
                                                        {categoryBlog1.map((item, ind) => (
                                                            <div className="form-check search-content" key={ind}>
                                                                <input className="form-check-input" type="checkbox" value="" id={`shopcategoryCheckBox-${ind + 28}`} />
                                                                <label className="form-check-label" htmlFor={`shopcategoryCheckBox-${ind + 28}`}>
                                                                    {item.name2}
                                                                </label>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>Choose Publisher</Accordion.Header>
                                            <Accordion.Body >
                                                <div className="widget dz-widget_services">
                                                    {publishBlog.map((data, ind) => (
                                                        <div className="form-check search-content" key={ind}>
                                                            <input className="form-check-input" type="checkbox" value="" id={`publisherCheckBox-${ind + 38}`} />
                                                            <label className="form-check-label" htmlFor={`publisherCheckBox-${ind + 38}`}>
                                                                {data.title}
                                                            </label>
                                                        </div>
                                                    ))}

                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header>Select Year</Accordion.Header>
                                            <Accordion.Body >
                                                <div className="widget dz-widget_services col d-flex justify-content-between">
                                                    <div className="">
                                                        {selectYear.map((item, ind) => (
                                                            <div className="form-check search-content" key={ind}>
                                                                <input className="form-check-input" type="checkbox" value="" id={`productCheckBox${ind + 22}`} />
                                                                <label className="form-check-label" htmlFor={`productCheckBox${ind + 22}`}>
                                                                    {item.year}
                                                                </label>
                                                            </div>
                                                        ))}

                                                    </div>
                                                    <div className="">
                                                        {selectYear.map((item, ind) => (
                                                            <div className="form-check search-content" key={ind}>
                                                                <input className="form-check-input" type="checkbox" value="" id={`productCheckBox${ind + 33}`} />
                                                                <label className="form-check-label" htmlFor={`productCheckBox${ind + 33}`}>
                                                                    {item.year2}
                                                                </label>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                    <Accordion className="accordion-filter accordion-inner" defaultActiveKey="0">
                                        {accordionBlog2.map((data, index) => (
                                            <Accordion.Item eventKey={`${index}`}>
                                                <Accordion.Header>{data.title}</Accordion.Header>
                                                <Accordion.Body>
                                                    <ul>
                                                        <li><Link to={"#"}>Alone Here</Link></li>
                                                        <li><Link to={"#"}>Alien Invassion</Link></li>
                                                        <li><Link to={"#"}>Bullo The Cat</Link></li>
                                                        <li><Link to={"#"}>Cut That Hair!</Link></li>
                                                        <li><Link to={"#"}>Dragon Of The King</Link></li>
                                                    </ul>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        ))}
                                    </Accordion>

                                    <div className="row filter-buttons">
                                        <div>
                                            <Link to={"#"} className="btn btn-secondary btnhover mt-4 d-block">Refine Search</Link>
                                            <Link to={"#"} className="btn btn-outline-secondary btnhover mt-3 d-block">Reset Filter</Link>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                            <div className="col-xl-12">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h4 className="title">EBooks</h4>
                                    <Link to={"#"} className="btn btn-primary panel-btn">Filter</Link>
                                </div>
                                <div className="filter-area m-b30">
                                    <div className="grid-area">

                                    </div>
                                    <div className="category">
                                        <div className="filter-category">
                                            <Link to={"#"} data-bs-toggle="collapse"
                                                onClick={() => setAccordBtn(!accordBtn)}
                                            >
                                                <i className="fas fa-list me-2"></i>
                                                Categories
                                            </Link>
                                        </div>
                                        <div className="form-group">
                                            <i className="fas fa-sort-amount-down me-2 text-secondary"></i>
                                            <Dropdown>
                                                <Dropdown.Toggle className="i-false">{selectBtn} <i className="ms-4 font-14 fa-solid fa-caret-down" /></Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item onClick={() => setSelectBtn('Newest')}>Newest</Dropdown.Item>
                                                    <Dropdown.Item onClick={() => setSelectBtn('1 Days')}>1 Days</Dropdown.Item>
                                                    <Dropdown.Item onClick={() => setSelectBtn('2 Week')}>2 Week</Dropdown.Item>
                                                    <Dropdown.Item onClick={() => setSelectBtn('3 Week')}>3 Weeks</Dropdown.Item>
                                                    <Dropdown.Item onClick={() => setSelectBtn('1 Month')}>1 Month</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                </div>
                                <Collapse in={accordBtn} className="acod-content">
                                    <div>
                                        <div className="widget widget_services style-2">
                                            {category.map((item, ind) => (
                                                <div className="form-check search-content" key={ind}>
                                                    <input className="form-check-input" type="checkbox" onChange={() => { setCategoryBtn(item._id) }} value={item._id} id={`productCheckBox${ind + 1}`} />
                                                    <label className="form-check-label" htmlFor={`productCheckBox${ind + 1}`}>
                                                        {item.categoryName}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </Collapse>
                                <div className="row book-grid-row">
                                    {ebooks.map((data, i) => (
                                        <div className="col-book style-2" key={i}>
                                            <div className="dz-shop-card style-1">
                                                <div className="dz-media">
                                                    <img src={imageUrl + data.bookIcon} alt="book" />
                                                </div>
                                                <div className="bookmark-btn style-2">

                                                    <label className="form-check-label w-50" style={{ fontSize: '10px', fontWeight: 600, background: 'green', color: 'white' }} >
                                                        {data.type}
                                                    </label>
                                                </div>
                                                <div className="dz-content">
                                                    <h5 className="title"><Link to={`/books-detail/${data._id}/${data.bookName}`}>{data.bookName}</Link></h5>
                                                    <ul className="dz-tags">
                                                        <li><Link to={""}>Author {data.author},</Link></li>
                                                        <li><Link to={""}>{data.subtitle2}</Link></li>
                                                    </ul>

                                                    <div className="book-footer">
                                                        {console.log("Ebooks---->", ebooks[i])}
                                                        <Link to={`/books-detail/${data._id}/${data.bookName}`} type='button'  className="btn btn-success box-btn btnhover btnhover2">View Details</Link>
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
export default Ebooks;