import React, {useEffect, useState, useContext } from 'react';
import Header from "./Header";
import { Accordion, Card, Button } from 'react-bootstrap'


import { Link, Route, Switch, useRouteMatch } from "react-router-dom";

import { GlobalContext } from "../Context/GlobalContext";
import "./DirectDebit.css";



function DirectDebit(props) {


    
    return(
        <div className="Payments">
            <Header name={props.name} isBack={props.isBack}/>
            <DirectDebitBody />

        </div>
    )
}



function DirectDebitBody(props) {
    return(
    <div>
        <div className="top-heading">
            <div className="help-info">
                <p><i className="fa fa-question"></i>
                    Need a hand?
                </p>
            </div>                
            <div className="next-arrow">
                <i className="fa fa-chevron-right"></i>
            </div>
        </div>  
        <div className="Send">
            <AccordionList />


        </div>
    </div>
    )
}


function AccordionList(props) {
    return(
        <div>  
            <Accordion defaultActiveKey="null">

            <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Panel 1
                </Accordion.Toggle>
            </Card.Header>

            <Accordion.Collapse eventKey="0">
                <Card.Body>Body content for panel 1</Card.Body>
            </Accordion.Collapse>
            </Card>

            <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Panel 2
                </Accordion.Toggle>
            </Card.Header>

            <Accordion.Collapse eventKey="1">
                <Card.Body>Body content for panel 2</Card.Body>
            </Accordion.Collapse>
            </Card>

            </Accordion>
        </div>
    )
}


export default DirectDebit;