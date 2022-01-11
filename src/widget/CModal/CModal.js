import React, { useState } from "react" ;
import './modalStyle.css'

function CModal(props) {


    React.useEffect(()=>{
        toggle(props.visible)
    },[props.visible])

    function toggle (val){
        const body = document.getElementsByTagName("body")[0];
        if (val){
            body.style.touchAction = "none";
            body.style.width = "100%";
            body.style.overflow = "hidden";
        }else {
            body.style.touchAction = "unset";
            body.style.width = "unset";
            body.style.overflow = "auto";
        }
    }


    const handelClose=()=>{
        const Modal = document.getElementById(`CModal-${props.title}`);
        const contModal = document.getElementById(`CModal-cont-${props.title}`);
        window.addEventListener('click', function (e) {
            if (Modal.contains(e.target)){
                if (!contModal.contains(e.target)) {
                    // Modal.classList.remove('CModal-active')
                    props.setVisible(false)
                    if(props.onScap){
                        props.onScap()
                    }
                }
            }
        });
    }


    React.useEffect(() => {
        handelClose()
    }, [])



    return (
        <div id={`CModal-${props.title}`} className={`CModal ${props.visible && 'CModal-active'}`}>
            <div id={`CModal-cont-${props.title}`} className="CModal-cont">
                <div className="CModel-head">
                    <h4>{props.title}</h4>
                </div>
                {props.children}
            </div>
        </div>
    )
}

export default CModal;