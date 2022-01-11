import { faList , faChevronRight , faUpload, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react" ;
import { Form, Popconfirm, Upload , Select } from 'antd';
import apiPattern from '../../widget/BaseApi'
import LoaderBtn from '../../widget/Loader/LoaderBtn';
import ImgCrop from 'antd-img-crop';
import Toast_noty from '../../widget/Toast_noty';
import {BASE_Medai_URL} from '../../widget/BASE_Medai_URL';
import { alertTitleClasses } from "@mui/material";

function DetailProductItem(props) {
    const [display , setDisplay]=useState(false);
    const[fileList , setFileList]=useState([]);

        // Function For Upload Handel

        const onChange = ({ fileList: newFileList }) => {
            setFileList(newFileList);
            };
        
        const onPreview = async file => {
            let src = file.url;
            if (!src) {
                src = await new Promise(resolve => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
                });
            }
            const image = new Image();
            image.src = src;
            const imgWindow = window.open(src);
            imgWindow.document.write(image.outerHTML);
            };
        
        const dummyRequest = ({ file, onSuccess }) => {
            setTimeout(() => {
                onSuccess("ok");
            }, 0);
            };
        
        // End Function For Upload 

        const uploadImage=()=>{
            if(fileList.length > 0){
                for(let i in fileList){
                    let formdata = new FormData();
                    formdata.append("id", props.data.id);
                    formdata.append("file_image", fileList[i].originFileObj);
                    formdata.append("type", 'Product');
                    apiPattern('images/create' , 
                    {
                        body : formdata,
                        isJson : false ,
                    }
                    )
                }
                props.getListProduct()
                setFileList([])
            } 
        }


        const deleteImage=(id)=>{
            apiPattern('images/delete' , {body : {'id':id}})
            .then((res) => {
                props.getListProduct()
        })
        }

    return (
        <>  
            <div className="detail-product-pivot-cont-inner-right">
                <div className="detail-product-pivot-cont-inner-right-one">
                    <div className="detail-product-pivot-cont-inner-right-one-item">
                        <span> ! </span>
                        <span>price </span>
                        <span>${props.data.price}</span>
                    </div>
                    <div className="detail-product-pivot-cont-inner-right-one-item">
                        <span> ! </span>
                        <span>brand </span>
                        <span>{props.data.brand.name}</span>
                    </div>
                </div>    
                <div className="detail-product-pivot-cont-inner-right-two">
                    <div className="detail-product-pivot-cont-inner-right-two-icon">
                        <FontAwesomeIcon icon={faEdit} />
                    </div>
                    <Popconfirm placement="topLeft" title={"Are you sure to delete this task?"}  okText="Yes" cancelText="No">
                        <div className="detail-product-pivot-cont-inner-right-two-icon">
                            <FontAwesomeIcon icon={faTrash} />
                        </div>
                    </Popconfirm>
                    
                </div>
            </div>

            <div className="detail-product-pivot-cont-inner-left">
                {props.data.images.map((item , index)=>
                    <div key={index} className="detail-product-pivot-cont-inner-left-before">
                        <img detail-product-pivot-cont-inner-left src={`${BASE_Medai_URL}${item.image}`} alt="product" />
                        <Popconfirm placement="topLeft" title={"Are you sure to delete this image?"} onConfirm={()=>deleteImage(item.id)}   okText="Yes" cancelText="No">
                            <div className="detail-product-pivot-cont-inner-left-before-del">
                                <FontAwesomeIcon icon={faTrash} />
                            </div>
                        </Popconfirm>
                    </div>
                )}
                <ImgCrop>
                    <Upload
                    className="mt-2"
                    accept=".png , .jpg , .jpeg , .pdf "
                    listType="picture-card"
                    fileList={fileList}
                    onChange={onChange}
                    onPreview={onPreview}
                    customRequest={dummyRequest}
                    showUploadList={{showPreviewIcon:false}}
                    >
                        <div className="detail-product-pivot-cont-inner-left-upload">
                            <FontAwesomeIcon icon={faUpload} />
                            <span>Upload image</span>
                        </div>
                    </Upload>
                </ImgCrop>
                {fileList.length > 0 && 
                    <div className="detail-product-pivot-cont-inner-left-upload-btn" onClick={uploadImage}>Upload</div>
                }
            </div>

        </>
    )
}

export default DetailProductItem;