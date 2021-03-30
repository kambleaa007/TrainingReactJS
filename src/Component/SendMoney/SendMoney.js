import React, {useEffect, useState, useContext } from 'react';
import Header from "./../../Common/Header/Header";

import './SendMoney.css'

import { GlobalContext } from "./../../Context/GlobalContext";

import { HeaderContext } from "./../../Context/HeaderContext";

function SendMoney(props) {

    const globalContext = useContext(GlobalContext);

    let { state, dispatch } = useContext(HeaderContext);

    let inc = () => dispatch({ type: "increment" });


    useEffect(()=>{
        //props.setName('Send Money');
    })
    

    return ( 
        
        <div className="Payments">
            <Header name={'Send Money'} isBack={true}/>
            <SendBody />

            {state.color}
            <p>
            Current count: <b>{state.count}</b>
            </p>
            <button onClick={inc}>Increment!</button>


            {
            /* <GlobalConsumer>
                {
                    (accounts)=>{
                        return <div>Acc {accounts.length}</div>
                    }
                }
            </GlobalConsumer> 
            Acc length {globalContext.Global.Accounts.length}// works syntax
            <SendBody {...props} />
            */
            }
            
        </div>

     );
}
 
export default SendMoney;


function SendBody(props) {

    const globalContext = useContext(GlobalContext);

    
    const [value,setValue] = useState('');
    const handleSelect= (e) =>{
      setValue(e)
    }

    return(
        <div className="Send">
            <div className="SendHeader">
                <p>Pay from</p>
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
                </ul>
            </div>
        </div>
    )
}