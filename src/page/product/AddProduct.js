import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react" ;
import { Form, Input, Upload , Select , InputNumber , Divider} from 'antd';
import apiPattern from '../../widget/BaseApi'
import LoaderBtn from '../../widget/Loader/LoaderBtn';
import ImgCrop from 'antd-img-crop';
import Toast_noty from '../../widget/Toast_noty';

function AddProduct(props) {
    const [display , setDisplay]=useState(false);
    const [listMed , setListMed]=useState([]);
    const [listBrand , setListBrand]=useState([]);
    const [listStrengths , setListStrengths]=useState([]);
    const [strengthCustom , setStrengthCustom]=useState(null)
    const {Option} = Select ;


    const addItem=(e)=>{
        if(strengthCustom != null) {
            setListStrengths(prev=>[...prev , {"id": "citem" + listStrengths.length + 250 , "description":strengthCustom}]) 
        }
    }


    const onFinish=(values)=>{
        setDisplay(true);
        let postData = {'products':[],'medicine_id':values.medicine_id , 'shop_id' : 1};
        let newProduct = {}
        for(let i of values.products){
            newProduct['brand_id'] = i.brand_id ;
            newProduct['price'] = i.price ;
            if(typeof i.strength != 'number'){
                newProduct['strength'] = {'description' : i.strength} ;
            }
            else {
                newProduct['strength_id'] = i.strength ;
            }
            postData['products'].push(newProduct);
            newProduct = {}
        }
        apiPattern('shops/product/create' , {body : postData}).then((res) => {
            setDisplay(true);
            props.history.push('/panel/product/list'); 
        })
    }


    useEffect(()=>{
        apiPattern('medicines/enum' , {}).then((res) => {setListMed(res) })
        apiPattern('brands/enum' , {}).then((res) => {setListBrand(res)})
        apiPattern('strengths/enum' , {}).then((res) => {setListStrengths(res)})
    },[])


    return (
        <>
        <div className="cont-inner-main-head">
            <h1>Add Product</h1>
            <span>Home | Product</span>
        </div>
        <div className="fullSection bgSection">

            <Form className="fullSection"  name="addMed" onFinish={onFinish}>

                <div className="thirdSection">
                    <div className="innerSection form-item-sec">
                        <span>Medicine :</span>
                        <Form.Item name="medicine_id"  rules={[{ required: true }]}>
                            <Select
                                allowClear
                                >
                                    {listMed.map(item=>
                                        <Option key={item.id} value={item.id}>{item.name}</Option>
                                    )}
                            </Select>
                        </Form.Item>
                    </div>
                </div>

                <div className="fullSection">
                    <Form.List className="fullSection" name="products">
                        {(fields, { add, remove }) => (
                        <>
                            {fields.map(({ key, name, fieldKey, ...restField }) => (
                            <div className=" form-item-multiSec" key={key}  >
                                <Form.Item
                                {...restField}
                                name={[name, 'brand_id']}
                                fieldKey={[fieldKey, 'brand_id']}
                                rules={[{ required: true, }]}
                                >
                                    <Select
                                        placeholder="Select brand"
                                        allowClear
                                        >
                                            {listBrand.map(item=>
                                                <Option key={item.id} value={item.id}>{item.name}</Option>
                                            )}
                                    </Select>
                                </Form.Item>
                                <Form.Item
                                {...restField}
                                name={[name, 'strength']}
                                fieldKey={[fieldKey, 'strength']}
                                rules={[{ required: true, }]}
                                >
                                    <Select
                                        placeholder="Select strength"
                                        allowClear
                                        showSearch
                                        filterOption={(input, option) =>
                                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                        filterSort={(optionA, optionB) =>
                                         optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                                        }
                                        dropdownRender={menu => (
                                            <div>
                                              {menu}
                                              <Divider style={{ margin: '4px 0' }} />
                                              <div style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}>
                                                <Input style={{ flex: 'auto' , border : "1px solid #e0e0e0"}} onChange={(e)=>{setStrengthCustom(e.target.value);}} />
                                                <a
                                                  style={{ flex: 'none', padding: '8px', display: 'block', cursor: 'pointer' }}
                                                  onClick={addItem}
                                                >
                                                   Add item
                                                </a>
                                              </div>
                                            </div>
                                          )}
                                        >
                                            {listStrengths.map(item=>
                                                <Option key={item.id} value={typeof item.id == 'number' ? item.id : item.description }>{item.description}</Option>
                                            )}
                                    </Select>
                                </Form.Item>
                                <Form.Item
                                {...restField}
                                name={[name, 'price']}
                                fieldKey={[fieldKey, 'price']}
                                rules={[{ required: true}]}
                                >
                                <InputNumber placeholder="price" />
                                    </Form.Item>
                                <FontAwesomeIcon icon={faMinus} onClick={() => remove(name)} />
                            </div>
                            ))}
                            <button type="button" className="form-item-multiSec-btn"  onClick={() => add()}>
                                Add product
                            </button>
                        </>
                        )}
                    </Form.List>
                </div>

                <div className="fullSection">
                    <div className="thirdSection">
                        <div className="innerSection form-item-sec">
                            {display ? 
                                <button type="button" disabled><LoaderBtn/></button>

                            :
                                <button type="submit">Submit</button>
                            }
                        </div>
                    </div>
                </div>
            </Form>
        </div>
    </>
    )
}

export default AddProduct;