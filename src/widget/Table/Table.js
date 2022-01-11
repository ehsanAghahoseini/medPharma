import { faChevronLeft, faChevronRight, faSort } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState }  from "react" ;
import './tableStyle.css';


function Table(props) {
    const [listData , setListData] = useState([]);
    const [counter , setCounter] = useState(1);
    const [range , setRange] = useState(10);
    const[sortState , setSortState]=useState(true);


    const sortList=async(sort)=>{
        await setSortState(!sortState)
        if(sortState){
            await setListData(listData.sort((a, b) => (a[sort] > b[sort]) ? 1 : -1))
            await setSortState(false)
        }
        else {
            await setListData(listData.sort((a, b) => (a[sort] < b[sort]) ? 1 : -1))
            await setSortState(true)
        }
    }


    const changeCounter=(action)=>{
        let newlist = [] ;
        if(action){
            if(props.data[(counter * range)] != undefined){
                for(let i=counter * range ; i<(counter * range)+range ; i++){
                    if(props.data[i] != undefined){
                        newlist.push(props.data[i])
                    }
                }
                setCounter(counter + 1)
                setListData(newlist);
                return ;
            }
        }
        else {
            if(props.data[((counter -1 ) * range)-1] != undefined){
                for(let i=(counter - 2)*range ; i<((counter - 2)*range)+range ; i++){
                    if(props.data[i] != undefined){
                        newlist.push(props.data[i])
                    }
                }
                setCounter(counter - 1)
                setListData(newlist);
                return ;
            }
        }

    }

    
    useEffect(() => {
        let list = [] ;
        setRange(props.range)
        for(let i=0 ; i<range ; i++){
            if(props.data[i] != undefined){
                list.push(props.data[i])
            }
        }
        setCounter(1)
        setListData(list)
    },[props.data , props.range]);

    return (
        <div className="table">
            <div className="table-head">
                {props.columns.map(item=>
                    <div className="table-head-item">
                        <span>{item.title}</span>
                        {item.sort != null && item.sort != undefined &&
                            <FontAwesomeIcon onClick={()=>sortList(item.sort)} icon={faSort} />
                        }
                    </div>
                )}
            </div>
            {listData.map(item=>
            <div className="table-row">
                    {props.columns.map(items=>
                    <div className="table-row-item">
                        {item[items.dataIndex]}
                        {item[items.dataIndex] == undefined && items.render(item)}
                    </div>
                    )}
            </div>
            )}
            <div className="table-counter">
                <div className="table-counter-main">
                    <div className="table-counter-main-item" onClick={()=>changeCounter(false)} ><FontAwesomeIcon icon={faChevronLeft} /></div>
                    <div className="table-counter-main-item"> {counter} </div>
                    <div className="table-counter-main-item" onClick={()=>changeCounter(true)}><FontAwesomeIcon icon={faChevronRight} /></div>
                </div>
            </div>
        </div>
    )
}

export default Table;