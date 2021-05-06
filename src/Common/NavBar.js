import React from 'react';
import Nav from 'react-bootstrap/Nav'

export default function NavBar() {
    return (
        <div>
            <React.Fragment>                
                <Nav 
                    id="nav"
                    activeKey="/home"
                    onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                    >NavBar
                    <Nav.Item>
                        <Nav.Link id="navlink-1" href="/home">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-3">Disabled</Nav.Link>
                    </Nav.Item>
                </Nav>
            </React.Fragment>
        </div>
    )
}
