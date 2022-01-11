import React, { useState , useEffect } from "react" ;
import { faMailBulk, faUser , faEye, faEyeSlash, faSign, faSignInAlt, faLock } from "@fortawesome/free-solid-svg-icons";
import { faTelegram, faWhatsapp , faFacebook , faInstagram , faTwitter, faGoogle, faApple  } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from '../static/img/logo/logo.png'
import {LoginAuth} from '../widget/API';
import LoaderBtn from '../widget/Loader/LoaderBtn';
import {ToastContainer} from "react-toastify";
import Toast_noty from '../widget/Toast_noty';
import { Link } from "react-router-dom";
import './authStyle.css';
import LoginSvg from '../static/img/svg/login.svg'


function Login(props) {
    const [display , setDisplay]=useState(false);


    const Login=async(e)=>{
        e.preventDefault();
        setDisplay(true);
        const returndata =  LoginAuth(e);
        returndata.then((res)=>{
        setDisplay(false)
        if(res.result == 'ok'){
            Toast_noty('Authentication completed successfully', 5000, "success");
            localStorage.setItem('userInfo' , JSON.stringify({
                "email":res.data.email,
                "name":res.data.name ,
                'token':res.data.token ,
            }))
            props.history.push('/panel');  
        }
        else 
        {
            Toast_noty(res.error, 5000, "error");
        }
        })
        returndata.catch((er)=>{
            setDisplay(false);
            Toast_noty('please try again', 5000, "error");
        })
    }



    return (
        <div className="auth" >

            <div className="auth-image">
                <img src={LoginSvg} />
            </div>

            <div className="auth-main">
                <div className="auth-main-inner">
                    <img className="auth-main-inner-logo" src={Logo} alt="logo" />
                    <p>Welcome back to your account.</p>
                    <form onSubmit={Login}>

                        <div className="auth-main-inner-form-item">
                            <div className="auth-main-inner-form-item-icon">
                                <FontAwesomeIcon icon={faMailBulk} />
                            </div>
                            <input type="emial" placeholder="Email Address" />
                        </div>

                        <div className="auth-main-inner-form-item">
                            <div className="auth-main-inner-form-item-icon">
                                <FontAwesomeIcon icon={faLock} />
                            </div>
                            <input type="password" placeholder="Password" />
                        </div>    

                        <div className="auth-main-inner-form-bottom">
                            <div className="auth-main-inner-form-bottom-btn">Login</div>
                            <span>Or create an account</span>
                        </div>

                    </form>
                </div>
            </div>

            <ToastContainer position="top-right"
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={true}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

        </div>
    )
}

export default Login;