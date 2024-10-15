import React, { useState, useEffect, useContext, useCallback } from "react";
import { Link, useLocation } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

import { AuthContext } from "../context/AuthContext";
import { imageUrl } from "../services/dataurl";
import { setProfileData } from "../services/profile.service";
import { getAllOrdersOfUser } from "../services/order.service";
import { getBookContentFileByFileID, BookDetailsById } from "../services/book.service";
import { HotToaster } from "../utils/Toaster";
import {downloadFile} from "../services/downloadFile.service.js"

const profilePages = [
    { to: '/profile', icons: 'flaticon-shopping-cart-1', name: 'Profile' },
    { to: '/my-orders', icons: 'flaticon-shopping-cart-1', name: 'My Orders' },
    { to: '/change-password', icons: 'far fa-heart', name: 'Change Password' },
    { to: '/update-email', icons: 'fa fa-briefcase', name: 'Update Email / Mobile No.' },
];

function Profile() {
    const { userProfile, profile } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    const [personalInfo, setPersonalInfo] = useState({
        name: "",
        gender: "",
        profileIcon: null,
        mobileNumber: "",
        dob: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        country: "",
        pincode: ""
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const location = useLocation();

    useEffect(() => {
        if (userProfile || profile) {
            setPersonalInfo({
                name: userProfile?.name || profile?.name || "",
                gender: userProfile?.gender || profile?.gender || "",
                mobileNumber: userProfile?.mobileNumber || profile?.mobileNumber || "",
                dob: userProfile?.dob || profile?.dob || "",
                address1: userProfile?.address1 || profile?.address1 || "",
                address2: userProfile?.address2 || profile?.address2 || "",
                city: userProfile?.city || profile?.city || "",
                state: userProfile?.state || profile?.state || "",
                country: userProfile?.country || profile?.country || "",
                pincode: userProfile?.pincode || profile?.pincode || "",
                profileIcon: null
            });
            setLoading(false);
        }
    }, [userProfile, profile]);

    const getOrders = useCallback(async () => {
        try {
            let result = await getAllOrdersOfUser();
            if (result.status) {
                const enrichedOrders = await renderOrders(result.data);
                setOrders(enrichedOrders);
            }
        } catch (err) {
            setError("Failed to load orders");
            HotToaster('error', 'Failed to load orders');
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPersonalInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setPersonalInfo(prevState => ({
            ...prevState,
            profileIcon: file
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const formData = new FormData();
        Object.keys(personalInfo).forEach(key => {
            if (key === 'profileIcon' && personalInfo[key] === null) return;
            formData.append(key, personalInfo[key]);
        });

        try {
            const result = await setProfileData(formData);
            HotToaster(result?.status, result?.message);
            if (result?.status) {
                profile();
            }
        } catch (err) {
            setError("Failed to update profile. Please try again.");
            HotToaster('error', 'Failed to update profile');
        } finally {
            setLoading(false);
        }
    };

    const getBookFileById = async (id) => {
        try {
            let result = await getBookContentFileByFileID(id);
            return result?.status ? result.data : null;
        } catch (err) {
            console.error("Error fetching book file:", err);
            return null;
        }
    };

    const renderOrders = async (orderData) => {
        // Sort orders based on createdAt timestamp in descending order
        const sortedOrders = orderData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        
        return await Promise.all(
            sortedOrders.map(async (order) => {
                // Create a map to group products by book ID
                const productMap = {};
                
                await Promise.all(
                    order.products.map(async (product) => {
                        const bookFile = await getBookFileById({ id: product.productId });
                        const bookName = (await BookDetailsById({ id: product.bookId })).data;
                        
                        const bookKey = bookName ? bookName[0]?.bookName : "No book";

                        // Initialize the book entry if not already present
                        if (!productMap[bookKey]) {
                            productMap[bookKey] = {
                                bookIcon: bookName ? bookName[0]?.bookIcon : "No book",
                                fileTypes: []
                            };
                        }

                        // Add the file type to the respective book entry
                        if (bookFile) {
                            productMap[bookKey].fileTypes.push({
                                file: bookFile[0]?.file,
                                fileType: bookFile[0]?.fileType
                            });
                        }
                    })
                );

                // Convert the map into an array
                const products = Object.entries(productMap).map(([bookName, { bookIcon, fileTypes }]) => ({
                    bookName,
                    bookIcon,
                    fileTypes
                }));

                return {
                    ...order,
                    products
                };
            })
        );
    };
    

    useEffect(() => {
        getOrders();
    }, [getOrders]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="page-content bg-white">
            <div className="content-block">
                <section className="content-inner bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 m-b30">
                                <div className="sticky-top">
                                    <div className="shop-account">
                                        <div className="account-detail text-center">
                                            <div className="my-image">
                                                {userProfile?.profileIcon ? (
                                                    <img alt="profile" src={imageUrl + userProfile.profileIcon} />
                                                ) : (
                                                    <div className="cap" style={{ backgroundColor: '#e12729', width: '80px', height: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', color: 'white', fontSize: '24px' }}>
                                                        {userProfile?.name?.charAt(0) || 'U'}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="account-title">
                                                <h4 className="m-b5">{userProfile?.name || "User"}</h4>
                                                <p className="m-b0">{userProfile?.emailId || ""}</p>
                                                <p className="m-b0">{userProfile?.mobileNumber || ""}</p>
                                                <p className="m-b0">Active</p>
                                            </div>
                                        </div>
                                        <ul className="account-list">
                                            {profilePages.map((item, index) => (
                                                <li key={index}>
                                                    <Link to={item.to} className={location.pathname === item.to ? "active" : ""}>
                                                        <i className={item.icons}></i>
                                                        <span>{item.name}</span>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-8 m-b30">
                                <div className="shop-bx shop-profile">
                                    <div className="shop-bx-title clearfix">
                                        <h5 className="text-uppercase">My Orders</h5>
                                    </div>
                                    <div className="order-cards">
                                        {orders.length > 0 ? (
                                            orders.map(order => (
                                                <div key={order._id} className="card order-card">
                                                    <div className="card-header d-flex justify-content-between align-items-center">
                                                        <h6>Order #{order._id}</h6>
                                                        <span className={`badge ${order.status === 'Delivered' ? 'badge-success' : 'badge-warning'}`}>{order.status}</span>
                                                    </div>
                                                    <div className="card-body d-flex gap-4" style={{overflowX:'auto'}}>
                                                        {order.products.map((product, index) => (
                                                            <div key={index} className="order-item d-flex align-items-center flex-column gap-3" style={{minWidth:'250px'}}>
                                                                <img src={imageUrl+product.bookIcon || '/default-icon.png'} alt={product.bookName} className="order-item-img" width={'250px'}/>
                                                                <div className="order-item-details w-100 d-flex flex-column align-items-center">
                                                                    <h6>{product.bookName}</h6>
                                                                    <Dropdown>
                                                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                                        Download File
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu>
                                                                        {product.fileTypes.map(file => (
                                                                            <Dropdown.Item key={file.fileType} onClick={() => downloadFile(file.file)}>
                                                                                {file.fileType}
                                                                            </Dropdown.Item>
                                                                        ))}
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <div className="card-footer d-flex justify-content-between">
                                                        <span className="order-total">Total: Rs {order.totalAmount}</span>
                                                        <span className="order-date">{new Date(order.createdAt).toLocaleString()}</span>
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <p>No orders found</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Profile;
