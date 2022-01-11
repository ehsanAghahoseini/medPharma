import React, { useEffect, useState } from "react" ;
import AdminPro from '../../static/img/admin.png'
// import RagaLogo from '../../static/img/logo/logo2.png'
import Logo from '../../static/img/logo/logo.png'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft, faAlignRight, faBell, faCircleNotch , faDotCircle , faMoon, faPowerOff, faSadTear, faSearch, faSun, faUser} from "@fortawesome/free-solid-svg-icons";
import { fontStyle } from "@mui/system";
import {Link} from 'react-router-dom';

function ContHead(props) {

    return (
        <div className={`cont-head ${props.dispalyNavMobile && 'cont-head-hide' }`}>
            <div className="cont-head-right">
                <img src={Logo} alt="logo" />
            </div>
            <div className="cont-head-left">
                <div className="cont-head-left-align">
                    <FontAwesomeIcon onClick={props.setDisplayNavMobile} icon={faAlignLeft} />
                </div>
            </div>
        </div>
    )
}

export default ContHead;