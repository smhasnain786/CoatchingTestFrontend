import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";
import { imageUrl } from "../services/dataurl";
import { setProfileData } from "../services/profile.service";
import { HotToaster } from "../utils/Toaster";

const profilePages = [
    { to: '/profile', icons: 'flaticon-shopping-cart-1', name: 'Profile' },
    { to: '/my-orders', icons: 'flaticon-shopping-cart-1', name: 'My Orders' },
    { to: '/change-password', icons: 'far fa-heart', name: 'Change Password' },
    { to: '/update-email', icons: 'fa fa-briefcase', name: 'Update Email / Mobile No.' },

];

function Profile() {
    const { userProfile, profile } = useContext(AuthContext);
    const location = useLocation()
    

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

    useEffect(() => {
        console.log("userProfile:", userProfile);
        console.log("profile:", profile);

        if (userProfile) {
            setPersonalInfo(prevState => ({
                ...prevState,
                name: userProfile.name || "",
                gender: userProfile.gender || "",
                mobileNumber: userProfile.mobileNumber || "",
                dob: userProfile.dob || "",
                address1: userProfile.address1 || "",
                address2: userProfile.address2 || "",
                city: userProfile.city || "",
                state: userProfile.state || "",
                country: userProfile.country || "",
                pincode: userProfile.pincode || ""
            }));
            setLoading(false);
        } else if (profile) {
            setPersonalInfo(prevState => ({
                ...prevState,
                ...profile,
                profileIcon: null // Reset file input
            }));
            setLoading(false);
        }
    }, [userProfile, profile]);

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
            if (key === 'profileIcon' && personalInfo[key] === null) {
                // Don't append if no new file is selected
                return;
            }
            formData.append(key, personalInfo[key]);
        });

        try {
            console.log("Submitting form data:", Object.fromEntries(formData));
            const result = await setProfileData(formData);
            console.log("API response:", result);
            HotToaster(result?.status, result?.message);
            if (result?.status) {
                // Refresh profile data if needed
                // You might need to call a function to update the context here
                profile()
            }
        } catch (error) {
            console.error("Error updating profile:", error);
            setError("Failed to update profile. Please try again.");
            HotToaster('error', 'Failed to update profile');
        } finally {
            setLoading(false);
        }
    };

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
                                        <h5 className="text-uppercase">Basic Information</h5>
                                    </div>
                                    {error && <div className="alert alert-danger">{error}</div>}
                                    <form onSubmit={handleSubmit}>
                                        <div className="row m-b30">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="mb-3">
                                                    <label htmlFor="name" className="form-label">Coaching/Teacher Name:</label>
                                                    <input type="text" name="name" value={personalInfo.name} onChange={handleChange} className="form-control" id="name" placeholder="Coaching/Teacher Name" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="mb-3">
                                                    <label htmlFor="dob" className="form-label">DOB:</label>
                                                    <input type="date" name="dob" value={personalInfo.dob} onChange={handleChange} className="form-control" id="dob" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <label className="label-width">Gender</label>
                                                <div className="mb-3 d-flex align-items-center">
                                                    {['Male', 'Female', 'Other'].map((gender) => (
                                                        <div key={gender} className="me-3">
                                                            <input
                                                                type="radio"
                                                                name="gender"
                                                                value={gender}
                                                                checked={personalInfo.gender === gender}
                                                                onChange={handleChange}
                                                                id={`gender-${gender}`}
                                                            />
                                                            <label htmlFor={`gender-${gender}`} className="ms-1">{gender}</label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="mb-3">
                                                    <label htmlFor="profileIcon" className="form-label">Profile Image:</label>
                                                    <input type="file" name="profileIcon" onChange={handleImageChange} className="form-control" id="profileIcon" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="shop-bx-title clearfix">
                                            <h5 className="text-uppercase">Contact Information</h5>
                                        </div>
                                        <div className="row">
                                            {['address1', 'address2', 'city', 'state', 'country', 'pincode'].map((field) => (
                                                <div key={field} className="col-lg-6 col-md-6">
                                                    <div className="mb-3">
                                                        <label htmlFor={field} className="form-label">{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
                                                        <input
                                                            type="text"
                                                            name={field}
                                                            value={personalInfo[field]}
                                                            onChange={handleChange}
                                                            className="form-control"
                                                            id={field}
                                                            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <button className="btn btn-primary btnhover mt-2" type="submit" disabled={loading}>
                                            {loading ? 'Saving...' : 'Save Setting'}
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

export default Profile;