import './App.css';
//import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import '../node_modules/react-bootstrap/dist/react-bootstrap';
import React, { useEffect, useState }from 'react';
import HomeComponent from './Layout/Home';
import MyAppComponent from './Layout/MyApp';

import SendMoney  from './Component/SendMoney/SendMoney';
import TransferMoney from "./Component/TransferMoney/TransferMoney";
import StandingOrder from "./Component/StandingOrder/StandingOrder";
import SetUpStanding from "./Component/SetUpStanding/SetUpStanding";
import PrivateBankingPayment from "./Component/PrivateBankingPayment/PrivateBankingPayment";
import MobileTopUp from "./Component/MobileTopUp/MobileTopUp";
import DirectDebit from "./Component/DirectDebit/DirectDebit";
import FutureDatedPayment from "./Component/FutureDatedPayment/FutureDatedPayment";
import ManagePayee from "./Component/ManagePayee/ManagePayee";

import MyAppLayout from "./Layout/MyAppLayout";

import Footer from "./Common/Footer/Footer";

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { GlobalProvider } from "./Context/GlobalContext";
import { HeaderProvider } from "./Context/HeaderContext";
import { TransactionProvider } from "./Context/TransactionContext";

import data from './Common/customers.json'

function App() {

  const [HeaderName,setHeaderName] = useState("");
  const [IsBack,setIsBack] = useState(false);
  const [Data, setData] = useState(data);

  // useEffect(() => {
  //     fetch("./Common/customers.json")
  //       .then(res=>res.json())
  //       .then(data=>setData(data))

  //   }
  // );

  return (
    <GlobalProvider value= {{Global: Data}} >
    <HeaderProvider>
    <TransactionProvider>  
    <BrowserRouter>
      <div className="App">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>


            <Switch>
              <Route path="/" exact component= { (props) => ( <HomeComponent  /> )} />
              <Route path="/myApp" component={(props) => ( <MyAppComponent   /> )} />
                      {/* <Route path="/myApp/myAccount" exact component= { (props) => ( <div>myAccount page</div> )} /> */}
              <Route path="/myAppLayout" component={(props) => ( <MyAppLayout /> )} />
            
              <Route path="/sendMoney" component={ (props) => ( <SendMoney   /> )} />
              <Route path="/transferMoney" component={(props) => ( <TransferMoney   /> )} />
              <Route path="/standingOrders" component={(props) => ( <StandingOrder   /> )} />
              <Route path="/setUpNewOrder" component={(props) => ( <SetUpStanding   /> )} />
              <Route path="/privateBankingPayment" component={(props) => ( <PrivateBankingPayment  /> )} />
              <Route path="/mobileTopup" component={(props) => ( <MobileTopUp   /> )} />
              <Route path="/directDebits" component={(props) => ( <DirectDebit   /> )} />
              <Route path="/futureDatedPayments" component={(props) => ( <FutureDatedPayment   /> )} />
              <Route path="/managePayees" component={(props) => ( <ManagePayee   /> )} />
            
              
              
            </Switch>
            
            <Footer />

        </div>
    </BrowserRouter>
    </TransactionProvider>
    </HeaderProvider>
    </GlobalProvider>
    
    
  );
}

export default App;
