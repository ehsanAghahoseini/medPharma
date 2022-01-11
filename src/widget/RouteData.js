import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { render } from "@testing-library/react";
import React  from "react" ;
import {Route} from 'react-router-dom';

import Dashboard from '../page/dashboard/Dashboard';

import AddProduct from '../page/product/AddProduct';
import ListProduct from '../page/product/ListProduct';
import DetailProduct from '../page/product/DetailProduct';


const RouteData = [
    {
        'path':"/panel" ,
        'component':Dashboard ,
    } ,
    {
        'path':"/panel/product/add" ,
        'component':AddProduct ,
    } ,
    {
        'path':"/panel/product/list" ,
        'component':ListProduct ,
    } ,
    {
        'path':"/panel/product/detail/:id" ,
        'component':DetailProduct ,
    } ,
]

export default RouteData ;