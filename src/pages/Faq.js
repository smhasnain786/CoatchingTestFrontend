import React from 'react';
import { Accordion } from 'react-bootstrap';

//Components 
import PageTitle from './../layouts/PageTitle';
//element
import CounterSection from './../elements/CounterSection';
//image
import pic1 from './../assets/images/about/pic1.jpg';
import pic2 from './../assets/images/about/pic2.jpg';

const accordionBlog = [
    { title: 'Cras turpis felis, elementum sed mi at ?' },
    { title: 'Vestibulum nibh risus, in neque eleifen ?' },
    { title: 'Donec maximus, sapien id auctor ?' }
];

function Faq() {
    return (
        <>
            <div className="page-content">
                <PageTitle parentPage="Home" childPage="FAQ's" />
                <section className="main-faq-content content-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 align-self-center mb-4">
                                <div className="faq-content-box">
                                    <div className="section-head">
                                        <h2 className="title">Frequently Asked Questions</h2>
                                        <p>Find answers to the most common questions about www.coachingtest.com.</p>
                                    </div>
                                    <div className="faq-accordion">
                                        <Accordion flush>
                                            {/* FAQ 1 */}
                                            <Accordion.Item eventKey="0" className="card">
                                                <div className="card-header">
                                                    <Accordion.Header as="h3" className="title">
                                                        <span>What exams are covered on www.coachingtest.com?</span>
                                                        <span className="icon">
                                                            <i className="fa fa-angle-left" aria-hidden="true"></i>
                                                        </span>
                                                    </Accordion.Header>
                                                </div>
                                                <Accordion.Body eventKey="0">
                                                    <p>www.coachingtest.com covers a wide array of competitive exams, including but not limited to UPSC Civil Services, SSC CGL, IBPS PO, SBI Clerk, Railway exams, and various state-level examinations. We strive to provide comprehensive coaching and test materials for a diverse range of exams.</p>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            {/* FAQ 2 */}
                                            <Accordion.Item eventKey="1" className="card">
                                                <div className="card-header">
                                                    <Accordion.Header as="h3" className="title">
                                                        <span>Are the mock tests on www.coachingtest.com similar to the actual exams?</span>
                                                        <span className="icon">
                                                            <i className="fa fa-angle-left" aria-hidden="true"></i>
                                                        </span>
                                                    </Accordion.Header>
                                                </div>
                                                <Accordion.Body eventKey="1">
                                                    <p>Yes, our mock tests are designed to simulate the actual exam environment as closely as possible. The questions are curated to reflect the exam pattern and difficulty level, giving you a realistic experience of the actual test.</p>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            {/* FAQ 3 */}
                                            <Accordion.Item eventKey="2" className="card">
                                                <div className="card-header">
                                                    <Accordion.Header as="h3" className="title">
                                                        <span>What should I do if I encounter technical issues while using the website?</span>
                                                        <span className="icon">
                                                            <i className="fa fa-angle-left" aria-hidden="true"></i>
                                                        </span>
                                                    </Accordion.Header>
                                                </div>
                                                <Accordion.Body eventKey="2">
                                                    <p>If you face any technical issues while using www.coachingtest.com, you can reach out to our customer support team through the "Contact Us" page or send an email to support@coachingtest.com. Our team will promptly assist you and resolve any problems you may encounter.</p>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            {/* FAQ 4 */}
                                            <Accordion.Item eventKey="3" className="card">
                                                <div className="card-header">
                                                    <Accordion.Header as="h3" className="title">
                                                        <span>Can I request specific coaching materials for a particular exam?</span>
                                                        <span className="icon">
                                                            <i className="fa fa-angle-left" aria-hidden="true"></i>
                                                        </span>
                                                    </Accordion.Header>
                                                </div>
                                                <Accordion.Body eventKey="3">
                                                    <p>We are always open to suggestions and feedback from our users. If you have specific coaching material requests for a particular exam, feel free to contact our support team, and we will consider your input for future content development.</p>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            {/* FAQ 5 */}
                                            <Accordion.Item eventKey="4" className="card">
                                                <div className="card-header">
                                                    <Accordion.Header as="h3" className="title">
                                                        <span>Can I cancel my premium subscription if needed?</span>
                                                        <span className="icon">
                                                            <i className="fa fa-angle-left" aria-hidden="true"></i>
                                                        </span>
                                                    </Accordion.Header>
                                                </div>
                                                <Accordion.Body eventKey="4">
                                                    <p>Yes, you can cancel your premium subscription at any time. Simply visit the "My Account" section on the website, and you'll find options to manage your subscription, including cancellation.</p>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            {/* FAQ 6 */}
                                            <Accordion.Item eventKey="5" className="card">
                                                <div className="card-header">
                                                    <Accordion.Header as="h3" className="title">
                                                        <span>Does www.coachingtest.com offer any free trial for premium packages?</span>
                                                        <span className="icon">
                                                            <i className="fa fa-angle-left" aria-hidden="true"></i>
                                                        </span>
                                                    </Accordion.Header>
                                                </div>
                                                <Accordion.Body eventKey="5">
                                                    <p>Yes, we often provide free trial periods for our premium packages. Keep an eye on our website or app for any ongoing promotions or offers.</p>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            {/* FAQ 7 */}
                                            <Accordion.Item eventKey="6" className="card">
                                                <div className="card-header">
                                                    <Accordion.Header as="h3" className="title">
                                                        <span>How often is the content updated on www.coachingtest.com?</span>
                                                        <span className="icon">
                                                            <i className="fa fa-angle-left" aria-hidden="true"></i>
                                                        </span>
                                                    </Accordion.Header>
                                                </div>
                                                <Accordion.Body eventKey="6">
                                                    <p>We strive to keep our coaching materials and test series up-to-date with the latest exam patterns and syllabus. Our content is regularly reviewed and updated to ensure relevancy and accuracy for our users.</p>
                                                </Accordion.Body>
                                            </Accordion.Item>


                                            {/* FAQ 8 */}
                                            <Accordion.Item eventKey="7" className="card">
                                                <div className="card-header">
                                                    <Accordion.Header as="h3" className="title">
                                                        <span>What if I forget my login credentials?</span>
                                                        <span className="icon">
                                                            <i className="fa fa-angle-left" aria-hidden="true"></i>
                                                        </span>
                                                    </Accordion.Header>
                                                </div>
                                                <Accordion.Body eventKey="7">
                                                    <p>If you forget your login credentials, you can use the "Forgot Password" feature on the login page to reset your password. A password reset link will be sent to your registered email address.</p>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            {/* FAQ 9 */}
                                            <Accordion.Item eventKey="8" className="card">
                                                <div className="card-header">
                                                    <Accordion.Header as="h3" className="title">
                                                        <span>What payment methods are accepted on www.coachingtest.com?</span>
                                                        <span className="icon">
                                                            <i className="fa fa-angle-left" aria-hidden="true"></i>
                                                        </span>
                                                    </Accordion.Header>
                                                </div>
                                                <Accordion.Body eventKey="8">
                                                    <p>We accept a variety of payment methods, including credit cards, debit cards, net banking, and mobile wallets. We aim to make payments convenient for all users.</p>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            {/* FAQ 10 */}
                                            <Accordion.Item eventKey="9" className="card">
                                                <div className="card-header">
                                                    <Accordion.Header as="h3" className="title">
                                                        <span>Can I upgrade or downgrade my subscription plan?</span>
                                                        <span className="icon">
                                                            <i className="fa fa-angle-left" aria-hidden="true"></i>
                                                        </span>
                                                    </Accordion.Header>
                                                </div>
                                                <Accordion.Body eventKey="9">
                                                    <p>Yes, you can upgrade or downgrade your subscription plan at any time through the "My Account" section. Any changes in subscription charges will be adjusted accordingly.</p>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            {/* FAQ 11 */}
                                            <Accordion.Item eventKey="10" className="card">
                                                <div className="card-header">
                                                    <Accordion.Header as="h3" className="title">
                                                        <span>Is there a mobile app for www.coachingtest.com?</span>
                                                        <span className="icon">
                                                            <i className="fa fa-angle-left" aria-hidden="true"></i>
                                                        </span>
                                                    </Accordion.Header>
                                                </div>
                                                <Accordion.Body eventKey="10">
                                                    <p>Yes, www.coachingtest.com offers a mobile app that you can download from the App Store or Google Play. The app offers all the features available on the website, making it easier to access your study materials on the go.</p>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="10" className="card">
                                                <div className="card-header">
                                                    <Accordion.Header as="h3" className="title">
                                                        <span>Can I cancel my premium subscription if needed? </span>
                                                        <span className="icon">
                                                            <i className="fa fa-angle-left" aria-hidden="true"></i>
                                                        </span>
                                                    </Accordion.Header>
                                                </div>
                                                <Accordion.Body eventKey="10">
                                                    <p>Yes, you can cancel your premium subscription at any time. Simply visit the "My Account" section on the website and you'll find options to manage your subscription, including cancellation.</p>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            {/* FAQ 13 */}
                                            <Accordion.Item eventKey="10" className="card">
                                                <div className="card-header">
                                                    <Accordion.Header as="h3" className="title">
                                                        <span>Does www.coachingtest.com offer any free trial for premium packages? </span>
                                                        <span className="icon">
                                                            <i className="fa fa-angle-left" aria-hidden="true"></i>
                                                        </span>
                                                    </Accordion.Header>
                                                </div>
                                                <Accordion.Body eventKey="10">
                                                    <p>Yes, we often provide free trial periods for our premium packages. Keep an eye on our website or app for any ongoing promotions or offers.</p>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            {/* FAQ 14 */}
                                            <Accordion.Item eventKey="10" className="card">
                                                <div className="card-header">
                                                    <Accordion.Header as="h3" className="title">
                                                        <span>How often is the content updated on www.coachingtest.com? </span>
                                                        <span className="icon">
                                                            <i className="fa fa-angle-left" aria-hidden="true"></i>
                                                        </span>
                                                    </Accordion.Header>
                                                </div>
                                                <Accordion.Body eventKey="10">
                                                    <p>We strive to keep our coaching materials and test series up-to-date with the latest exam patterns and syllabus. Our content is regularly reviewed and updated to ensure relevancy and accuracy for our users.If you have any other questions or concerns, feel free to reach out to our customer support team. We are dedicated to assisting you in your exam preparation journey on www.coachingtest.com.</p>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                        </Accordion>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-lg-6 order-lg-2 order-1 mb-4">
                                <div className="faq-img-box wow left-animation rounded-md" data-wow-delay="0.2s">
                                    <img src={pic2} alt="FAQ" />
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>
                {/* <section className="main-faq-content bg-light content-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mb-4">
                                <div className="faq-img-box rounded-md">
                                    <img src={pic1} alt="FAQ" />
                                </div>
                            </div>
                            <div className="col-lg-6 align-self-center mb-4">
                                <div className="faq-content-box">
                                    <div className="section-head">
                                        <h2 className="title">Managing Books</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                    </div>
                                    <div className="faq-accordion">
                                        <Accordion>
                                            
                                        </Accordion>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
            </div>

        </>
    )

}
export default Faq;