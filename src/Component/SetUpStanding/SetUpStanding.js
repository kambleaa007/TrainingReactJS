import React, {useEffect, useState, useContext } from 'react';
import Header from "../../Common/Header/Header";


import { Link, Route, Switch, useRouteMatch } from "react-router-dom";

import { GlobalContext } from "../../Context/GlobalContext";
import "./SetUpStanding.css";


function SetUpStanding(props) {
    return(
        <div>
            <Header name={'Set up Standing...'} isBack={true}/>
            <SetUpStandingBody />
        
        </div>

    )
}


function SetUpStandingBody(props) {

    const globalContext = useContext(GlobalContext);
    let match = useRouteMatch();

    const [value,setValue] = useState('');
    const handleSelect= (e) =>{
      setValue(e)
    }



    return(
        <div className="Send">
            <div className="set-up-standing-title">
                <div>
                    <p className="time-info">
                    <i className="fa fa-clock-o" ></i>&nbsp; 
                        It takes a minimum of 
                        <span className="info-middle"><strong> 1 working day to </strong></span>
                        set up your standing order.
                    </p>
                </div>
            </div>
            <div className="set-up-standing-order-body">
                <ul>
                <label > Your Account </label>
                <div className="account-info">
                You can set up a standing order online from your current account to another account in the same country.
                </div>
                <div className="pay-from">
                    <strong className="pay-from-text">Pay from</strong>
                </div>
                <select onChange={(event) => handleSelect(event.target.value)}>
                    <option value="">Select an account</option>
                    {
                        globalContext.Global.Accounts.map(i => (
                            <option value={i.id} key={i.id}>{i.type} - {i.name}</option>
                        ))
                    }
                </select>


                </ul>
            </div>
        </div>
    )
}



export default SetUpStanding;