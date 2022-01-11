import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react" ;
import './dashboardStyle.css';

function Dashboard(props) {


    return (
        <>
            <div className="cont-inner-main-head">
                <h1>Dashboard</h1>
                <span>Home</span>
            </div>
            <div className="fullsection bgsection"></div>
        </>
    )
}

export default Dashboard;