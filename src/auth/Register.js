import React, { useState , useEffect } from "react" ;
import { faMailBulk, faUser , faEye, faEyeSlash, faSign, faSignInAlt, faInfo } from "@fortawesome/free-solid-svg-icons";
import { faTelegram, faWhatsapp , faFacebook , faInstagram , faTwitter, faGoogle, faApple  } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Logo from '../static/img/logo/logo2.png'
import {RegisterAuth} from '../widget/API';
import LoaderBtn from '../widget/Loader/LoaderBtn';
import {ToastContainer} from "react-toastify";
import Toast_noty from '../widget/Toast_noty';
import { Link } from "react-router-dom";
import './authStyle.css';



function Register(props) {
    const [display , setDisplay]=useState(false);
    const [displayPassword , setDisplayPassword]=useState(false);
    const [displayMessage , setDisplayMessage]=useState(0);
    const [listMessage , setListMessage]=useState([]);


    const changeDisplayPassword=()=>{
        if(document.getElementById('password').type == 'password'){
            document.getElementById('password').type = 'text' ;
            setDisplayPassword(true);
        }
        else {
            document.getElementById('password').type = 'password' ;
            setDisplayPassword(false);
        }
    }


    const validationFields=(e)=>{
        setListMessage([]);
        if(e.target[0].value.length < 3 || e.target[2].value.length < 8 || e.target[3].value.length < 10){
            if(e.target[0].value.length < 3 ){
                setListMessage(prev=>[...prev , "Name must be longer than 3 characters"])
            }
            if(e.target[2].value.length < 8 ){
                setListMessage(prev=>[...prev , "Password must be longer than 8 characters"])
            }
            if(e.target[3].value.length < 10 ){
                setListMessage(prev=>[...prev , "About  must be longer than 10 characters"])
            }
            setDisplayMessage(1);
            return false ;
        }
        else {
            return true;
        }
    }

    const registerAuth=async(e)=>{
        e.preventDefault();
        setDisplayMessage(0)
        if(await validationFields(e)){
            setDisplay(true);
            const returndata =  RegisterAuth(e);
            returndata.then((res)=>{
            setDisplay(false)
            if(res.result == 'ok'){
                setDisplayMessage(2);
                setListMessage(['Registration was successful. Wait for admin approval'])
                Toast_noty("Registration was successful. Wait for admin approval", 9000, "info");
            }
            else 
              {
                Toast_noty(res.error, 5000, "error");
              }
            })
            returndata.catch((er)=>{
                setDisplay(false);
                Toast_noty('Please try again', 5000, "error");
            })
        }
    }



    return (
        <div className="auth" >
            <div className="auth-main">
                {/* <img className="auth-main-logo" src={Logo} alt="logo" /> */}
                {/* <h1>Login</h1> */}
                <div className={`auth-main-error ${displayMessage == 1 && 'auth-main-error-err'} ${displayMessage == 2 && 'auth-main-error-suc'}`}>
                    <ul>
                        {listMessage.map((item , index)=>
                            <li key={index}>{item}</li>
                        )}
                    </ul>
                </div>
                <form onSubmit={registerAuth}>
                    <div className="auth-main-item">
                        <span>Name</span>
                        <div className="auth-main-item-inner">
                            <input type="text" placeholder="Name" required/>
                            <div className="auth-main-item-inner-icon">
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                        </div>    
                    </div>
                    <div className="auth-main-item">
                        <span>Email</span>
                        <div className="auth-main-item-inner">
                            <input type="email" placeholder="Email" required/>
                            <div className="auth-main-item-inner-icon">
                                <FontAwesomeIcon icon={faMailBulk} />
                            </div>
                        </div>    
                    </div>
                    <div className="auth-main-item">
                        <span>Password</span>
                        <div  className="auth-main-item-inner">
                            <input id="password" type="Password" placeholder="Password" required/>
                            <div onClick={()=>changeDisplayPassword()} className="auth-main-item-inner-icon">
                                <FontAwesomeIcon icon={displayPassword ? faEyeSlash : faEye} />
                            </div>
                        </div> 
                    </div>
                    <div className="auth-main-item">
                        <span>About</span>
                        <div className="auth-main-item-inner">
                            <input type="text" placeholder="About you" required/>
                            <div className="auth-main-item-inner-icon">
                                <FontAwesomeIcon icon={faInfo} />
                            </div>
                        </div>    
                    </div>
                        {display ?
                            <button className="auth-main-btn-after-submit" disabled>
                                <LoaderBtn />
                            </button>
                        : 
                            <button>
                                <FontAwesomeIcon icon={faSignInAlt} />
                                <span>Register</span>
                            </button>
                        }
                </form>

                {/* <div className="auth-main-social auth-main-social-fb">
                    <div className="auth-main-social-icon">
                        <FontAwesomeIcon icon={faFacebook} />
                    </div>
                    <span>Login with FaceBook</span>
                </div> */}
                <div className="auth-main-social">
                    <div className="auth-main-social-icon">
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                    <span>Login</span>
                    <Link to="/" />
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

export default Register;