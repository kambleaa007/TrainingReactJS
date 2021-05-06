import React from 'react';
import Nav from 'react-bootstrap/Nav'

export default function NavBar() {
    return (
        <div>
            <React.Fragment>
                NavBar
                <Nav
                    activeKey="/home"
                    onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                    >
                    <Nav.Item>
                        <Nav.Link href="/home">Active</Nav.Link>
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
