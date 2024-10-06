import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { userLogin } from "../services/auth.service"
import { HotToaster } from "../utils/Toaster";

import { AuthContext } from "../context/AuthContext"

//Components 
import PageTitle from './../layouts/PageTitle';

function Login() {
    const [forgotPass, setForgotPass] = useState();
    const [signId, setSignId] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const {
        isLoggedIn,
        userProfile,
        setIsLoggedIn,
        setUserProfile } = useContext(AuthContext)




    const handleChange = (e) => {
        let { name, value } = e.target
        if (name == "lemail") {
            setSignId(value)
        }
        else {
            setPassword(value)
        }
    }
    const handleLogin = async (e) => {
        e.preventDefault()
        let data = {
            emailId: signId,
            password: password
        }
        let result = await userLogin(data)
        HotToaster(result.status,result.message)
        if (result?.status) {
            setIsLoggedIn(true)
            setUserProfile(result.data.profile)
            //   handleCloseDialogLogin()
            localStorage.setItem("token", result.data.token)
            localStorage.setItem("emailId", result.data.emailId || result.data.mobileNumber)
            localStorage.setItem("name", result.data.name)
            navigate("/profile");

        }
    }


    return (
        <>
            <div className="page-content">
                <PageTitle parentPage="Shop" childPage="Login" />
                <section className="content-inner shop-account">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 mb-4">
                                <div className="login-area">
                                    <div className="tab-content">
                                        <h4>NEW CUSTOMER</h4>
                                        <p>By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.</p>
                                        <Link to={"signin"} className="btn btn-primary btnhover m-r5 button-lg radius-no">CREATE AN ACCOUNT</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 mb-4">
                                <div className="login-area">
                                    <div className="tab-content nav">
                                        <form onSubmit={(e) => e.preventDefault()} className={` col-12 ${forgotPass ? 'd-none' : ''}`}>
                                            <h4 className="text-secondary">LOGIN</h4>
                                            <p className="font-weight-600">If you have an account with us, please log in.</p>
                                            <div className="mb-4">
                                                <label className="label-title">E-MAIL *</label>
                                                <input name="lemail" required="" className="form-control" placeholder="Your Email Id/Mobile Number" type="email" onChange={handleChange}
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label className="label-title">PASSWORD *</label>
                                                <input name="lpassword" required="" className="form-control " placeholder="Type Password" type="password" onChange={handleChange} />
                                            </div>
                                            <div className="text-left">
                                                <button type="submit" onClick={handleLogin} className="btn btn-primary btnhover me-2">login</button>
                                                <Link tp={"#"} className="m-l5"
                                                    onClick={() => setForgotPass(!forgotPass)}
                                                >
                                                    <i className="fas fa-unlock-alt"></i> Forgot Password
                                                </Link>
                                            </div>
                                        </form>
                                        <form onSubmit={(e) => e.preventDefault()} className={`  col-12 ${forgotPass ? '' : 'd-none'}`} >
                                            <h4 className="text-secondary">FORGET PASSWORD ?</h4>
                                            <p className="font-weight-600">We will send you an email to reset your password. </p>
                                            <div className="mb-3">
                                                <label className="label-title">E-MAIL *</label>
                                                <input name="dzName" required="" className="form-control" placeholder="Your Email Id" type="email" />
                                            </div>
                                            <div className="text-left">
                                                <Link to={"#"} className="btn btn-outline-secondary btnhover m-r10 active"
                                                    onClick={() => setForgotPass(!forgotPass)}
                                                >Back</Link>
                                                <button type="submit" className="btn btn-primary btnhover">Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
export default Login;