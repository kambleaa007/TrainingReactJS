import React, { useState } from 'react'

import Toast from 'react-bootstrap/Toast'
import ToastHeader from 'react-bootstrap/ToastHeader';
import ToastBody from 'react-bootstrap/ToastBody';



function AddedSuccess (props) {

    const [show, setShow] = useState(true); // ToastMsg

    return(
        <div>
            <Toast onClose={() => setShow(false)} show={show} autohide>
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
