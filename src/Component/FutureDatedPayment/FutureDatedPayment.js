import React, {useEffect, useState, useContext } from 'react';
import Header from "../../Common/Header/Header";
import { Table } from "react-bootstrap";

import './FutureDatedPayment.css'

import { GlobalContext } from "../../Context/GlobalContext";




function FutureDatedPayment(props) {
    return(
        <div>
            <Header name={'Future Dated Payments'} isBack={true}/>
            <FutureDatedPaymentBody />

        </div>
    )
}


function FutureDatedPaymentBody(props) {

    
    const globalContext = useContext(GlobalContext);
    let transactions = globalContext.Global.Accounts[0].transactions // take transactions arr for account 1

    

    return(
        <div className="Send">
            <div className="d-flex justify-content-around">
                
                <Table striped borderless hover className="payment-table ">
                    <thead>
                        <tr>
                        {/* <th>#</th> */}
                        <th>Status</th>
                        <th>Payee Name</th>
                        <th>Amount</th>
                        <th>Due Date</th>
                        </tr>
                    </thead>
                    <tbody>
                    {   
                        transactions.map(i=>{
                            return(                                
                                <tr key={i.id}>
                                    {/* <td>{i.id}</td> */}
                                    <td className={getStyleStatus(i.status)}>
                                        {i.status}
                                    </td>
                                    <td>{i.payee_name}</td>
                                    <td className="text-center">{i.amount}</td>
                                    <td>{i.due_date}</td>
                                </tr>                                
                            )
                        })
                    }
                    </tbody>
                </Table>
                
                
            </div>
        </div>
    )
}


// working of this function depends on JSON transaction status data should match
function getStyleStatus(status) {
    if(status==="PENDING")
        return "payment-pending-status"
    else if(status==="UNSUCCESSFUL")
        return "payment-unsuccess-status"    
    else if(status==="SUCCESSFUL")
        return "payment-success-status"  
    else if(status==="CANCELLED")
        return "payment-cancel-status"
    return ""          
}

export default FutureDatedPayment;