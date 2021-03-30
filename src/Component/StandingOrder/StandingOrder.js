import React, {useEffect, useState, useContext } from 'react';
import Header from "../../Common/Header/Header";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";

import './StandingOrder.css'

import { GlobalContext } from "../../Context/GlobalContext";

function StandingOrder(props) {

    const globalContext = useContext(GlobalContext);
    let match = useRouteMatch();



    useEffect(()=>{
        //props.setName('Send Money');
    })


    return (

        <div className="Payments">
            <Header name={'Standing Orders'} isBack={true}/>
            <StandingOrderBody />

            {/* <Switch>
                <Route path={`${match.url}/setUpNewOrder`}>
                    <SetUpStanding />
                </Route>
            </Switch> */}

        </div>

     );
}



function StandingOrderBody(props) {

    const globalContext = useContext(GlobalContext);
    let match = useRouteMatch();

    const [value,setValue] = useState('');
    const handleSelect= (e) =>{
      setValue(e)
    }

    return(
        <div className="Send">
           <div className="standing-order-title">
                <p>To view your standing orders select an account</p>
            </div>
            <div className="standing-order-body">
                <ul>
                <label >Account </label>
                <select onChange={(event) => handleSelect(event.target.value)}>
                    <option value="">Select account</option>
                    {
                        globalContext.Global.Accounts.map(i => (
                            <option value={i.id} key={i.id}>{i.name}</option>
                        ))
                    }
                </select>

                <p className="standing-order-or"><span>Or</span></p>

                <div className="set-up-button">
                    <button ><Link to={"/setUpNewOrder"}><i className="plus-logo"></i><div>Set up new standing order</div></Link></button>
                </div>

                <div className="info-msg">
                    <span className="info-logo">
                    </span>
                    <div>
                        <p className="info-msg-text">
                            Standing order can be set up online to transfer funds from your current account to another account in the same country. (max limit €3,000 / £3,000).
                        </p>
                    </div>
                </div>


                </ul>
            </div>
        </div>
    )
}



export default StandingOrder;
