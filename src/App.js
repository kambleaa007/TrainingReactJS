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
              <Route path="/" exact component= { (props) => ( <HomeComponent name={"Payments"} isBack={false} setName={setHeaderName} /> )} />
              <Route path="/sendMoney" component={ (props) => ( <SendMoney name={'Send Money'} isBack={true}  /> )} />
              <Route path="/transferMoney" component={(props) => ( <TransferMoney name={'Transfer Between'} isBack={true} setData={setData} accounts={data.Accounts}  /> )} />
              <Route path="/standingOrders" component={(props) => ( <StandingOrder name={'Standing Orders'} isBack={true} setData={setData} accounts={data.Accounts}  /> )} />
              <Route path="/setUpNewOrder" component={(props) => ( <SetUpStanding  name={'Set up Standing...'} isBack={true} /> )} />
              <Route path="/privateBankingPayment" component={(props) => ( <PrivateBankingPayment  name={'Private Banking Payment'} isBack={true} /> )} />
            
              
            </Switch>
          

        </div>
    </BrowserRouter>
    </GlobalProvider>
    
  );
}

export default App;
