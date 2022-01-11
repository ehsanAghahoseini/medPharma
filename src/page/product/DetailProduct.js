import { faList , faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react" ;
import { Form, Input, Upload , Select } from 'antd';
import apiPattern from '../../widget/BaseApi'
import LoaderBtn from '../../widget/Loader/LoaderBtn';
import ImgCrop from 'antd-img-crop';
import Toast_noty from '../../widget/Toast_noty';
import {BASE_Medai_URL} from '../../widget/BASE_Medai_URL';
import DetailProductItem from './DetailProductItem' ;

function DetailProduct(props) {
    const [display , setDisplay]=useState(false);
    const [detailData , setDetailData]=useState(null)
    const[openProduct , setOpenProduct]=useState(-1);
    const[maxHeightPx , setMaxHeightPx]=useState(0);


    const changeOpenProduct=(id)=>{
        if(id == openProduct){
            setOpenProduct(-1)
        }
        else {
            let inner = document.getElementById(`detail-product-pivot-cont-inner${id}`)
            setMaxHeightPx(inner.scrollHeight + 50)
            setOpenProduct(id)
        }
    }


    const getListProduct=()=>{
        apiPattern('shops/medicine' , {body : {'id':1 , 'medicine_id' : props.match.params.id}})
        .then((res) => {
            setDetailData(res)
        })
    }

    useEffect(()=>{
        getListProduct()
    },[])


    return (
        <>
        <div className="cont-inner-main-head">
            <h1>Detail Product</h1>
            <span>Home | Product</span>
        </div>

        <div className="fullSection">
            <div className="thirdSection">
                <div className="innerSection bgSection detail-product-left">
                    <h1>Name Product</h1>
                    <span className="detail-product-left-des">
                    Pie fruitcake jelly beans. Candy tootsie chocolate croissant jujubes icing chocolate croissant jujubes icing macaroon croissant.
                    </span>
                    {/* <div className="detail-product-left-cat">
                        <div>
                            <FontAwesomeIcon icon={faList} />
                            <span>category </span>
                        </div>
                        <span>category</span>
                    </div> */}
                </div>
            </div>
            <div className="secondSection">
                <div className="innerSection bgSection">
                    <div className="detail-product-right-item">
                        <div className="detail-product-right-item-head">
                            <span>1</span>
                            <span>How to use ?</span>
                        </div>
                        <div className="detail-product-right-item-cont">
                        Pie fruitcake jelly beans. Candy tootsie chocolate croissant jujubes icing chocolate croissant jujubes icing macaroon croissant.
                        </div>
                    </div>
                    <div className="detail-product-right-item">
                        <div className="detail-product-right-item-head">
                            <span>2</span>
                            <span>Effects</span>
                        </div>
                        <div className="detail-product-right-item-cont">
                        Pie fruitcake jelly beans. Candy tootsie chocolate croissant jujubes icing chocolate croissant jujubes icing macaroon croissant.
                        </div>
                    </div>
                    <div className="detail-product-right-item">
                        <div className="detail-product-right-item-head">
                            <span>3</span>
                            <span>Interact</span>
                        </div>
                        <div className="detail-product-right-item-cont">
                        Pie fruitcake jelly beans. Candy tootsie chocolate croissant jujubes icing chocolate croissant jujubes icing macaroon croissant.
                        </div>
                    </div>
                </div>   
            </div>
        </div>

        <div className="fullSection">
            {detailData != null && detailData.map((item , index)=>
                <div className="detail-product-pivot">
                    <div onClick={()=>changeOpenProduct(item.id)} className={`detail-product-pivot-head ${openProduct == item.id && 'detail-product-pivot-head-active'}`}>
                        <div className="detail-product-pivot-head-icon">
                            <FontAwesomeIcon icon={faChevronRight} />
                        </div>
                        <span>Product Name</span>
                    </div>
                    <div className="detail-product-pivot-cont" style={{maxHeight : openProduct == item.id && maxHeightPx}}>
                        <div  id={`detail-product-pivot-cont-inner${item.id}`} className="detail-product-pivot-cont-inner" >
                            <DetailProductItem data={item} getListProduct={getListProduct} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    </>
    )
}

export default DetailProduct;