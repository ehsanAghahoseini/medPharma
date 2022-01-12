import {  faTachometerAlt, faCircleNotch, faTasks, faBong, faList, faBlog} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { render } from "@testing-library/react";
import React  from "react" ;


const NavData = [
    {
        'name':"Dashboard" ,
        'isSubmenu': false ,
        'link':'/panel' ,
        "icon":(<FontAwesomeIcon icon={faTachometerAlt} />),
    },

    {
        'name':"Product" ,
        'isSubmenu': true ,
        "icon":(<FontAwesomeIcon icon={faBong} />),
        'submenu':[
            {
                'name':"Add" ,
                'link':'/panel/product/add' ,
                "icon":(<FontAwesomeIcon icon={faCircleNotch} />),
            },
            {
                'name':"List" ,
                'link':'/panel/product/list' ,
                "icon":(<FontAwesomeIcon icon={faCircleNotch} />),
            },
        ]
    },

]

export default NavData ;