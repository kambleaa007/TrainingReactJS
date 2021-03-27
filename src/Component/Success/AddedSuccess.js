import React, { useState, useContext } from 'react'

import { TransactionContext } from "../../Context/TransactionContext"
import Toast from 'react-bootstrap/Toast'
import ToastHeader from 'react-bootstrap/ToastHeader';
import ToastBody from 'react-bootstrap/ToastBody';



function AddedSuccess (props) {

    const [show, setShow] = useState(true); // ToastMsg
    let { transactionstate, transactiondispatch } = useContext(TransactionContext);

function doWork(){
    console.log("click")
    setShow(false);
    transactiondispatch({type:"show-success-toast", payload: null})
}

    return(
        <div>
            <Toast onClose={ doWork } show={show} autohide>
                <ToastHeader>
                <strong className="mr-auto">Success</strong>
                <small>few mins ago</small>
                </ToastHeader>
                <ToastBody>Account added Success</ToastBody>
            </Toast>
        </div>
    )
};


export default AddedSuccess;
