import React from 'react';
import {Link} from 'react-router-dom';

import about1 from './../assets/images/about/about1.jpg';
import about2 from './../assets/images/about/about2.jpg';

//Components 
import HomeMainSlider2 from '../components/Home2/HomeMainSlider2';
import ClientsSlider from '../components/Home/ClientsSlider';
import RecomendedSlider from './../components/Home/RecomendedSlider';
import BookSaleSlider from './../components/Home/BookSaleSlider';
import CustomerSlider from './../components/Home2/CustomerSlider';
import OfferSlider from './../components/Home/OfferSlider';
import CounterSection from './../elements/CounterSection';
import NewsLetter from './../components/NewsLetter';

const iconBlog = [
    {title:'Quick Delivery', iconClass:'flaticon-power'}, 
    {title:'Secure Payment', iconClass:'flaticon-shield '}, 
    {title:'Best Quality', iconClass:'flaticon-like'}, 
    {title:'Return Guarantee', iconClass:'flaticon-star'}, 
];

const missionBlog = [
    {iconClass:'flaticon-open-book-1', title:'Best Bookstore' },
    {iconClass:'flaticon-exclusive', title:'Trusted Seller' },
    {iconClass:'flaticon-store', title:'Expand Store' },
];

const pricingCard = [
    {title:'Basic Plan',price:'99'},
    {title:'Standart Plan',price:'149'},
    {title:'Premium Plan',price:'199'},
];

function Home2(){
    return(
        <>
            <div className="page-content bg-white">
                <div className="main-slider style-1 slider-white"> 
                    <HomeMainSlider2 />
                </div>    
                <section className="content-inner-1 overlay-white-middle">
                    <div className="container">
                        <div className="row about-style1 align-items-center">
                            <div className="col-lg-6 m-b30 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="row sp10 about-thumb">
                                    <div className="col-sm-6 aos-item ">
                                        <div className="split-box">
                                            <div>
                                                <img className="m-b30" src={about1} alt="/" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="split-box ">
                                            <div>
                                                <img className="m-b20 aos-item" src={about2} alt="/" />
                                            </div>
                                        </div>
                                        <div className="exp-bx aos-item">
                                            <div className="exp-head">
                                                <div className="counter-num">
                                                    <h2><span className="counter">50</span><small>+</small></h2>
                                                </div>
                                                <h6 className="title">Years of Experience</h6>
                                            </div>
                                            <div className="exp-info">
                                                <ul className="list-check primary">
                                                    <li>Comics & Graphics</li>
                                                    <li>Biography</li>
                                                    <li>Literary Collections</li>
                                                    <li>Children Fiction</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 m-b30 wow fadeInUp" data-wow-delay="0.2s">
                                <div className="about-content px-lg-4">
                                    <div className="section-head style-1">
                                        <h2 className="title">Bookland Is Best Choice For Learners</h2>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration which don’t look even slightly believable. It Is A Long Established Fact That A Reader Will Be Distracted</p>
                                    </div>
                                    <Link to={"contact-us"} className="btn btn-primary shadow-primary btnhover">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                        <div className="swiper client-swiper mt-5">
                            <ClientsSlider />
                        </div>
                    </div>   
                </section>   
                <section className="content-inner-1 bg-grey reccomend ">
                    <div className="container">
                        <div className="section-head text-center">
                            <h2 className="title">Recomended For You</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                        </div>
                        <RecomendedSlider />
					</div>
				</section>
                <section className="content-inner">
                    <div className="container">
                        <div className="row">
                            {iconBlog.map((data, ind)=>(
                                <div className="col-lg-3 col-sm-6" key={ind}>
                                    <div className="icon-bx-wraper style-1 m-b30 text-center">
                                        <div className="icon-bx-sm m-b10">
                                            <i class={`icon-cell ${data.iconClass}`} />
                                        </div>
                                        <div className="icon-content">
                                            <h5 className="dz-title m-b10">{data.title}</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div> 
                    </div>
                </section>    
                <section className="content-inner-1 bg-light">
                    <div className="container">
                        <div className="section-head text-center">
                            <h2 className="title">Our Mission</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                        </div>
                        <div className="row">
                            {missionBlog.map((data, i)=>(
                                <div className="col-lg-4 col-md-6" key={i}>
                                    <div className="icon-bx-wraper style-3 m-b30">
                                        <div className="icon-lg m-b20">
                                            <i className={`icon-cell ${data.iconClass}`}></i>
                                        </div>
                                        <div className="icon-content">
                                            <h4 className="title">{data.title}</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                            <Link to={"about-us"}>Learn More <i className="fa-solid fa-angles-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            ))}   
                        </div>
                    </div>
                </section>    
                <section className="content-inner-1">
					<div className="container">
						<BookSaleSlider />
					</div>
				</section> 
                <section className="content-inner-1 bg-grey testimonial-wrapper-2">
                    <div className="container">
                        <div className="testimonial">
                            <div className="section-head text-center">
                                <h2 className="title">What Customer’s Said</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                            </div>
                        </div>
                    </div>
                    <div className="container">     
                        <CustomerSlider />           
                    </div>
                </section>   
                <section className="content-inner-1">
			        <div className="container">                  
                        <OfferSlider />       
                    </div>
                </section>   
                <section className="content-inner bg-light">
                    <div className="container">
                        <div className="section-head text-center">
                            <h2 className="title">Our Pricing</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </div>
                        <div className="row pricingtable-wraper">
                            {pricingCard.map((data, index)=>(
                                <div className="col-lg-4 col-md-6" key={index}>
                                    <div className="pricingtable-wrapper style-1 m-b30">
                                        <div className="pricingtable-inner">
                                            <div className="pricingtable-title">
                                                <h3 className="title">{data.title}</h3>
                                            </div>
                                            <div className="pricingtable-price"> 
                                                <h2 className="pricingtable-bx">${data.price}<small className="pricingtable-type">/Month</small></h2>
                                            </div>
                                            <p className="text">Aliquam dui lacus, lobortis quis sapien non.</p>
                                            <ul className="pricingtable-features">
                                                <li>Graphic Design </li>
                                                <li>Web Design</li>
                                                <li>UI/UX</li>
                                                <li>HTML/CSS</li>
                                                <li>SEO Marketing</li>
                                                <li>Business Analysis</li>
                                            </ul>
                                            <div className="pricingtable-footer"> 
                                                <Link to={"pricing"} className="btn btn-primary btnhover3">Start Now <i className="fa fa-angle-right m-l10"></i></Link> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>        
                <section className="content-inner">
                    <div className="container">
                        <div className="row sp15">
                            <CounterSection />           
                        </div>              
                    </div>
                </section>    
                <NewsLetter subscribeChange="style-2" />        
            </div>

        </>
    )
}
export default Home2;