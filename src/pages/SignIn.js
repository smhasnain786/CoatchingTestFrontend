import React, { useEffect, useState, useContext } from 'react';
import { Link,useNavigate    } from 'react-router-dom';
import { userSignUp } from "../services/auth.service";
import { HotToaster } from "../utils/Toaster";
import { State } from 'country-state-city';
import { AuthContext } from "./../context/AuthContext";
//Components 
import PageTitle from './../layouts/PageTitle';

function SignIn() {
    const navigate = useNavigate();


    const [signUpInfo, setSignUpInfo] = useState({
        name: "",
        // lastName:"",
        mobileNumber: "",
        emailId: "",
        password: "",
        Cpassword: "",
        state: ""
    })
    const {
        isLoggedIn,
        userProfile,
        setIsLoggedIn,
        setUserProfile } = useContext(AuthContext)




    const handleChange = (e) => {
        let { name, value } = e.target
        setSignUpInfo(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    const EmpytState = () => {
        setSignUpInfo({})
    }

    const handleSignup = async (e) => {
        e.preventDefault()
        const result = await userSignUp(signUpInfo)
        HotToaster(result?.status, result?.message)
        console.log("resultresultresult", result)
        if (result?.status) {
            setIsLoggedIn(true)
            setUserProfile(result.data.profile)
            localStorage.setItem("token", result.data.token)
            localStorage.setItem("emailId", result.data.emailId || result.data.mobileNumber)
            localStorage.setItem("name", result.data.name)


            EmpytState()
            navigate('/login');
        }
    }




    return (
        <>
            <div className="page-content">
                <PageTitle parentPage="Shop" childPage="Registration" />
                <section className="content-inner shop-account">

                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-6 mb-4">
                                <div className="login-area">
                                    <form onSubmit={(e) => e.preventDefault()}>
                                        <h4 className="text-secondary">Registration</h4>
                                        <p className="font-weight-600">If you don't have an account with us, please Registration.</p>
                                        <div className="mb-4">
                                            <label className="label-title">Coaching/Teacher Name *</label>
                                            <input name="name" required="" className="form-control" placeholder="Coaching/Teacher Name" type="text" value={signUpInfo?.name}
                                                onChange={handleChange} />
                                        </div>
                                        <div className="mb-4">
                                            <label className="label-title">Email address *</label>
                                            <input name="emailId" required="" className="form-control" placeholder="Your Email address" type="email" value={signUpInfo?.signId}
                                                onChange={handleChange} />
                                        </div>
                                        <div className="mb-4">
                                            <label className="label-title">Password *</label>
                                            <input name="password" required="" className="form-control " placeholder="Type Password" type="password" value={signUpInfo?.password}
                                                onChange={handleChange} />
                                        </div>
                                        <div className="mb-4">
                                            <label className="label-title">Confirm Password *</label>
                                            <input name="Cpassword" required="" className="form-control " placeholder="Confirm Password" type="password"  value={signUpInfo?.Cpassword}
                                                onChange={handleChange}  />
                                        </div>
                                        <div className="mb-4">
                                            <label className="label-title">Mobile Number *</label>
                                            <input name="mobileNumber" required="" className="form-control " placeholder="Mobile Number" type="number" value={signUpInfo?.mobileNumber}
                              onChange={handleChange} />
                                        </div>
                                        <div className="mb-4">
                                            <label className="label-title">Select State *</label>
                                            <select name="state" id="txtrstate" className="form-control " value={signUpInfo?.state}
                                                onChange={handleChange}
                                            >
                                                <option value=""> --- Select State --- </option>
                                                {State?.getStatesOfCountry("IN")?.map((state, index) => {
                                                    return <option value={state.name}>{state.name}</option>
                                                })}
                                                {/* Add other state options */}
                                            </select>
                                        </div>
                                        <div className="mb-5">
                                            <small>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <Link to={"privacy-policy"}>privacy policy</Link>.</small>
                                        </div>
                                        <div className="text-left">
                                            <button type="submit" onClick={handleSignup} className="btn btn-primary btnhover w-100 me-2">Register</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}
export default SignIn;