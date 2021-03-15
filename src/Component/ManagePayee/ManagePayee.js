import React, {useEffect, useState, useContext } from 'react';
import Header from "../../Common/Header/Header";

import './../SendMoney/SendMoney.css'

import { GlobalContext } from "../../Context/GlobalContext";

import { HeaderContext } from "../../Context/HeaderContext";

function ManagePayee(props) {

    const globalContext = useContext(GlobalContext);

    let { state, dispatch } = useContext(HeaderContext);

    let inc = () => dispatch({ type: "increment" });


    useEffect(()=>{
        //props.setName('Send Money');
    })
    

    return ( 
        
        <div className="Payments">
            <Header name={'Manage Payee'} isBack={true}/>

            {state.color}
            <p>
            Current count: <b>{state.count}</b>
            </p>
            <button onClick={inc}>Increment!</button>


            
        </div>

     );
}
 
export default ManagePayee;

