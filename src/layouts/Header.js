import React, {useContext, useEffect, useState } from 'react';
import { Link,useNavigate,useLocation } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
//images
import { imageUrl } from "../services/dataurl";
import { HotToaster } from "../utils/Toaster";

import logo from './../assets/images/logo.png';
import profile from './../assets/images/profile1.jpg';
import pic1 from './../assets/images/books/small/pic1.jpg';
import pic2 from './../assets/images/books/small/pic2.jpg';
import pic3 from './../assets/images/books/small/pic3.jpg';
import { AuthContext } from "../context/AuthContext";
import { getCartTotalAmountAndQuentity,getBookFromCart, removeItemFromCart  } from "../services/book.service";

import Collapse from 'react-bootstrap/Collapse';
import { MenuListArray2 } from './MenuListArray2';

function Header() {
	const [selectBtn, setSelectBtn] = useState('Category');
	const [profileContainer, setProfileContainer] = useState(false);
	const { isLoggedIn,userProfile,setIsLoggedIn } = useContext(AuthContext)
	const navigate=useNavigate()
	const [cartVisiable, setCartVisiable] = useState(false);
	const [noOfCart, setNoOfcart] = useState(0);
	const [query, setQuery] = useState("");
	const [totalAmountAndQuentity, setTotalAmountAndQuentity] = useState([]);
	const location = useLocation()

console.log("noOfCart",noOfCart,'totalAmountAndQuentity',totalAmountAndQuentity);



	/* for sticky header */
	const [headerFix, setheaderFix] = React.useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			setheaderFix(window.scrollY > 50);
		});
	}, []);

	/* for open menu Toggle btn  */
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const showSidebar = () => setSidebarOpen(!sidebarOpen);
	/*  Toggle btn End  */

	useEffect(() => {
		var mainMenu = document.getElementById('OpenMenu');
		if (mainMenu) {
			if (sidebarOpen) {
				mainMenu.classList.add('show');
			} else {
				mainMenu.classList.remove('show');
			}
		}
	});

	// Menu dropdown list 
	const [active, setActive] = useState('Home')
	const handleMenuActive = status => {
		setActive(status)
		if (active === status) {
			setActive('');
		}
	}
	

	useEffect(()=>{
		getTotalAmount()
		console.log("locationlocation",location)
	  },[])
	
	  const handleQueryChange = (e) => {
		setQuery(e.target.value)
	  }
	  const handleSubmit = (e) => {
		e.preventDefaults()
		console.log("sjsksddfhsdfdsjf");
	  }
	  const getTotalAmount = async() => {
		let result = await getCartTotalAmountAndQuentity()
		if(result.status){
		  setTotalAmountAndQuentity(result.data)
		}
	  }
	  const [cart,setCart] = useState([])
	  const [totalAmount,settotalAmount] = useState(0)
	  useEffect(()=>{
		  getCartDetails()
	  },[])
	  const getCartDetails = async() =>{
		  let result = await getBookFromCart()
		  if(result.status){
			  setCart(result.data)
			  totalAmountFun(result.data)
		  }
	  }
	  const totalAmountFun = (item) => {
		let i=0
		let total=0
		for(i;i<item.length;i++){
		  total += item[i].bookdata[0]?.sellingPrice
		}
		settotalAmount(total)
	  }
	  const removeCart  = async(item) => {
		let data = {
		  id:item._id
		}
		let result = await removeItemFromCart(data)
		if(result.status){
		  getCartDetails()
		  getTotalAmount()
	  }
		HotToaster(result.status,result.message)
	   
	  }

	return (

		<header className="site-header mo-left header style-1">
			<div className="header-info-bar">
				<div className="container clearfix">
					{/* <!-- Website Logo --> */}
					<div className="logo-header logo-dark">
						<Link to={""}><img src={logo} alt="logo" /></Link>
					</div>

					{/* <!-- EXTRA NAV --> */}
					<div className="extra-nav">
						<div className="extra-cell">
							<ul className="navbar-nav header-right">
								{/* <li className="nav-item">
									<Link to={"wishlist"} className="nav-link">
										<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" /></svg>
										<span className="badge">21</span>
									</Link>
								</li> */}
								{console.log("cart===>>>",cart)}
								<Dropdown as="li" className="nav-item">
									<Dropdown.Toggle as="button" type="button" className="nav-link box cart-btn i-false">
										<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" /></svg>
										<span className="badge">{totalAmountAndQuentity?totalAmountAndQuentity[0]?.itemCount:'0'}</span>
									</Dropdown.Toggle>
									<Dropdown.Menu as="ul" className="dropdown-menu cart-list">
								{cart.length>0 && cart.map((item,index)=>{
									if (item.bookdata[0]) {
										return (
											<li className="cart-item">
												<div className="media">
													<div className="media-left">
														<Link to={"books-detail"}>
															<img alt="" className="media-object" src={imageUrl+item.bookdata[0]?.bookIcon} />
														</Link>
													</div>
													<div className="media-body">
														<h6 className="dz-title"><Link to={"books-detail"} className="media-heading">{item.bookdata[0]?.bookName}</Link></h6>
														<span className="dz-price">&#8377; {item.bookdata[0]?.sellingPrice}</span>
														<span className="item-close" onClick={()=>removeCart(item)}>&times;</span>
													</div>
												</div>
											</li>
										)
									}
									
								})}
								<li className="cart-item text-center">
											<h6 className="text-secondary">Totle = &#8377; {totalAmountAndQuentity?totalAmountAndQuentity[0]?.totalSellingPrice:'0'}</h6>
										</li>
										<li className="text-center d-flex">
											<Link to={"cart"} className="btn btn-sm btn-primary me-2 btnhover w-100">View Cart</Link>
											<Link to={"checkout"} className="btn btn-sm btn-outline-primary btnhover w-100">Checkout</Link>
										</li>
									</Dropdown.Menu>
									</Dropdown>
									
										
										
								
								{
								userProfile.name ? (
								<Dropdown as="li" className="nav-item dropdown profile-dropdown  ms-4">
									<Dropdown.Toggle as="div" className="nav-link i-false">
										<img src={imageUrl+userProfile.profileIcon} alt="/" />
										<div className="profile-info">
											<h6 className="title">{userProfile.name}</h6>
											<span>{userProfile.emailId}</span>
										</div>
									</Dropdown.Toggle>
									<Dropdown.Menu className="dropdown-menu py-0 dropdown-menu-end">
										<div className="dropdown-header">
										<h6 className="title">{userProfile.name}</h6>
										<span>{userProfile.emailId}</span>
										</div>
										<div className="dropdown-body">
											<Link to={"profile"} className="dropdown-item d-flex justify-content-between align-items-center ai-icon">
												<div>
													<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
													<span className="ms-2">Profile</span>
												</div>
											</Link>
											<Link to={"/my-orders"} className="dropdown-item d-flex justify-content-between align-items-center ai-icon">
												<div>
													<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" /></svg>
													<span className="ms-2">My Order</span>
												</div>
											</Link>
											{/* <Link to={"wishlist"} className="dropdown-item d-flex justify-content-between align-items-center ai-icon">
												<div>
													<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" /></svg>
													<span className="ms-2">Wishlist</span>
												</div>
											</Link> */}
										</div>
										<div className="dropdown-footer">
											<button   onClick={() => {
												localStorage.removeItem("emailId");
												localStorage.removeItem("token");
												setIsLoggedIn(false)
												setProfileContainer(!profileContainer)
												window.location.href="/"
											}} className="btn btn-primary w-100 btnhover btn-sm">Log Out</button>
										</div>
									</Dropdown.Menu>
								</Dropdown>):(<li className="nav-item">
									<Link to={"login"} className="nav-link">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"/></svg>
										
									</Link>
								</li>)
										
									
								}
								
							</ul>
						</div>
					</div>

					{/* <!-- header search nav --> */}
					{/* <div className="header-search-nav">
						<form className="header-item-search">
							<div className="input-group search-input">
								
								<Dropdown className="dropdown bootstrap-select default-select drop-head">
									<Dropdown.Toggle as="div" className="i-false">{selectBtn}
										<i className="ms-4 font-10 fa-solid fa-chevron-down"></i>
									</Dropdown.Toggle>
									<Dropdown.Menu>
										<Dropdown.Item onClick={() => setSelectBtn('Category')}>Category</Dropdown.Item>
										<Dropdown.Item onClick={() => setSelectBtn('Photography')}>Photography</Dropdown.Item>
										<Dropdown.Item onClick={() => setSelectBtn('Arts')}>Arts</Dropdown.Item>
										<Dropdown.Item onClick={() => setSelectBtn('Adventure')}>Adventure</Dropdown.Item>
										<Dropdown.Item onClick={() => setSelectBtn('Action')}>Action</Dropdown.Item>
										<Dropdown.Item onClick={() => setSelectBtn('Games')}>Games</Dropdown.Item>
										<Dropdown.Item onClick={() => setSelectBtn('Movies')}>Movies</Dropdown.Item>
										<Dropdown.Item onClick={() => setSelectBtn('Comics')}>Comics</Dropdown.Item>
										<Dropdown.Item onClick={() => setSelectBtn('Biographies')}>Biographies</Dropdown.Item>
										<Dropdown.Item onClick={() => setSelectBtn('Children’s Books')}>Children’s Books</Dropdown.Item>
										<Dropdown.Item onClick={() => setSelectBtn('Historical')}>Historical</Dropdown.Item>
										<Dropdown.Item onClick={() => setSelectBtn('Contemporary')}>Contemporary</Dropdown.Item>
										<Dropdown.Item onClick={() => setSelectBtn('Classics')}>Classics</Dropdown.Item>
										<Dropdown.Item onClick={() => setSelectBtn('Education')}>Education</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
								<input type="text" className="form-control" aria-label="Text input with dropdown button" placeholder="Search Books Here" />
								<button className="btn" type="button"><i className="flaticon-loupe"></i></button>
							</div>
						</form>
					</div> */}
				</div>
			</div>
			<div className={`sticky-header main-bar-wraper navbar-expand-lg ${headerFix ? "is-fixed" : ""}`}>
				<div className="main-bar clearfix">
					<div className="container clearfix">
						{/* <!-- Website Logo --> */}
						<div className="logo-header logo-dark">
							<Link to={""}><img src={logo} alt="logo" /></Link>
						</div>

						{/* <!-- Nav Toggle Button --> */}
						<button className={`navbar-toggler collapsed navicon justify-content-end ${sidebarOpen ? 'open' : ''}`} onClick={showSidebar} >
							<span></span>
							<span></span>
							<span></span>
						</button>

						{/* <!-- EXTRA NAV --> */}
						<div className="extra-nav">
							<div className="extra-cell">
								<Link to={"contact-us"} className="btn btn-primary btnhover">Get In Touch</Link>
							</div>
						</div>

						{/* <!-- Main Nav --> */}
						<div className={`header-nav navbar-collapse collapse justify-content-start ${sidebarOpen ? 'show' : ''}`} id="navbarNavDropdown">
							<div className="logo-header logo-dark">
								<Link to={""}><img src={logo} alt="" /></Link>
							</div>
							<form className="search-input">
								<div className="input-group">
									<input type="text" className="form-control" aria-label="Text input with dropdown button" placeholder="Search Books Here" />
									<button className="btn" type="button"><i className="flaticon-loupe"></i></button>
								</div>
							</form>
							<ul className="nav navbar-nav">
								{MenuListArray2.map((data, index) => {
									return (
										<li key={index}
											className={`${(active === data.title) && (data.content) ? 'sub-menu-down open' : data.content ? 'sub-menu-down' : ''} `}
										>
											<Link to={data.content ? "#" : data.to}
												onClick={() => handleMenuActive(data.title)}
											>
												<span>{data.title}</span>
											</Link>
											{data.content &&
												<Collapse in={active === data.title ? true : false}>
													<ul className="sub-menu">
														{data.content && data.content.map((data, index) => {
															return (
																<li key={index}><Link to={data.to}>{data.title}</Link></li>
															)
														})}
													</ul>
												</Collapse>
											}
										</li>
									)
								})}
							</ul>
							<div className="dz-social-icon">
								<ul>
									<li><a className="fab fa-facebook-f" target="_blank" rel="noreferrer" href="https://www.facebook.com/dexignzone"></a></li>
									<li><a className="fab fa-twitter" target="_blank" rel="noreferrer" href="https://twitter.com/dexignzones"></a></li>
									<li><a className="fab fa-linkedin-in" target="_blank" rel="noreferrer" href="https://www.linkedin.com/showcase/3686700/admin/"></a></li>
									<li><a className="fab fa-instagram" target="_blank" rel="noreferrer" href="https://www.instagram.com/website_templates__/"></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}
export default Header;