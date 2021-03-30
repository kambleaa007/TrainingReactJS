import React, {useEffect, useState, useContext } from 'react';

import Header from "../../Common/Header/Header";

import { useHistory } from "react-router-dom";

import { Link, Route, Switch, useRouteMatch } from "react-router-dom";

import { GlobalContext } from "../../Context/GlobalContext";
import './PrivateBankingPayment.css';


function PrivateBankingPayment(props) {
    return(
        <div>
            <Header name={'Private Banking Payment'} isBack={true}/>
            <PrivateBankingPaymentBody />
        
        </div>

    )
}


function PrivateBankingPaymentBody(props) {

    const globalContext = useContext(GlobalContext);
    let match = useRouteMatch();
    
    let history = useHistory();

    const [value,setValue] = useState('');
    const handleSelect= (e) =>{
      setValue(e)
    }



    return(
        <div className="Send">
            <div className="private-banking-title">
                <div>
                    <div  className="text-center">
                    <i className="private-logo" >
                    </i>
                    </div>

                    <p className="top-message">
                        If your payment cannot be made on 365 online you cannot make a separate payment throu the req payment option below
                    </p>
                    <p className="font-weight-bold">
                        when for example:
                    </p>
                    <ul className="borderless">
                        <li>Amount exceeded the 365 total working day limit.</li>
                        <li>You want to send money to courriers or in currencies that are not included in 365 online.</li>
                        <li>You want to send money from currency account in global market.</li>
                    </ul>

                </div>
            </div>
            <div className="private-banking-note">
                <p>Please Note:</p>
                <ul className="borderless">
                    <li>Amount exceeded the 365 total working day limit.</li>
                    <li>You want to send money to courriers or in currencies that are not included in 365 online.</li>
                    <li>You want to send money from currency account in global market.</li>
                    <li>You want to send money to courriers or in currencies that are not included in 365 online.</li>
                </ul>
            </div>
            <div className="private-banking-footer">
                <div className="d-flex justify-content-between">
                    <button class="go-back-button" onClick={() => history.goBack()}>Go back</button>
                    <button class="req-payment-button">Request payment</button>
                </div>
            </div>
        </div>
    )
}



export default PrivateBankingPayment;