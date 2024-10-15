import React from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';


//Components 
import PageTitle from './../layouts/PageTitle';
import TestimonialSlider from './../components/Home/TestimonialSlider';
import ClientsSlider from './../components/Home/ClientsSlider';
import NewsLetter from '../components/NewsLetter';

//element
import CounterSection from './../elements/CounterSection';

//Imgaes
import about1 from './../assets/images/about/about1.jpg';
import about2 from './../assets/images/about/about2.jpg';


const missionBlog = [
    { iconClass: 'flaticon-open-book-1', title: 'Best Bookstore' },
    { iconClass: 'flaticon-exclusive', title: 'Trusted Seller' },
    { iconClass: 'flaticon-store', title: 'Expand Store' },
];

function AboutUs() {
    return (
        <>
            <div className="page-content bg-white">
                <PageTitle parentPage="Home" childPage="About us" />
                <section className="content-inner overlay-white-middle">
                    <div className="container">
                        <div className="row about-style1 align-items-center">

                            <div className="col-lg-6 m-b30 aos-item">
                                <div className="about-content px-lg-4">
                                    <div className="section-head style-1">
                                        <h2 className="title">About Us</h2>
                                        <p>Welcome to www.coachingtest.com, a one-stop solution for coaching institutes seeking high-quality educational materials in digital formats. For the past 4 years, we’ve been providing a wide range of books, test papers, and PowerPoint presentations (PPTs) designed to support and enhance the learning experience for students across various subjects and competitive exams.</p>
                                    </div>
                                    <Link to={"/contact-us"} className="btn btn-primary btnhover shadow-primary">Contact Us</Link>
                                </div>
                            </div>
                            <div className="col-lg-6 m-b30">
                                <div className="row sp10 about-thumb">
                                    <div className="col-sm-6 aos-item" >
                                        <div className="split-box">
                                            <div>
                                                <img className="m-b30" src={about1} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="split-box ">
                                            <div>
                                                <img className="m-b20 aos-item" src={about2} alt="" />
                                            </div>
                                        </div>
                                        <div className="exp-bx aos-item" >
                                            <div className="exp-head">
                                                <div className="counter-num">
                                                    <h2><span className="counter"> <CountUp end={5} /></span><small>+</small></h2>
                                                </div>
                                                <h6 className="title">Years of Experience</h6>
                                            </div>
                                            <div className="exp-info">
                                                {/* <ul className="list-check primary">
                                                    <li>Comics & Graphics</li>
                                                    <li>Biography</li>
                                                    <li>Literary Collections</li>
                                                    <li>Children Fiction</li>
                                                </ul> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>





                <section className="content-inner overlay-white-middle">
                    <div className="container">
                        <div className="row about-style1 align-items-center">
                            <div className="col-lg-6 m-b30">
                                <div className="row sp10 about-thumb">
                                    <div className="col-sm-6 aos-item" >
                                        <div className="split-box">
                                            <div>
                                                <img className="m-b30" src={about1} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="split-box ">
                                            <div>
                                                <img className="m-b20 aos-item" src={about2} alt="" />
                                            </div>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 m-b30 aos-item">
                                <div className="about-content px-lg-4">
                                    <div className="section-head style-1">
                                        <h2 className="title">Our Journey</h2>
                                        <p>www.coachingtest.com was founded with a vision to simplify access to educational content for coaching institutes. Recognizing the increasing need for well-organized and easy-to-use materials, we decided to focus on providing digital resources that can be accessed and shared with coaching effortlessly.</p>
                                        <p>Starting small, our dedication to quality and affordability has helped us grow into a trusted resource partner for numerous institutes. Today, we continue to evolve with the changing demands of education, constantly updating and refining our offerings.</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="content-inner overlay-white-middle">
                    <div className="container">
                        <div className="row about-style1 align-items-center">

                            <div className="col-lg-6 m-b30 aos-item">
                                <div className="about-content px-lg-4">
                                    <div className="section-head style-1">
                                        <h2 className="title">Our Products</h2>
                                        <p>We specialize in:</p>
                                        <ul>
                                            <li><strong>Books:</strong> Comprehensive e-books that cover a wide variety of subjects, ensuring institutes have the latest study material.</li>
                                            <li><strong>Test Papers:</strong> Carefully designed test papers that follow the latest exam patterns to help students prepare effectively.</li>
                                            <li><strong>PPTs:</strong> Professionally crafted PowerPoint presentations that coaching institutes can use for classroom teaching, making lessons more engaging and visually appealing.</li>
                                        </ul>
                                        <p className='mt-3'>
                                            All our materials are available in soft copy format, making them instantly accessible and easy to integrate into your teaching process.
                                            Whether it’s preparing for competitive exams or enhancing subject knowledge, our digital resources are created to meet the specific needs of coaching institutes.
                                        </p>

                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-6 m-b30">
                                <div className="row sp10 about-thumb">
                                    <div className="col-sm-6 aos-item" >
                                        <div className="split-box">
                                            <div>
                                                <img className="m-b30" src={about1} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="split-box ">
                                            <div>
                                                <img className="m-b20 aos-item" src={about2} alt="" />
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="content-inner overlay-white-middle">
                    <div className="container">
                        <div className="row about-style1 align-items-center">
                            <div className="col-lg-6 m-b30">
                                <div className="row sp10 about-thumb">
                                    <div className="col-sm-6 aos-item" >
                                        <div className="split-box">
                                            <div>
                                                <img className="m-b30" src={about1} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="split-box ">
                                            <div>
                                                <img className="m-b20 aos-item" src={about2} alt="" />
                                            </div>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 m-b30 aos-item">
                                <div className="about-content px-lg-4">
                                    <div className="section-head style-1">
                                        <h2 className="title">Why Choose CoachingTest.com?</h2>
                                        <p><strong>Experience:</strong> With 4 years of experience, we understand the educational needs of coaching institutes and strive to provide them with top-quality content.</p>

                                        <p><strong>Wide Range of Products:</strong> From books to test papers and PPTs, we offer a comprehensive set of tools that can be tailored to your curriculum.</p>

                                        <p><strong>Instant Access:</strong> As all our products are in digital format, you can download them immediately after purchase, ensuring you always have what you need without delays.</p>

                                        <p><strong>Affordable Pricing:</strong> We offer cost-effective solutions without compromising the quality of the educational content.</p>

                                        <p><strong>Expert Content:</strong> All materials are created by educators and professionals with in-depth knowledge of the subject matter, ensuring students receive the best preparation possible.</p>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content-inner overlay-white-middle">
                    <div className="container">
                        <div className="row about-style1 align-items-center">

                            <div className="col-lg-6 m-b30 aos-item">
                                <div className="about-content px-lg-4">
                                    <div className="section-head style-1">
                                        <h2 className="title">Our Mission</h2>
                                        <p>At CoachingTest.com, our mission is to support coaching institutes by providing them with reliable, up-to-date, and engaging digital resources. We believe that with the right tools, every institute can enhance their teaching and help students achieve their full potential.</p>
                                       

                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-6 m-b30">
                                <div className="row sp10 about-thumb">
                                    <div className="col-sm-6 aos-item" >
                                        <div className="split-box">
                                            <div>
                                                <img className="m-b30" src={about1} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="split-box ">
                                            <div>
                                                <img className="m-b20 aos-item" src={about2} alt="" />
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content-inner overlay-white-middle">
                    <div className="container">
                        <div className="row about-style1 align-items-center">
                            <div className="col-lg-6 m-b30">
                                <div className="row sp10 about-thumb">
                                    <div className="col-sm-6 aos-item" >
                                        <div className="split-box">
                                            <div>
                                                <img className="m-b30" src={about1} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="split-box ">
                                            <div>
                                                <img className="m-b20 aos-item" src={about2} alt="" />
                                            </div>
                                        </div>
                                        <div className="exp-bx aos-item" >
                                            
                                            <div className="exp-info">
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 m-b30 aos-item">
                                <div className="about-content px-lg-4">
                                    <div className="section-head style-1">
                                        <h2 className="title">Contact Us</h2>
                                        <p>Have questions? Need support? We’re here to help! Reach out to us at support@coachingtest.com for any inquiries.</p>

                                        <p>Thank you for trusting CoachingTest.com as your go-to resource provider for digital educational materials. We look forward to continuing our journey with you!</p>

                                        

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content-inner-1 testimonial-wrapper">
                    <TestimonialSlider />
                </section>
                <section className="content-inner bg-light">
                    <div className="container">
                        <div className="row sp15">
                            <CounterSection />
                        </div>
                    </div>
                </section>
                <div className="py-5">
                    <div className="container">
                        <ClientsSlider />
                    </div>
                </div>
                <NewsLetter />
            </div>
        </>
    )
}
export default AboutUs;