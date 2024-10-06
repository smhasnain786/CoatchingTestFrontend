import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
// Import Swiper React components
import { imageUrl } from "../../services/dataurl";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
//import "swiper/css";
import { Navigation, Pagination } from "swiper";
import {
  getAllEbooks,
} from "../../services/book.service";
//Images




// import Swiper core and required modules

function createSlug(text) {
  return text
    .toLowerCase() // Convert to lowercase
    .replace(/[^a-z0-9\s-]/g, '') // Remove non-alphanumeric characters except for spaces
    .trim() // Remove leading and trailing whitespace
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-'); // Remove multiple consecutive hyphens
}

function BookSaleSlider(props) {
  const [bookList, setBookList] = useState([])
  console.log(bookList);
  const getBooks = async () => {
    const result = await getAllEbooks()
    if (result.status && result.data) {
      console.log(result.data);
      setBookList(result.data)
    }
  }
  useEffect(() => {

    getBooks()


  }, []);
  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)
  const paginationRef = React.useRef(null)
  return (
    <>

      <div className="section-head book-align">
        <h2 className="title mb-0">{props.heading}</h2>
        <div className="pagination-align style-1">
          <div className="swiper-button-prev" ref={navigationPrevRef}><i className="fa-solid fa-angle-left"></i></div>
          <div className="swiper-pagination-two" ref={paginationRef}></div>
          <div className="swiper-button-next" ref={navigationNextRef}><i className="fa-solid fa-angle-right"></i></div>
        </div>
      </div>
      <div>
        
      <Swiper className="swiper-container books-wrapper-3 swiper-four"
        speed={1500}
        parallax={true}
        slidesPerView={5}
        spaceBetween={30}
        loop={false}
        pagination={{
          el: ".swiper-pagination-two",
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
        }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            swiper.params.navigation.prevEl = navigationPrevRef.current
            swiper.params.navigation.nextEl = navigationNextRef.current
            swiper.navigation.destroy()
            swiper.navigation.init()
            swiper.navigation.update()
          })
        }}
        modules={[Navigation, Pagination]}
        breakpoints={{
          1200: {
            slidesPerView: 5,
          },
          1191: {
            slidesPerView: 4,
          },
          767: {
            slidesPerView: 3,
          },
          591: {
            slidesPerView: 2,
            centeredSlides: true,
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 15,
            centeredSlides: true,
          },
        }}
      >

        {bookList
          .filter((item) => item.type === props.filterType)
          .map((item, ind) => (
            <SwiperSlide key={item._id}>
              <div className="books-card style-3 wow fadeInUp" data-wow-delay="0.1s">
                <div className="dz-media">
                  <img src={imageUrl + item.bookIcon} alt="book" />
                </div>
                <div className="dz-content">
                  <h5 className="title">
                    <Link to={`books-detail/${item._id}/${createSlug(item.bookName)}`}>{item.bookName}</Link>
                  </h5>
                  <ul className="dz-tags">
                    <li><Link to={"books-grid-view"}>SPORTS,</Link></li>
                    <li><Link to={"books-grid-view"}>DRAMA</Link></li>
                  </ul>
                  <div className="book-footer">
                    <div className="rate">
                      <i className="flaticon-star"></i> {ind + 1}.8
                    </div>
                    <div className="price">
                      <span className="price-num">Rs {item.sellingPrice}</span>
                      <del>Rs {item.MRP}</del>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      </div>

     
    </>
  )
}
export default BookSaleSlider;