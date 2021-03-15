import React, { useEffect, useState, useContext } from 'react';
import Header from "../../Common/Header/Header";

//import DropdownButton from 'react-bootstrap/DropdownButton';
//import Dropdown from 'react-bootstrap/Dropdown'
import './TransferMoney.css'
import { GlobalContext } from "./../../Context/GlobalContext";


//import 'bootstrap/dist/css/bootstrap.min.css';

function TransferMoney(props) {
    
    
    useEffect(()=>{

    })


    return(

        <div className="Payments">
            <Header name={'Transfer Between'} isBack={true}/>
            <TransferBody />
        </div>

    );
}


export default TransferMoney;


function TransferBody(props) {
    

    const globalContext = useContext(GlobalContext);


    const [value,setValue] = useState('');
    const handleSelect= (e) =>{
      setValue(e)
    }
  

    return(
        <div className="Transfer">
            <ul className="Select">
            {/* 
            LOGIC WITH NAME
            <label className="label">Transfer from</label>
            <select onChange={(event) => handleSelect(event.target.value)}>
                <option value="">Select account to transfer from</option>
                {
                    props.accounts.map(i => (
                        <option key={i.id}>{i.name}</option>
                    ))
                }
            </select>
            <label className="label">Transfer to</label>
            <select>
                <option value="">select account to transfer to</option>
                {
                    props.accounts.map(i => (
                        i.name==value ?  
                            i.linked_accounts.map(j=>(<option key={j}>{j}</option>)) : 
                            null
                    ))
                }
            </select> 
            */}

            <label className="label">Transfer from </label>
            <select onChange={(event) => handleSelect(event.target.value)}>
                <option value="">Select account to transfer from</option>
                {
                    globalContext.Global.Accounts.map(i => (
                        <option value={i.id} key={i.id}>{i.name}</option>
                    ))
                }
            </select>
            <label className="label">Transfer to</label>
            <select>
                <option value="">select account to transfer to</option>
                {
                    globalContext.Global.Accounts.map(i => (
                        i.id === value ?  
                            i.linked_accounts.map(j=>(<option key={j}>{j}</option>)) : 
                            null
                    ))
                }
            </select>

            </ul>
        </div>
    )
}