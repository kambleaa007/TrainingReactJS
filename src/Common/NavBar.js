import React from 'react';
import Nav from 'react-bootstrap/Nav'

export default function NavBar(props) {

    return (
        <div>
            <React.Fragment>                
                <Nav 
                    id="nav"
                    activeKey="/home"
                    //onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}                    
                    >NavBar
                    <Nav.Item>
                        <Nav.Link id="navlink-1" onClick = {props.navHome}>DPMA</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link id="navlink-2" onClick = {props.navAdmin}>Admin</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link >Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link >Disabled</Nav.Link>
                    </Nav.Item>
                </Nav>
            </React.Fragment>
        </div>
    )
}
