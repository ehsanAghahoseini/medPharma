import React, { useState } from "react" ;
// import Logo from '../../static/img/logo2.png'
import Logo from '../../static/img/logo/logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft, faBell, faCircleNotch , faDotCircle , faMailBulk, faPowerOff, faTachometerAlt, faUser} from "@fortawesome/free-solid-svg-icons";
import NavData from '../Nav/NavData';
import {Link} from 'react-router-dom';
import './navStyle.css';
import Profile from '../../static/img/admin.png'

function Nav(props) {
    const[activeItem , setActiveItem]=useState(0);

    const Logout=()=>{
        localStorage.clear();
        window.location.href = "/";
    }


    React.useEffect(() => {
        const nav = document.getElementById('nav-bg');
        window.addEventListener('click', function (e) {
            if (nav.contains(e.target)) {
                props.setDisplayNavMobile(false)
            }
        });
    }, [])


    return (
        <>
            <div id="nav-bg" className={`nav-bg ${props.dispalyNavMobile && 'nav-bg-active'}`}></div>
            <div id="navBar" className={`nav ${props.dispalyNav && 'nav-change'} ${props.dispalyNavMobile ? 'nav-active-mobile' : 'nav-active-mobile-close'}`}>
                <div className="nav-head">
                    <img src={Logo} alt="logo" />
                    {props.dispalyNav ? <FontAwesomeIcon className="nav-head-circle-icon" icon={faCircleNotch} onClick={props.ChangeDisplayNav} /> : <FontAwesomeIcon className="nav-head-circle-icon" icon={faDotCircle} onClick={props.ChangeDisplayNav} />}
                    <FontAwesomeIcon onClick={props.ChangeDisplayNavMobile} className="nav-head-align-icon" icon={faAlignLeft} />
                </div>
                {/* <div className="nav-head-bottom"></div> */}
                <div className="nav-profile">
                    <div className="nav-profile-head">
                        <img className="nav-profile-img" src={Profile} alt="profile" />
                        <span>Ehsan hoseeini</span>
                    </div>
                    <div className="nav-profile-icon">
                        <div className="nav-profile-icon-item">
                            <FontAwesomeIcon icon={faBell} />
                        </div>
                        <div className="nav-profile-icon-item">
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                    </div>
                </div>
                <div className="nav-cont">
                    {NavData.map((item , index)=>
                    <div onClick={()=>{setActiveItem(index)}} className={`nav-cont-item ${activeItem == index && "nav-cont-item-active"}`}>
                        <div className="nav-cont-item-inner">
                            {item.isSubmenu ?
                                <>
                                    {item.icon}
                                    <span>{item.name}</span>
                                </>
                                :
                                    <Link to={item.link}>
                                        {item.icon}
                                        <span>{item.name}</span>
                                    </Link>
                            }
                        </div>
                        {item.isSubmenu &&
                            <div className="nav-cont-item-submenu">
                                {item.submenu.map(items=>
                                    <Link to={items.link}>
                                        <div className="nav-cont-item-submenu-item">
                                            {items.icon}
                                            <span>{items.name}</span>
                                        </div>
                                    </Link>
                                )}
                            </div>
                        }
                    </div>
                    )}
                    <div className={`nav-cont-item`}>
                        <div onClick={Logout} className="nav-cont-item-inner">
                            <FontAwesomeIcon icon={faPowerOff} />
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav;