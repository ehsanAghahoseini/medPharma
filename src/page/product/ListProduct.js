import { faEdit, faEllipsisH, faList, faStar, faTrash, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react" ;
import apiPattern from '../../widget/BaseApi'
import { Table , Popconfirm , Menu, Dropdown} from 'antd';
import { Link } from "react-router-dom";
import './productStyle.css';
import {BASE_Medai_URL} from '../../widget/BASE_Medai_URL'
import Pic from '../../static/img/drug.jpg'


function ListProduct(props) {
    const[listData , setListData]=useState([])


    
    const getData=()=>{
        apiPattern('shops/medicines' , {body : {'id':1}})
        .then((res) => {
            setListData(res);
            console.log(res.data);
        })
    }


    useEffect(()=>{
        getData()
    },[])


    return (
        <>
        <div className="cont-inner-main-head">
            <h1>List Product</h1>
            <span>Home | Product</span>
        </div>
        <div className="fullSection">
            {listData.map(item=>
                    <div className="thirdSection">
                        <div className="product-cart-inner">
                            <Link to={`/panel/product/detail/${item.id}`} >
                                <img src={Pic} alt="product" />
                            </Link>    
                            <div className="product-cart-inner-des">
                            <Link to={`/panel/product/detail/${item.id}`} ><h3>{item.name}</h3></Link>
                                <span>{item.category.name}</span>
                                <div className="product-cart-inner-des-rate">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                            </div>
                        </div>
                    </div>
            )}

        </div>
    </>
    )
}

export default ListProduct;