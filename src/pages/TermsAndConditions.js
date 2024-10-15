import React from 'react';
import { Link } from 'react-router-dom';

import PageTitle from './../layouts/PageTitle';

function PrivacyPolicy() {
    return (
        <>
            <div className="page-content">
                <PageTitle childPage="Terms and Conditions" parentPage="Home" />
                <section className="content-inner-1 shop-account">
                    <div className="container">
                        <div className="row">
                            {/* <!-- Left part start --> */}
                            <div className="col-lg-8 col-md-7 col-sm-12 inner-text">
                                <h4 className='title'>Terms and Conditions for <a href="https://www.coachingtest.com">https://www.coachingtest.com</a></h4>
                                <p><strong>Effective Date:</strong> [Date]</p>

                                <h4>1. Acceptance of Terms and Conditions</h4>
                                <p>By accessing and using <a href="https://www.coachingtest.com">https://www.coachingtest.com</a> (hereinafter referred to as "the Website"), you acknowledge that you have read, understood, and agreed to be bound by these Terms and Conditions. If you do not agree with any part of these Terms and Conditions, please refrain from using the Website.</p>

                                <h4>2. Intellectual Property Rights</h4>
                                <p>All content and materials available on the Website, including but not limited to text, graphics, logos, images, videos, software, and any other materials, are the property of Coaching Test or its licensors and are protected by applicable copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or otherwise use any content from the Website without prior written consent from Coaching Test.</p>

                                <h4>3. User Conduct</h4>
                                <p>a. You agree to use the Website only for lawful purposes and in a manner that does not infringe upon the rights of others, violate any applicable laws or regulations, or interfere with the Website's normal operation.</p>
                                <p>b. You must not engage in any unauthorized access, use, or distribution of any content on the Website or attempt to gain unauthorized access to the Website's systems or networks.</p>
                                <p>c. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>

                                <h4>4. Disclaimer of Warranties</h4>
                                <p>a. The Website and its content are provided on an "as-is" and "as available" basis without any warranties of any kind, either express or implied. Coaching Test makes no representations or warranties regarding the accuracy, reliability, availability, or suitability of the Website or its content.</p>
                                <p>b. Coaching Test does not guarantee that the Website will be error-free, uninterrupted, secure, or free from viruses or other harmful components.</p>

                                <h4>5. Limitation of Liability</h4>
                                <p>a. Coaching Test and its affiliates, directors, employees, or agents shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or relating to your use of the Website or any content or services provided through the Website.</p>
                                <p>b. In jurisdictions that do not allow the exclusion or limitation of certain types of damages, Coaching Test's liability shall be limited to the maximum extent permitted by law.</p>

                                <h4>6. Links to Third-Party Websites</h4>
                                <p>The Website may contain links to third-party websites that are not owned or controlled by Coaching Test. These links are provided for your convenience, and Coaching Test does not endorse or assume any responsibility for the content, privacy policies, or practices of any third-party websites. You access third-party websites at your own risk.</p>

                                <h4>7. Modification and Termination</h4>
                                <p>Coaching Test reserves the right to modify or terminate the Website or any part thereof at any time without prior notice. We may also update these Terms and Conditions from time to time, and the updated version will be posted on the Website. Your continued use of the Website after any changes to the Terms and Conditions will signify your acceptance of the revised terms.</p>

                                <h4>8. Governing Law and Jurisdiction</h4>
                                <p>These Terms and Conditions shall be governed by and construed in accordance with the laws of India and its states. Any legal action or proceeding arising out of or relating to these Terms and Conditions shall be brought exclusively in the courts located in Agra, and you consent to the jurisdiction of such courts.</p>

                                <h4>9. Severability</h4>
                                <p>If any provision of these Terms and Conditions is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect.</p>

                                <h4>10. Entire Agreement</h4>
                                <p>These Terms and Conditions constitute the entire agreement between you and Coaching Test regarding the use of the Website, superseding any prior agreements or understandings between you and Coaching Test.</p>

                                <p>By using the Website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these Terms and Conditions, please do not use the Website.</p>

                                <p>Feel free to contact us for any query at <a href="mailto:support@coachingtest.com">support@coachingtest.com</a>.</p>

                            </div>
                            <div className="col-lg-4 col-md-5 col-sm-12 m-b30 mt-md-0 mt-4">
                                <aside className="side-bar sticky-top right">
                                    <div className="service_menu_nav widget style-1">
                                        <ul className="menu">
                                            <li className="menu-item"><Link to={"/about-us"}>About Us</Link></li>
                                            <li className="menu-item "><Link to={"/privacy-policy"}>Privacy Policy</Link></li>
                                            <li className="menu-item "><Link to={"/return-policy"}>Return Policy</Link></li>
                                            <li className="menu-item active"><Link to={"/terms-and-conditions"}>Terms And Conditions</Link></li>
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