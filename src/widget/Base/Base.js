import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState , useEffect } from "react" ;
import Nav from "../Nav/Nav";
import ContHead from './ContHead'
import { Route } from "react-router";
import RouteData from '../RouteData';
import {ToastContainer} from "react-toastify";
import './baseStyle.css'

import PrivateRoute from '../PrivateRoute';


function Base(props) {
    const[dispalyNav , setDisplayNav]=useState(true);
    const[dispalyNavMobile , setDisplayNavMobile]=useState(false);

    const ChangeDisplayNav=()=>{
        if(dispalyNav){
            setDisplayNav(false)
        }else {
            setDisplayNav(true)
        }
    }


    const ChangeDisplayNavMobile=()=>{
        if(dispalyNavMobile){
            setDisplayNavMobile(false)
        }else {
            setDisplayNavMobile(true)
        }
    }


    useEffect(()=>{
        props.history.listen((location, action) => {
            setDisplayNavMobile(false)
          });
    },[])



    useEffect(()=>{
        if(window.innerWidth < 991){
                setDisplayNav(false)
        }
        window.addEventListener("resize", ()=>{
            if(window.innerWidth < 991){
                setDisplayNav(false)
            }
        });
    },[])


    



    return (
        <div className="main">
            <div className={`cont ${dispalyNav && 'cont-change'}`} > 
                <div className="cont-inner" >
                    <ContHead dispalyNavMobile={dispalyNavMobile} setDisplayNavMobile={setDisplayNavMobile} />
                    <div className="cont-inner-main">
                        {props.children}
                        {RouteData.map((item , index)=>
                            <>
                                <Route exact path={item.path} component={item.component} />
                            </>
                        )}

                    </div>
                </div>
            </div>
            <Nav setDisplayNavMobile={setDisplayNavMobile} ChangeDisplayNavMobile={ChangeDisplayNavMobile} dispalyNavMobile={dispalyNavMobile} dispalyNav={dispalyNav} ChangeDisplayNav={ChangeDisplayNav} />
            <ToastContainer position="top-right"
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                theme ='light'
                rtl={true}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    )
}

export default Base;