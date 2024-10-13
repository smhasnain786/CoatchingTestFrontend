import { useContext, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { userLogin, userGoogleLogin } from "../services/auth.service";
import { HotToaster } from "../utils/Toaster";
import { AuthContext } from "../context/AuthContext";
import PageTitle from './../layouts/PageTitle';

function Login() {
    const [forgotPass, setForgotPass] = useState(false);
    const [signId, setSignId] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const {
        isLoggedIn,
        userProfile,
        setIsLoggedIn,
        setUserProfile
    } = useContext(AuthContext);

    const handleChange = (e) => {
        let { name, value } = e.target;
        if (name === "lemail") {
            setSignId(value);
        } else {
            setPassword(value);
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        let data = {
            emailId: signId,
            password: password
        };
        let result = await userLogin(data);
        HotToaster(result.status, result.message);
        if (result?.status) {
            setIsLoggedIn(true);
            setUserProfile(result.data.profile);
            localStorage.setItem("token", result.data.token);
            localStorage.setItem("emailId", result.data.emailId || result.data.mobileNumber);
            localStorage.setItem("name", result.data.name);
            navigate("/profile");
        }
    };

    const handleGoogleLoginSuccess = async (response) => {
  
        let result = await userGoogleLogin(response);
        console.log('response',response);
        
        HotToaster(result.status, result.message);
        if (result?.status) {
            setIsLoggedIn(true);
            setUserProfile(result.data.profile);
            localStorage.setItem("token", result.data.token);
            localStorage.setItem("name", result.data.profile.name);
            localStorage.setItem("email", result.data.profile.email);
            navigate("/profile");
        }
    };

    const handleGoogleLoginFailure = () => {
        HotToaster(false, "Google login failed");
    };

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
                                        <p>Create an account to move through the checkout process faster, store multiple shipping addresses, view and track orders, and more.</p>
                                        <Link to={"signin"} className="btn btn-primary btnhover m-r5 button-lg radius-no">CREATE AN ACCOUNT</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 mb-4">
                                <div className="login-area">
                                    <div className="tab-content nav">
                                        <form onSubmit={handleLogin} className={`col-12 ${forgotPass ? 'd-none' : ''}`}>
                                            <h4 className="text-secondary">LOGIN</h4>
                                            <p>If you have an account, please log in.</p>
                                            <div className="mb-4">
                                                <label className="label-title">E-MAIL *</label>
                                                <input name="lemail" required className="form-control" placeholder="Your Email" type="email" onChange={handleChange} />
                                            </div>
                                            <div className="mb-4">
                                                <label className="label-title">PASSWORD *</label>
                                                <input name="lpassword" required className="form-control" placeholder="Password" type="password" onChange={handleChange} />
                                            </div>
                                            <button type="submit" className="btn btn-primary btnhover me-2">Login</button>
                                            <Link to="#" className="m-l5" onClick={() => setForgotPass(!forgotPass)}>
                                                <i className="fas fa-unlock-alt"></i> Forgot Password
                                            </Link>
                                        </form>
                                        <div className="my-4">
                                            <GoogleLogin
                                                clientId='939999206909-gut16dp114reqblm0af4jqfavquf9ies.apps.googleusercontent.com'
                                                onSuccess={handleGoogleLoginSuccess}
                                                onError={handleGoogleLoginFailure}
                                            />
                                        </div>
                                        <form onSubmit={(e) => e.preventDefault()} className={`col-12 ${forgotPass ? '' : 'd-none'}`}>
                                            <h4 className="text-secondary">FORGOT PASSWORD?</h4>
                                            <p>We will send you an email to reset your password.</p>
                                            <div className="mb-3">
                                                <label className="label-title">E-MAIL *</label>
                                                <input name="dzName" required className="form-control" placeholder="Your Email" type="email" />
                                            </div>
                                            <div className="text-left">
                                                <Link to="#" className="btn btn-outline-secondary btnhover m-r10 active" onClick={() => setForgotPass(!forgotPass)}>Back</Link>
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
    );
}

export default Login;
