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


function chgStyle(e) {
    //console.log("clikkk chg" +e.target.classList);


    if(e.target.classList.contains("card-header")){
        e.target.classList.remove("card-header");
        e.target.classList.add("new-card-header");
    }else{
        e.target.classList.remove("new-card-header");
        e.target.classList.add("card-header");        
    }
    
    
}

function AccordionList(props) {

    const globalContext = useContext(GlobalContext);


    const [Accordion,setAccordion] = useState(
        [
            {
                "id":"0",
                "title":"Cancel direct debit mandate",
                "body":""
            },
            {
                "id":"1",
                "title":"Refuse next/all direct debits",
                "body":""
            },
            {
                "id":"2",
                "title":"Reactivate next/all direct debits",
                "body":""
            },
            {
                "id":"3",
                "title":"block/unblock direct debits",
                "body":""
            }
        ]
    );

    return(
        <div>
            {Accordion.map(i=>{
                return(
                    <Accord id={i.id} title={i.title} body={i.body} />
                )
            })}

        </div>
    )
}

function Accord({id, title, body}) {
    return(
        <div key={id}>
            <Accordion defaultActiveKey="">
                <Card >
                    <Accordion.Toggle as={Card.Header} variant="link" eventKey={id} onClick={(e)=>chgStyle(e)}>
                    {title}
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey={id}>
                        <Card.Body>
                            {
                                id == "0" ? <Body1/>: id == "1" ? <Body2/>: id == "2" ? <Body3/>: <Body4/>                            
                            }
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    )
}

export default DirectDebit;


function Body1(props) {
    return(
        <div>
            Body1
        </div>
    )
}
function Body2(props) {
    return(
        <div>
            Body2
        </div>
    )
}
function Body3(props) {
    return(
        <div>
            Body3
        </div>
    )
}
function Body4(props) {
    return(
        <div>
            Body4
        </div>
    )
}
// function AccordionList(props) {
//     return(
//         <div>  
//             <Accordion defaultActiveKey="">
//                 <Card>
//                 {/* <Card.Header className=""> */}
//                     <Accordion.Toggle as={Card.Header} variant="link" eventKey="0" onClick={(e)=>chgStyle(e)}>
//                     Cancel direct debit mandate
//                     </Accordion.Toggle>
//                 {/* </Card.Header> */}

//                 <Accordion.Collapse eventKey="0">
//                     <Card.Body>Body content for panel 1</Card.Body>
//                 </Accordion.Collapse>
//                 </Card>
//             </Accordion>

//             <Accordion defaultActiveKey="">
//                 <Card >
//                 {/* <Card.Header className=""> */}
//                     <Accordion.Toggle as={Card.Header} variant="link" eventKey="1" onClick={(e)=>chgStyle(e)}>
//                     Refuse next/all direct debits
//                     </Accordion.Toggle>
//                 {/* </Card.Header> */}

//                 <Accordion.Collapse eventKey="1">
//                     <Card.Body>Body content for panel 2</Card.Body>
//                 </Accordion.Collapse>
//                 </Card>
//             </Accordion>


//         </div>
//     )
// }