import React from 'react';
import { Link } from 'react-router-dom';

import PageTitle from './../layouts/PageTitle';

function PrivacyPolicy() {
    return (
        <>
            <div className="page-content">
                <PageTitle childPage="Return Policy" parentPage="Home" />
                <section className="content-inner-1 shop-account">
                    <div className="container">
                        <div className="row">
                            {/* <!-- Left part start --> */}
                            <div className="col-lg-8 col-md-7 col-sm-12 inner-text">
                                <h4 className="title">Return Policy for www.coachingtest.com</h4>

                                <p >At <strong>www.coachingtest.com</strong>, we aim to provide high-quality digital books and test materials to support coaching institutes. As these products are delivered in digital formats, our return and refund policy is structured to ensure clarity and fairness.</p>

                                <h4>1. Digital Product Return Policy</h4>
                                <p>All products sold on CoachingTest.com, including e-books, test papers, and digital study materials, are delivered in soft copy format (PDF or other digital formats).</p>
                                <p>Due to the nature of these digital products, all sales are final, and we do not offer returns or refunds once a product has been successfully downloaded or accessed.</p>

                                <h4>2. Exceptions for Refunds</h4>
                                <p>Refunds are only considered under the following circumstances:</p>
                                <ul>
                                    <li>You were charged more than once for the same product due to a technical issue.</li>
                                    <li>The product delivered was incorrect or incomplete due to an error from our side, and you have not downloaded or accessed it.</li>
                                </ul>
                                <p>In such cases, please contact us within 48 hours of purchase at <a href="mailto:support@coachingtest.com">support@coachingtest.com</a> with your order details, and we will assist you with either issuing a refund or providing the correct product.</p>

                                <h4>3. Product Access Issues</h4>
                                <p>If you face any issues accessing your purchased product due to technical reasons (e.g., download failure, file corruption), please reach out to our support team immediately.</p>
                                <p>We will work with you to resolve the issue and ensure you receive the correct and functional product.</p>

                                <h4>4. Contact Us</h4>
                                <p>For any return-related queries or technical support, please contact us at <a href="mailto:support@coachingtest.com">support@coachingtest.com</a>.</p>
                                <p>Our team will respond to your query within 2-3 business days to resolve the matter as quickly as possible.</p>

                                <h4>5. Important Note</h4>
                                <p>By completing a purchase, you agree to the terms of this return policy. We recommend reviewing product descriptions and samples (if available) thoroughly before making a purchase to ensure they meet your requirements.</p>

                            </div>
                            <div className="col-lg-4 col-md-5 col-sm-12 m-b30 mt-md-0 mt-4">
                                <aside className="side-bar sticky-top right">
                                    <div className="service_menu_nav widget style-1">
                                        <ul className="menu">
                                            <li className="menu-item"><Link to={"/about-us"}>About Us</Link></li>
                                            <li className="menu-item "><Link to={"/privacy-policy"}>Privacy Policy</Link></li>
                                            <li className="menu-item active"><Link to={"/return-policy"}>Return Policy</Link></li>
                                            <li className="menu-item "><Link to={"/terms-and-conditions"}>Terms And Conditions</Link></li>
                                            <li className="menu-item"><Link to={"/contact-us"}>Contact Us</Link></li>
                                        </ul>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}
export default PrivacyPolicy;