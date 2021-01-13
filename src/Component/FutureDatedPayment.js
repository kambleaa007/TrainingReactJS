import React, {useEffect, useState, useContext } from 'react';
import Header from "./Header";

//import './SendMoney.css'

import { GlobalContext } from "../Context/GlobalContext";




function FutureDatedPayment(props) {
    return(
        <div>
            <Header name={props.name} isBack={props.isBack}/>
            <FutureDatedPaymentBody />

        </div>
    )
}


function FutureDatedPaymentBody(props) {
    return(
        <div>
FutureDatedPaymentBody
        </div>
    )
}

export default FutureDatedPayment;