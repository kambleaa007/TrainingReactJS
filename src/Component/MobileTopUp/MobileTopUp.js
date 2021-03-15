import React, {useEffect, useState, useContext } from 'react';
import Header from "../../Common/Header/Header";

import './../SendMoney/SendMoney.css'

import { GlobalContext } from "../../Context/GlobalContext";

function MobileTopUp(props) {

    const globalContext = useContext(GlobalContext);


    useEffect(()=>{
        //props.setName('Send Money');
    })
    

    return ( 
        
        <div className="Payments">
            <Header name={'Mobile Top Up'} isBack={true}/>
            <MobileTopUpBody />
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
 


function MobileTopUpBody(props) {

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
                <label ><strong>Account</strong> </label>
                <select onChange={(event) => handleSelect(event.target.value)}>
                    <option value="">Select account</option>
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





export default MobileTopUp;
