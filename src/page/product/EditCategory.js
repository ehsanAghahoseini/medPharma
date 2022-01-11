import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react" ;
import { Form, Input, Upload , Select } from 'antd';
import apiPattern from '../../widget/BaseApi'
import LoaderBtn from '../../widget/Loader/LoaderBtn';
import ImgCrop from 'antd-img-crop';
import Toast_noty from '../../widget/Toast_noty';
import {BASE_Medai_URL} from '../../widget/BASE_Medai_URL';

function EditCategory(props) {
    const [display , setDisplay]=useState(false);
    const [detailData , setDetailData]=useState(null)
    const[fileList , setFileList]=useState([]);
    const {Option} = Select ;
    const [form] = Form.useForm();


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


    const onFinish=(values)=>{
        setDisplay(true)
        let formdata = new FormData();
        formdata.append("file_icon", fileList[0].originFileObj);
        formdata.append("name", values.name);
        apiPattern('categories/update' , 
        {
            body : formdata,
            isJson : false ,
        }
        )
        .then((res) => {
            setDisplay(false)
            props.history.push('/panel/category/list'); 
        })
    }

    useEffect(()=>{
        apiPattern('categories/single' , {body : {'id':props.match.params.id}})
        .then((res) => {
            setDetailData(res)
            form.setFieldsValue(res)
        })
    },[])


    return (
        <>
        <div className="cont-inner-main-head">
            <h1>Edit Category</h1>
            <span>Home | Category</span>
        </div>
        <div className="fullSection bgSection">

            <Form form={form} className="fullSection"  name="addMed" onFinish={onFinish}>

                <div className="thirdSection">
                    <div className="innerSection form-item-sec">
                        <span>Name :</span>
                        <Form.Item name="name"  rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                    </div>
                </div>

                <div className="fullSection">
                    {/* <div className="form-item-file"> */}
                        <ImgCrop>
                            <Upload
                            className={`mt-2`}
                            accept=".png , .jpg , .jpeg , .pdf "
                            listType="picture-card"
                            fileList={fileList}
                            onChange={onChange}
                            onPreview={onPreview}
                            customRequest={dummyRequest}
                            showUploadList={{showPreviewIcon:false}}
                            >
                                {fileList.length < 1 && 
                                    <img style={{width:"100%"}} src={`${BASE_Medai_URL}${detailData?.icon}`} />
                                }

                            </Upload>
                        </ImgCrop>
                    {/* </div> */}
                </div>

                <div className="fullSection">
                    <div className="thirdSection">
                        <div className="innerSection form-item-sec">
                            {display ? 
                                <button type="button" disabled><LoaderBtn/></button>

                            :
                                <button type="submit">Edit</button>
                            }
                        </div>
                    </div>
                </div>
            </Form>
        </div>
    </>
    )
}

export default EditCategory;