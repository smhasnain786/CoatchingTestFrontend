import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from 'react-router-dom';
import { imageUrl } from "../services/dataurl";
import { HotToaster } from "../utils/Toaster";
import { AuthContext } from "../context/AuthContext";

import { updateUsersEmailAndMobile } from "../services/profile.service";


const profilePages = [
    { to: '/profile', icons: 'flaticon-shopping-cart-1', name: 'Profile' },
    { to: '/my-orders', icons: 'flaticon-shopping-cart-1', name: 'My Orders' },
    { to: '/change-password', icons: 'far fa-heart', name: 'Change Password' },
    { to: '/update-email', icons: 'fa fa-briefcase', name: 'Update Email / Mobile No.' },

];

function ChangePassword() {
    const location = useLocation();
    const { userProfile, profile } = useContext(AuthContext);

    const [info,setInfo] = useState({
        emailId:"",
        mobileNumber:""
        })


    const handleChange = (e) => {
        let { name,value } = e.target
        setInfo(prevState=>({
            ...prevState,
            [name]:value
        }))

    }
    const handleSubmit = async(e) => {
        e.preventDefault()
        const result = await updateUsersEmailAndMobile(info)
        HotToaster(result?.status,result?.message) 
        profile()
    }

    return (
        <div className="page-content bg-white">
            <div className="content-block">
                <section className="content-inner bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 m-b30">
                                {/* Sidebar content */}
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
                                                    <Link to={item.to} className={location.pathname=== item.to ? "active" : ""}>
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
                                        <h5 className="text-uppercase">Update Mobile and Email</h5>
                                    </div>

                                    <form onSubmit={handleSubmit}>
                                        <div className="row m-b30">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="mb-3">

                                                    <label htmlFor="name" className="form-label">Email</label>
                                                    <input type="email" name="emailId" value={info?.emailId} onChange={handleChange} className="form-control" />
                                                </div>
                                                <div className="mb-3">

                                                    <label htmlFor="name" className="form-label">Mobile Number</label>
                                                    <input type="tel" name="mobileNumber" value={info?.mobileNumber} onChange={handleChange} className="form-control" />
                                                </div>
                                               
                                            </div>

                                        </div>

                                        <button className="btn btn-primary btnhover mt-2" type="submit" >
                                            Save Setting
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default ChangePassword;