import './Home.css';
import React, { Component } from 'react'
//import { ListGroup, Container } from 'react-bootstrap';
//import Carousel from 'react-bootstrap/Carousel';
//import SendMoney  from "../Component/SendMoney";
//import 'bootstrap/dist/css/bootstrap.css';
import Header from "../Common/Header/Header";
import { Route, Switch, useHistory } from 'react-router-dom';



function HomeComponent(props) {
    return (
        <div className="Payments">
            <Header name={"Payments"} isBack={false}/>
            <Operations />

        </div>
    );
}

 
export default HomeComponent;



export function Operations() {

    let history = useHistory();

    return ( 
        
        <div className="operations-outer">
            <div className="Operations">
                <ul className="Services">
                <li onClick={() => history.push("/sendMoney")}><i className='send-money'></i>Send Money or pay a bill<i className=' next'></i>  </li>
                <li onClick={() => history.push("/transferMoney")}><i className='transfer-money'></i>Transfer between my accounts<i className=' next'></i></li>
                <li onClick={() => history.push("/standingOrders")}>Standing orders<i className='next'></i></li>
                <li onClick={() => history.push("/managePayees")}>Manage payees<i className='  next'></i></li>
                <li onClick={() => history.push("/mobileTopup")}>Mobile top up<i className=' next'></i></li>
                <li onClick={() => history.push("/directDebits")}>Direct debits<i className='  next'></i></li>
                <li onClick={() => history.push("/futureDatedPayments")}>Future dated payments<i className='  next'></i></li>
                <li onClick={() => history.push("/privateBankingPayment")}>Private banking payment<i className='  next'></i></li>
                </ul> 
            </div>
        </div>
     );
}


/*

<li><a href="/transferMoney"><i className='fa fa-exchange fa-lg transfer-money'></i>Transfer between my accounts<i className='fa fa-angle-right next'></i></a></li>
<li><a href="/standingOrders">Standing orders<i className='fa fa-angle-right  next'></i></a></li>
<li><a href="/managePayees">Manage payees<i className='fa fa-angle-right  next'></i></a></li>
<li><a href="/mobileTopup">Mobile top up<i className='fa fa-angle-right next'></i></a></li>
<li><a href="/directDebits">Direct debits<i className='fa fa-angle-right  next'></i></a></li>
<li><a href="/futureDatedPayments">Future dated payments<i className='fa fa-angle-right  next'></i></a></li>






class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            //name:"Payments",//"Transfer Between", //"Send Money",
            //isBack: false            
         }
         
        //this.props.setName('Payments')
    }
    render() { 
        return ( 

            <div className="Payments">
                <Header name={this.props.name} isBack={this.props.isBack}/>
                <Operations />

            </div>
            
         );
    }
}
 
export default HomeComponent;









*/