
import React from 'react'

import { useHistory } from "react-router-dom";


const Footer = (props) => {

    let history = useHistory();
    // history.goBack()
    // history.push(path);

    return ( 
        <div>
            <div className="Footer">
                <div className="">Footer</div>
            </div>
        </div>
     );
}
 
export default Footer;