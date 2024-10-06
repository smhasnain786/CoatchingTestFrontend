import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Nav, Tab } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

//import {Collapse, Dropdown} from 'react-bootstrap';

//Component
import ClientsSlider from '../components/Home/ClientsSlider';
import CounterSection from '../elements/CounterSection';
import NewsLetter from '../components/NewsLetter';
import { imageUrl } from "../services/dataurl";

//Images
import book16 from './../assets/images/books/book16.png';
import profile2 from './../assets/images/profile2.jpg';
import profile4 from './../assets/images/profile4.jpg';
import profile3 from './../assets/images/profile3.jpg';
import profile1 from './../assets/images/profile1.jpg';
import book15 from './../assets/images/books/grid/book15.jpg';
import book3 from './../assets/images/books/grid/book3.jpg';
import book5 from './../assets/images/books/grid/book5.jpg';
import {
    BookDetailsById, addBookToCart, getBooksAccordingToCategory
} from "../services/book.service";


const relatedBook = [
    { image: book15, title: 'Terrible Madness' },
    { image: book3, title: 'Battle Drive' },
    { image: book5, title: 'Terrible Madness' },
];

function CommentBlog({ title, image }) {
    return (
        <>
            <div className="comment-body" id="div-comment-3">
                <div className="comment-author vcard">
                    <img src={image} alt="" className="avatar" />
                    <cite className="fn">{title}</cite> <span className="says">says:</span>
                    <div className="comment-meta">
                        <Link to={"#"}>December 28, 2022 at 6:14 am</Link>
                    </div>
                </div>
                <div className="comment-content dlab-page-text">
                    <p>Donec suscipit porta lorem eget condimentum. Morbi vitae mauris in leo venenatis varius. Aliquam nunc enim, egestas ac dui in, aliquam vulputate erat.</p>
                </div>
                <div className="reply">
                    <Link to={"#"} className="comment-reply-link"><i className="fa fa-reply"></i> Reply</Link>
                </div>
            </div>
        </>
    )
}


function ShopDetail() {

    const [count, setCount] = useState(0);
    const [bookDetails, setBookDetails] = useState([])
    const [relatedBooks, setRelatedBooks] = useState([])
    const params = useParams()
    useEffect(() => {
        BookGet()

    }, [])
    const BookGet = async () => {
        let data = {
            id: params.id
        }
        let result = await BookDetailsById(data)
        if (result.status) {
            console.log(result.data);

            setBookDetails(result.data)
        }
    }
    const getRelatedBooks = async (ctg_id) => {
        let data = {
            categoryId: ctg_id
        }
        let result = await getBooksAccordingToCategory(data)
        if (result?.status) {
            console.log("related Books", result?.data);

            setRelatedBooks(result.data)
        }
    }
    const addToCart = async (item) => {
        let data = {
            bookId: item._id
        }
        let result = await addBookToCart(data)

    }
    let ctg_ID = bookDetails[0]?.categoryId
    getRelatedBooks(ctg_ID)
    function createSlug(text) {
        return text
          .toLowerCase() // Convert to lowercase
          .replace(/[^a-z0-9\s-]/g, '') // Remove non-alphanumeric characters except for spaces
          .trim() // Remove leading and trailing whitespace
          .replace(/\s+/g, '-') // Replace spaces with hyphens
          .replace(/-+/g, '-'); // Remove multiple consecutive hyphens
      }
      
    return (
        <>
            <div className="page-content bg-grey">
                <section className="content-inner-1">
                    <div className="container">
                        <div className="row book-grid-row style-4 m-b60">
                            <div className="col">
                                <div className="dz-box">
                                    <div className="dz-media">
                                        <img src={imageUrl + bookDetails[0]?.bookIcon} alt="book" />
                                    </div>
                                    <div className="dz-content">
                                        <div className="dz-header">
                                            <h3 className="title">{bookDetails[0]?.bookName}</h3>
                                            <div className="shop-item-rating">
                                                <div className="d-lg-flex d-sm-inline-flex d-flex align-items-center">
                                                    <ul className="dz-rating">
                                                        <li><i className="flaticon-star text-yellow"></i></li>
                                                        <li><i className="flaticon-star text-yellow"></i></li>
                                                        <li><i className="flaticon-star text-yellow"></i></li>
                                                        <li><i className="flaticon-star text-yellow"></i></li>
                                                        <li><i className="flaticon-star text-muted"></i></li>
                                                    </ul>
                                                    <h6 className="m-b0">4.0</h6>
                                                </div>
                                                <div className="social-area">
                                                    <ul className="dz-social-icon style-3">
                                                        <li className="me-2"><a href="https://www.facebook.com/dexignzone" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook-f"></i></a></li>
                                                        <li className="me-2"><a href="https://twitter.com/dexignzones" target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"></i></a></li>
                                                        <li className="me-2"><a href="https://www.whatsapp.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-whatsapp"></i></a></li>
                                                        <li><a href="https://www.google.com/intl/en-GB/gmail/about/" target="_blank" rel="noreferrer"><i className="fa-solid fa-envelope"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="dz-body">
                                            <div className="book-detail">
                                                <ul className="book-info">
                                                    <li>
                                                        <div className="writer-info">
                                                            <img src={profile2} alt="book" />
                                                            <div>
                                                                <span>Writen by</span>{bookDetails[0]?.author}
                                                            </div>
                                                        </div>
                                                    </li>
                                                    {/* <li><span>Publisher</span></li>
                                                    <li><span>Year</span>2019</li> */}
                                                </ul>
                                            </div>
                                            <p className="text-1">{bookDetails[0]?.features}</p>
                                            <div className="book-footer">
                                                <div className="price">
                                                    <h5>Rs {bookDetails[0]?.sellingPrice}</h5>
                                                    <p className="p-lr10">Rs {bookDetails[0]?.MRP}</p>
                                                </div>
                                                <div className="product-num">
                                                    <div className="quantity btn-quantity style-1 me-3">
                                                        <button className="btn btn-plus" type="button"
                                                            onClick={() => setCount(count + 1)}
                                                        >
                                                            <i className="ti-plus"></i>
                                                        </button>
                                                        <input className="quantity-input" type="text" value={count} name="demo_vertical2" />
                                                        <button className="btn btn-minus " type="button"
                                                            onClick={() => setCount(count - 1)}
                                                        >
                                                            <i className="ti-minus"></i>
                                                        </button>

                                                    </div>
                                                    <Link to={"shop-cart"} onClick={() => addToCart(bookDetails[0])} className="btn btn-primary btnhover btnhover2"><i className="flaticon-shopping-cart-1"></i> <span>Add to cart</span></Link>
                                                    <div className="bookmark-btn style-1 d-none d-sm-block">
                                                        <input className="form-check-input" type="checkbox" id="flexCheckDefault1" />
                                                        <label className="form-check-label" for="flexCheckDefault1">
                                                            <i className="flaticon-heart"></i>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-8">
                                <Tab.Container defaultActiveKey="details">
                                    <div className="product-description tabs-site-button">
                                        <Nav as="ul" className="nav nav-tabs">
                                            <Nav.Item as="li"><Nav.Link eventKey="details">Details Product</Nav.Link></Nav.Item>
                                            <Nav.Item as="li"><Nav.Link eventKey="review">Customer Reviews</Nav.Link></Nav.Item>
                                        </Nav>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="details">
                                                <table className="table border book-overview">
                                                    <tbody>

                                                        <tr key={bookDetails[0]?._id}>
                                                            <th>
                                                                Book Title</th>
                                                            <td>{bookDetails[0]?.bookName}</td>
                                                        </tr>
                                                        <tr key={bookDetails[0]?._id}>
                                                            <th>
                                                                Author</th>
                                                            <td>{bookDetails[0]?.author}</td>
                                                        </tr>
                                                        <tr key={bookDetails[0]?._id}>
                                                            <th>
                                                                ISBN</th>
                                                            <td>{bookDetails[0]?.ISBN}</td>
                                                        </tr>
                                                        <tr key={bookDetails[0]?._id}>
                                                            <th>
                                                                Ediiton Language</th>
                                                            <td>{bookDetails[0]?.language}</td>
                                                        </tr>
                                                        <tr key={bookDetails[0]?._id}>
                                                            <th>
                                                                Book Format</th>
                                                            <td>{bookDetails[0]?.itemType}</td>
                                                        </tr>
                                                        <tr key={bookDetails[0]?._id}>
                                                            <th>
                                                                Book Type</th>
                                                            <td>{bookDetails[0]?.type}</td>
                                                        </tr>
                                                        <tr key={bookDetails[0]?._id}>
                                                            <th>
                                                                File Type</th>
                                                            <td>{bookDetails[0]?.bookFilesData[0]?.fileType}</td>
                                                        </tr>

                                                        <tr className="tags">
                                                            <th>Tags</th>
                                                            <td>
                                                                <Link to={"#"} className="badge me-1">Drama</Link>
                                                                <Link to={"#"} className="badge me-1">Advanture</Link>
                                                                <Link to={"#"} className="badge me-1">Survival</Link>
                                                                <Link to={"#"} className="badge me-1">Biography</Link>
                                                                <Link to={"#"} className="badge me-1">Trending2022</Link>
                                                                <Link to={"#"} className="badge">Bestseller</Link>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="review">
                                                <div className="clear" id="comment-list">
                                                    <div className="post-comments comments-area style-1 clearfix">
                                                        <h4 className="comments-title">4 COMMENTS</h4>
                                                        <div id="comment">
                                                            <ol className="comment-list">
                                                                <li className="comment even thread-even depth-1 comment" id="comment-2">
                                                                    <CommentBlog title="Michel Poe" image={profile4} />
                                                                    <ol className="children">
                                                                        <li className="comment byuser comment-author-w3itexpertsuser bypostauthor odd alt depth-2 comment" id="comment-3">
                                                                            <CommentBlog title="Celesto Anderson" image={profile3} />
                                                                        </li>
                                                                    </ol>
                                                                </li>
                                                                <li className="comment even thread-odd thread-alt depth-1 comment" id="comment-4">
                                                                    <CommentBlog title="Ryan" image={profile2} />
                                                                </li>
                                                                <li className="comment odd alt thread-even depth-1 comment" id="comment-5">
                                                                    <CommentBlog title="Stuart" image={profile1} />
                                                                </li>
                                                            </ol>
                                                        </div>
                                                        <div className="default-form comment-respond style-1" id="respond">
                                                            <h4 className="comment-reply-title" id="reply-title">LEAVE A REPLY
                                                                <small>
                                                                    <Link to={"#"} rel="nofollow" id="cancel-comment-reply-link" style={{ display: "none" }}>Cancel reply</Link>
                                                                </small>
                                                            </h4>
                                                            <div className="clearfix">
                                                                <form method="post" id="comments_form" className="comment-form" novalidate>
                                                                    <p className="comment-form-author"><input id="name" placeholder="Author" name="author" type="text" value="" /></p>
                                                                    <p className="comment-form-email">
                                                                        <input id="email" required="required" placeholder="Email" name="email" type="email" value="" />
                                                                    </p>
                                                                    <p className="comment-form-comment">
                                                                        <textarea id="comments" placeholder="Type Comment Here" className="form-control4" name="comment" cols="45" rows="3" required="required"></textarea>
                                                                    </p>
                                                                    <p className="col-md-12 col-sm-12 col-xs-12 form-submit">
                                                                        <button id="submit" type="submit" className="submit btn btn-primary filled">
                                                                            Submit Now <i className="fa fa-angle-right m-l10"></i>
                                                                        </button>
                                                                    </p>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </Tab.Pane>
                                        </Tab.Content>
                                    </div>
                                </Tab.Container>
                            </div>
                            <div className="col-xl-4 mt-5 mt-xl-0">
                                <div className="widget">
                                    <h4 className="widget-title">Related Books</h4>
                                    <div className="row">
                                        {relatedBooks.map((data, index) => (

                                            <div className="col-xl-12 col-lg-6" key={index}>
                                                <div className="dz-shop-card style-5">
                                                    <div className="dz-media">
                                                        <img src={imageUrl+data.bookIcon} alt="" />
                                                    </div>
                                                    <div className="dz-content">
                                                        <h5 className="subtitle"> <Link to={`/books-detail/${data._id}/${createSlug(data.bookName)}`}>{data.bookName}</Link></h5>
                                                        <ul className="dz-tags">
                                                            <li>THRILLE,</li>
                                                            <li>DRAMA,</li>
                                                            <li>HORROR</li>
                                                        </ul>
                                                        <div className="price">
                                                            <span className="price-num">Rs {data.sellingPrice}</span>
                                                            <del>Rs {data.MRP}</del>
                                                        </div>
                                                        <Link to={"shop-cart"} className="btn btn-outline-primary btn-sm btnhover btnhover2"><i className="flaticon-shopping-cart-1 me-2"></i> Add to cart</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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
export default ShopDetail;