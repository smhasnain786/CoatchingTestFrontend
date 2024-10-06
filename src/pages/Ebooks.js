import React,{useState,useEffect} from 'react';
import {Link,useLocation} from 'react-router-dom';
import {Collapse, Dropdown} from 'react-bootstrap';
import { imageUrl } from "../services/dataurl";
import { HotToaster } from "../utils/Toaster"

//Component
import ClientsSlider from '../components/Home/ClientsSlider';
import NewsLetter from '../components/NewsLetter';
import { getAllEbooks,addBookToCart } from "../services/book.service";
import { CategoryListGet } from "../services/book.service";
//element
import CounterSection from '../elements/CounterSection';
import ShopSidebar from '../elements/ShopSidebar';

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
    {name:'Architecture'},
    {name:'Art'},
    {name:'Action'},
    {name:'Biography & Autobiography'},
    {name:'Body, Mind & Spirit'},
    {name:'Business & Economics'},    
    {name:'Children Fiction'},
    {name:'Children Non-Fiction'},
    {name:'Comics & Graphic Novels'},
    {name:'Cooking'},
    {name:'Crafts & Hobbies'},
    {name:'Design'},
    {name:'Drama'},
    {name:'Education'},
    {name:'Family & Relationships'},
    {name:'Fiction'},
    {name:'Foreign Language Study'},
    {name:'Games'},
    {name:'Gardening'},
    {name:'Health & Fitness'},
    {name:'History'},
    {name:'House & Home'},
    {name:'Humor'},
    {name:'Literary Collections'},
    {name:'Mathematics'}
];





function Ebooks(){
    const [accordBtn, setAccordBtn] = useState();
    const [selectBtn, setSelectBtn] = useState('Newest');
    const location = useLocation()
    const [ebooks, setEbooksData] = useState([]);
    const [category, setCategory] = useState([]);
    const [categoryBtn, setCategoryBtn] = useState();
    useEffect(() => {
        getallebooks()
        console.log("---",ebooks);
        getCategoryData()
      }, [categoryBtn])
      const getCategoryData = async () => {
        const categoryData = await CategoryListGet()
        setCategory(categoryData.data)
        console.log("categoryList-->", categoryData.data);
    }
      const getallebooks = async () => {
        console.log("locationlocation",location.pathname.split("/")[2])
        let data
        
            data={
              categoryId:categoryBtn
            }
       
        const result = await getAllEbooks(data);
        if (result.status && result.data) {
          setEbooksData(result.data);
        }
      };
      const addToCart = async(item) => {
        let data = {
          bookId:item._id
        }
        let result = await addBookToCart(data)
        HotToaster(result.status,result.message)
        
    } 
    return(
        <>
            <div className="page-content bg-grey">
                <div className="content-inner-1 border-bottom">
                    <div className="container">
                        <div className="row ">  
                            <div className="col-xl-3">
                                <ShopSidebar />
                            </div>
                           
                            <div className="col-xl-9">
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
                                                <Dropdown.Toggle  className="i-false">{selectBtn} <i className="ms-4 font-14 fa-solid fa-caret-down" /></Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item onClick={()=>setSelectBtn('Newest')}>Newest</Dropdown.Item>
                                                    <Dropdown.Item onClick={()=>setSelectBtn('1 Days')}>1 Days</Dropdown.Item>
                                                    <Dropdown.Item onClick={()=>setSelectBtn('2 Week')}>2 Week</Dropdown.Item>
                                                    <Dropdown.Item onClick={()=>setSelectBtn('3 Week')}>3 Weeks</Dropdown.Item>
                                                    <Dropdown.Item onClick={()=>setSelectBtn('1 Month')}>1 Month</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                </div>
                                <Collapse in={accordBtn} className="acod-content">
                                    <div>
                                        <div className="widget widget_services style-2">
                                            {category.map((item, ind)=>(
                                                <div className="form-check search-content" key={ind}>
                                                    <input className="form-check-input" type="checkbox" onChange={()=>{setCategoryBtn(item._id)}} value={item._id} id={`productCheckBox${ind+1}`} /> 
                                                    <label className="form-check-label" htmlFor={`productCheckBox${ind+1}`}>
                                                        {item.categoryName}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>   
                                    </div>
                                </Collapse>
                                <div className="row book-grid-row">
                                    {ebooks.map((data, i)=>(
                                        <div className="col-book style-2" key={i}>
                                            <div className="dz-shop-card style-1">
                                                <div className="dz-media">
                                                    <img src={imageUrl+data.bookIcon} alt="book" />									
                                                </div>
                                                <div className="bookmark-btn style-2">
                                                    
                                                    <label className="form-check-label w-50" style={{fontSize:'10px',fontWeight:600,background:'#eaa451',color:'white'}} >
                                                    {data.type}
                                                    </label>
                                                </div> 
                                                <div className="dz-content">
                                                    <h5 className="title"><Link to={`/books-detail/${data._id}/${data.bookName}`}>{data.bookName}</Link></h5>
                                                    <ul className="dz-tags">
                                                        <li><Link to={"books-grid-view"}>Author {data.author},</Link></li>
                                                        <li><Link to={"books-grid-view"}>{data.subtitle2}</Link></li>
                                                    </ul>
                                                    
                                                    <div className="book-footer">
                                                        {console.log("Ebooks---->",ebooks[i])}
                                                        <button type='button' onClick={()=>addToCart(ebooks[i])} className="btn btn-secondary box-btn btnhover btnhover2"><i className="flaticon-shopping-cart-1 m-r10"></i> Add to cart</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}   
                                    
                                </div>
                                <div className="row page mt-0">
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
                                </div>
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