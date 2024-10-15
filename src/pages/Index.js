import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop2 from "react-scroll-to-top";

//layouts
import Header from './../layouts/Header';
import Footer from './../layouts/Footer';
import ScrollToTop from './../layouts/ScrollToTop';
import Main from '../layouts/Main';

//Pages
import Home from './Home';
import Home2 from './Home2';
import AboutUs from './AboutUs';
import MyProfile from './MyProfile';
import MyOrders from './MyOrders';
import Services from './Services';
import Faq from './Faq';
import HelpDesk from './HelpDesk';
import Pricing from './Pricing';
import PrivacyPolicy from './PrivacyPolicy';
import BooksGridView from './BooksGridView';
import ShopList from './ShopList';
import BooksGridViewSidebar from './BooksGridViewSidebar';
import CurrentAffairsShop from './CurrentAffairsShop';
import TestSeriesShop from './TestSeriesShop';
import PreviousYears from './PreviousYears';
import Ebooks from './Ebooks';
import Profile from './Profile';
import ChangePassword from './ChangePassword';
import Typing from './Typing';
import DataTranslate from './DataTranslate';
import SignIn from './SignIn';
import UpdateEmail from './UpdateEmail';
import BooksListViewSidebar from './BooksListViewSidebar';
import ShopCart from './ShopCart';
import Cart from './Cart';
import Wishlist from './Wishlist';
import Login from './Login';
import Registration from './Registration';
import ShopCheckout from './ShopCheckout';
import ShopDetail from './ShopDetail';
import BlogGrid from './BlogGrid';
import BlogLargeSidebar from './BlogLargeSidebar';
import BlogListSidebar from './BlogListSidebar';
import BlogDetail from './BlogDetail';
import ContactUs from './ContactUs';
import ReturnPolicy from './ReturPolicy';
import TermsAndConditions from './TermsAndConditions';

import ErrorPage from './ErrorPage';
import UnderConstruction from './UnderConstruction';
import ComingSoon from './ComingSoon';
import AuthProvider from "../context/AuthContext";

//images
import logo from './../assets/images/logo.png';
import logoWhite from './../assets/images/logo-white.png';

function Index(props){
    var baseName = '';
    return(
        <AuthProvider>
            <BrowserRouter basename={baseName}>
                <div className="page-wraper">
                    <Routes>
                        <Route path='/error-404' element={<ErrorPage />} />
                        <Route path='/under-construction' element={<UnderConstruction />} />
                        <Route path='/coming-soon' element={<ComingSoon />} />

                        <Route path="/index-2" element={
                            <>
                                <Header />
                                <Main>
                                    <Routes>
                                        <Route path='/index-2' element={<Home2 />} />
                                    </Routes>
                                </Main>
                                <Footer footerChange="footer-dark" logoImage={logoWhite} />
                            </>
                        } />

                        <Route path="*" element={
                            <>
                                <Header />
                                <Main>
                                    <Routes>
                                        <Route path='/' element={<Home />} />
                                        <Route path='/about-us' element={<AboutUs />} />
                                        <Route path='/my-profile' element={<MyProfile />} />
                                        <Route path='/my-orders' element={<MyOrders />} />
                                        <Route path='/services' element={<Services />} />
                                        <Route path='/faq' element={<Faq />} />
                                        <Route path='/help-desk' element={<HelpDesk />} />
                                        <Route path='/pricing' element={<Pricing />} />
                                        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
                                        <Route path='/ebooks' element={<Ebooks />} />
                                        <Route path='/books-list' element={<ShopList />} />
                                        <Route path='/current-affairs' element={<CurrentAffairsShop />} />
                                        <Route path='/test-series' element={<TestSeriesShop />} />
                                        <Route path='/previous-years' element={<PreviousYears />} />
                                        <Route path='/typing' element={<Typing />} />
                                        <Route path='/data-translate' element={<DataTranslate />} />
                                        <Route path='/return-policy' element={<ReturnPolicy />} />
                                        <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
                                        <Route path='/signin' element={<SignIn />} />
                                        <Route path='/login' element={<Login />} />
                                        <Route path='/profile' element={<Profile />} />
                                        <Route path='/change-password' element={<ChangePassword />} />
                                        <Route path='/cart' element={<Cart />} />
                                        <Route path='/update-email' element={<UpdateEmail />} />
                                        <Route path='/books-list-view-sidebar' element={<BooksListViewSidebar />} />
                                        <Route path='/shop-cart' element={<ShopCart />} />
                                        <Route path='/wishlist' element={<Wishlist />} />
                                        <Route path='/shop-login' element={<Login />} />
                                        <Route path='/shop-registration' element={<Registration />} />
                                        <Route path='/shop-checkout' element={<ShopCheckout />} />
                                        <Route path='/books-detail/:id/:name' element={<ShopDetail />} />
                                        <Route path='/blog-grid' element={<BlogGrid />} />
                                        <Route path='/blog-large-sidebar' element={<BlogLargeSidebar />} />
                                        <Route path='/blog-list-sidebar' element={<BlogListSidebar />} />
                                        <Route path='/blog-detail' element={<BlogDetail />} />
                                        <Route path='/contact-us' element={<ContactUs />} />
                                    </Routes>
                                </Main>
                                <Footer footerChange="style-1" logoImage={logo} />
                            </>
                        } />
                    </Routes>
                    <ScrollToTop />
                    <ScrollToTop2 className="styles_scroll-to-top__2A70v  fas fa-arrow-up scroltop" smooth />
                </div>
            </BrowserRouter>
        </AuthProvider>
    )
}

export default Index;
