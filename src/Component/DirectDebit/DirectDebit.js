import React, {useEffect, useState, useContext } from 'react';
import Header from "../../Common/Header/Header";
import { Accordion, Card, Button } from 'react-bootstrap'


import { Link, Route, Switch, useRouteMatch } from "react-router-dom";

import { GlobalContext } from "../../Context/GlobalContext";
import "./DirectDebit.css";


function DirectDebit(props) {


    
    return(
        <div className="Payments">
            <Header name={'SEPA Direct Debit Services'} isBack={true}/>
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
                    <Accord key={i.id} id={i.id} title={i.title} body={getBodies(i.id)} />
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
                                
                                body //getBodies(id) // id == "0" ? <Body1/>: id == "1" ? <Body2/>: id == "2" ? <Body3/>: <Body4/>   
                                                         
                            }
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    )
}



export default DirectDebit;


// just binds Accord Body with respective Accord Card header id
//id == "0" ? <Body1/>: id == "1" ? <Body2/>: id == "2" ? <Body3/>: <Body4/>
function getBodies(id) {

    if(id==="0")
        return <Body1 />
    else if(id==="1")
        return <Body2 />    
    else if(id==="2")
        return <Body3 />
    else if(id==="3")
        return <Body4 />   
    else
        return "ERR!!! BODY DOENT EXIST LETS CREATE NEW BODY"

}

function Body1(props) {
    return(
        <div>
            <div className="body-1">
                <p>
                 <span><i className="fa fa-check" style={{color:"blue",paddingRight: '1%'}}></i></span>
				 <span>This means the bank will permenantly cancel all SEPA direct debit payments for this mandate.</span>
				</p>
				<p>
                  <span><i className="fa fa-check" style={{color:"blue",paddingRight: '1%'}}></i></span>
				  <span>Once this request is processed it cannot be reversed.</span>
			    </p>
			    <p>
                  <span><i className="fa fa-check" style={{color:"blue",paddingRight: '1%'}}></i></span>
				  <span>You need to submit your request by 3pm, one working day before the next payment is due.</span>
				</p>
				
				<h6>Request form...</h6>
			    <h6 style={{color:"blue"}}>You'll need:</h6>
				
				<p><i className="fa fa-check-circle" style={{color:"blue",paddingRight: '1%'}}></i>
				   Creditor name and ID
				   <a href="#" style={{float:"right"}}><em><u>What is a creditor ID?</u></em></a></p>
			
			
			    <p><i className="fa fa-check-circle" style={{color:"blue", paddingRight: '1%'}}></i>
				Unique mandate reference (UMR)
				<a href="#" style={{float:"right"}}><em><u>Where's my UMR?</u></em></a></p>
				
                <div className="d-flex justify-content-center">
                    <button className="req-payment-button">Continue</button>
                </div>
			
              </div>
        </div>
    )
}
function Body2(props) {
    return(
        <div>
            <div className="body-2">
                <p>Make a selection</p>
                <div className="d-flex justify-content-center">
                    <button className="" style={{width:"40%"}}>Refuse Next</button>
                    <button className="" style={{width:"40%"}}>Refuse All</button>
                </div>
            </div>
        </div>
    )
}
function Body3(props) {
    return(
        <div>
            <div className="body-3">
                <p>Body 3</p>
            </div>
        </div>
    )
}
function Body4(props) {
    return(
        <div>
            <div className="body-4">
                <p>Make a selection</p>
                <div className="d-flex justify-content-center">
                    <button className="" style={{width:"40%"}}>Block</button>
                    <button className="" style={{width:"40%"}}>Unblock</button>
                </div>
            </div>
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