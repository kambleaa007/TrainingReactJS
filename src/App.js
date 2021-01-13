import './App.css';
//import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import '../node_modules/react-bootstrap/dist/react-bootstrap';
import React, { useState }from 'react';
import HomeComponent from './Layout/Home';
import SendMoney  from './Component/SendMoney';
import TransferMoney from "./Component/TransferMoney";
import StandingOrder from "./Component/StandingOrder";
import SetUpStanding from "./Component/SetUpStanding";
import PrivateBankingPayment from "./Component/PrivateBankingPayment";
import MobileTopUp from "./Component/MobileTopUp";
import DirectDebit from "./Component/DirectDebit";
import FutureDatedPayment from "./Component/FutureDatedPayment";

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { GlobalProvider } from "./Context/GlobalContext";

import data from './Common/customers.json'

function App() {

  const [HeaderName,setHeaderName] = useState("");
  const [IsBack,setIsBack] = useState(false);
  const [Data, setData] = useState(data);

  return (
    <GlobalProvider value= {{Global: Data}} >
    <BrowserRouter>
      <div className="App">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>


            <Switch>
              <Route path="/" exact component= { (props) => ( <HomeComponent  /> )} />
              <Route path="/sendMoney" component={ (props) => ( <SendMoney   /> )} />
              <Route path="/transferMoney" component={(props) => ( <TransferMoney   /> )} />
              <Route path="/standingOrders" component={(props) => ( <StandingOrder   /> )} />
              <Route path="/setUpNewOrder" component={(props) => ( <SetUpStanding   /> )} />
              <Route path="/privateBankingPayment" component={(props) => ( <PrivateBankingPayment  /> )} />
              <Route path="/mobileTopup" component={(props) => ( <MobileTopUp   /> )} />
              <Route path="/directDebits" component={(props) => ( <DirectDebit   /> )} />
              <Route path="/futureDatedPayments" component={(props) => ( <FutureDatedPayment   /> )} />
            
              
            </Switch>
          

        </div>
    </BrowserRouter>
    </GlobalProvider>
    
  );
}

export default App;
