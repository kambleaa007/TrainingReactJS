import './Header.css';
import React from 'react'

import { useHistory } from "react-router-dom";


const Header = (props) => {

    let history = useHistory();
    // history.goBack()
    // history.push(path);

    return ( 
        <div>
            <div className="Header">
            {
                props.isBack ? <button className="GoBack" onClick={() => history.goBack()}><i className='go-back-logo'></i></button> : null
            }
                <div className="HeaderName">{props.name}</div>
                <button className="HeaderUser"><i className='header-user-logo'></i></button>
            </div>
        </div>
     );
}
 
export default Header;