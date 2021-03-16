
import React from 'react';

import Container from 'react-bootstrap/Container';


import { useHistory } from "react-router-dom";


const Footer = (props) => {

    let history = useHistory();
    // history.goBack()
    // history.push(path);

    return ( 
        <div>
            
            <div className="container-fluid text-center">
            <div className="row">
                <div className="col-md-2">
                    <div>Left Sider</div>

                </div>
                <div className="col-md-8 ">
                    Footer
                </div>
                <div className="col-md-2">
                <div>Right Sider</div>

                </div>
            </div>
            </div>
            
        </div>
     );
}
 
export default Footer;