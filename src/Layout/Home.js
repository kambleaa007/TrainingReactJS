import './Home.css';
import React, { Component } from 'react'
//import { ListGroup, Container } from 'react-bootstrap';
//import Carousel from 'react-bootstrap/Carousel';
//import SendMoney  from "../Component/SendMoney";
//import 'bootstrap/dist/css/bootstrap.css';
import Header from "./../Component/Header";
import { Route, Switch } from 'react-router-dom';



function HomeComponent(props) {
    return (
        <div className="Payments">
            <Header name={"Payments"} isBack={false}/>
            <Operations />

        </div>
    );
}

 
export default HomeComponent;

function Operations() {
    return ( 
        
        <div className="operations-outer">
            <div className="Operations">
                <ul className="Services">
                <li><a href="/sendMoney"><i className='send-money'></i>Send Money or pay a bill<i className=' next'></i></a>  </li>
                <li><a href="/transferMoney"><i className='transfer-money'></i>Transfer between my accounts<i className=' next'></i></a></li>
                <li><a href="/standingOrders">Standing orders<i className='next'></i></a></li>
                <li><a href="/managePayees">Manage payees<i className='  next'></i></a></li>
                <li><a href="/mobileTopup">Mobile top up<i className=' next'></i></a></li>
                <li><a href="/directDebits">Direct debits<i className='  next'></i></a></li>
                <li><a href="/futureDatedPayments">Future dated payments<i className='  next'></i></a></li>
                <li><a href="/privateBankingPayment">Private banking payment<i className='  next'></i></a></li>
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