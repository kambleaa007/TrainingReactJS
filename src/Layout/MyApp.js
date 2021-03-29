import React, { useContext, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import { useState } from 'react';
import Toast from 'react-bootstrap/Toast'
import ToastHeader from 'react-bootstrap/ToastHeader';
import ToastBody from 'react-bootstrap/ToastBody';

import Table from 'react-bootstrap/Table'
// import Form from 'react-bootstrap/Form'

//Adding antd modules and style
import { Button as Button1, Modal, Form, Input, Radio, Dropdown, Menu, Select } from 'antd';
import "antd/dist/antd.css";
import { DownOutlined, UserOutlined, DeleteOutlined } from '@ant-design/icons';

import { TransactionContext, getAccounts, setAccount, deleteAccount, putAccount, getAccount } from "../Context/TransactionContext";

import { BrowserRouter, Route, Switch, useRouteMatch, useHistory, useParams } from 'react-router-dom';


import AddedSuccess from "../Component/Success/AddedSuccess";


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    text: {
      padding: theme.spacing(2, 2, 0),
    },
    paper: {
      paddingBottom: 50,
    },
    list: {
      marginBottom: theme.spacing(2),
    },
    subheader: {
      backgroundColor: theme.palette.background.paper,
    },
  }));

  const messages = [
    {
      id: 1,
      primary: 'Brunch this week?',
      secondary: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
      person: '/static/images/avatar/5.jpg',
    },
    {
      id: 2,
      primary: 'Birthday Gift',
      secondary: `Do you have a suggestion for a good present for John on his work
        anniversary. I am really confused & would love your thoughts on it.`,
      person: '/static/images/avatar/1.jpg',
    },
    {
      id: 3,
      primary: 'Recipe to try',
      secondary: 'I am try out this new BBQ recipe, I think this might be amazing',
      person: '/static/images/avatar/2.jpg',
    },
    {
      id: 4,
      primary: 'Yes!',
      secondary: 'I have the tickets to the ReactConf for this year.',
      person: '/static/images/avatar/3.jpg',
    },
    {
      id: 5,
      primary: "Doctor's Appointment",
      secondary: 'My appointment for the doctor was rescheduled for next Saturday.',
      person: '/static/images/avatar/4.jpg',
    },
    {
      id: 6,
      primary: 'Discussion',
      secondary: `Menus that are generated by the bottom app bar (such as a bottom
        navigation drawer or overflow menu) open as bottom sheets at a higher elevation
        than the bar.`,
      person: '/static/images/avatar/5.jpg',
    },
    {
      id: 7,
      primary: 'Summer BBQ',
      secondary: `Who wants to have a cookout this weekend? I just got some furniture
        for my backyard and would love to fire up the grill.`,
      person: '/static/images/avatar/1.jpg',
    },
  ];



// TODO: jsPanel
function MyAppComponent(props) {



    return (
        <div>
            {/* text-center */}
            <div className="container-fluid "> 
                <div className="row">
                    
                    <div className="col-md-2">
                        <LeftSider />

                    </div>
                    <div className="col-md-8">

                        <MyAppBody />

                    </div>

                    <div className="col-md-2">
                        <RightSider />

                    </div>

{/* 
<TransactionCheck /> here

*/}

                    


                    
                </div>
            </div>
            
        </div>
    );
}



function TransactionCheck(props) {


  let { transactionstate, transactiondispatch } = useContext(TransactionContext);
  const history = useHistory();
  let { path, url } = useRouteMatch();
  const { accountId } = useParams();

  const getAccountData = async ()=> {
    await getAccounts(transactiondispatch);
  }




  let status = () => 
  transactiondispatch({ 
        type: "ADD_CONTACT",
        payload: { id: Math.floor(Math.random() * 100), name: "newName", email: "newEmail" } 
      });



  const Testing = () => {

    let addTransaction = () => transactiondispatch({
      type: "add-transaction",
      payload: { id:"0", status:"PENDING", payee_name:"abcd", amount:1000.00, due_date:"10/10/2020", type:"DEBITED" }
    });  
    
    let addAccTransaction = () => transactiondispatch({
      type: "add-account-transaction",
      payload: {
        accountID: "1",
        transaction: { id:"0", status:"PENDING", payee_name:"abcd", amount:1000.00, due_date:"10/10/2020", type:"DEBITED" }
      }
    })


    return(
      <div>
        <button onClick={getAccountData}>Call axios getAccountData</button>
        <button onClick={addTransaction}>Add New Dummy Transactions</button>
        <button onClick={addAccTransaction}>Add New Dummy Acc Transactions</button>
        <p>Accounts.length: { transactionstate.Accounts != null ? transactionstate.Accounts.length : 0 }</p>
        <p>Tranctions.length: { transactionstate.Accounts.map(t=>t.transactions != null ? t.transactions.length : 0 )}</p>
          
        <p>{transactionstate.transactions.map(t=>
        <div>
          amount is {t.amount} <br/>
          payee_name is {t.payee_name}
        </div>         
        )}</p>
        <div>
        length: {transactionstate.transactions.length}
        </div>
      </div>
    )
  }

  return(

  <div>
      <button onClick={()=>{history.push(`${url}/testing`)}}>Testing</button>
      
      <button onClick={()=>{history.push(`${url}/addNewAccount`)}}>Add New Account</button>
      <button onClick={()=>{history.push(`${url}/userTable`)}}>User Table</button>
      <button onClick={()=>{history.push(`${url}/accountTable`)}}>Account Table</button>
      <div>
        <Switch>
          <Route exact path={path}>
          </Route>
          <Route path={`${path}/testing`}>
            <div>
              <Testing />      
            </div>
          </Route>
          <Route path={`${path}/addNewAccount`}>
            <div>
              <AddNewUser />      
            </div>
          </Route>
          <Route path={`${path}/userTable`}>
            <TransactionUserTable user={transactionstate.contacts}/>
          </Route>
          <Route path={`${path}/accountTable`}>
            <TransactionAccountTable user={transactionstate.Accounts}/>
          </Route>
          <Route path={`${path}/account/:accountId`} component={SingleAccount} />
        </Switch>
      </div>

      {/* 
      
      <p>contacts length is: {state.contacts.length}</p>   
      <h3>
        contacts name is {state.contacts.map(c=>c.name)}
      </h3>  
      
      */}
      
      
  </div> 

  )
}

function SingleAccount(props) {

  const { accountId } =  useParams(); // got the clicked single Account id
  let { transactionstate, transactiondispatch } = useContext(TransactionContext);
  
  const [account, setAccount] = useState(null);
  const amount = 1000;

  useEffect(
    async ()=> {
      setAccount(await getAccount(transactiondispatch, accountId))
      console.log(account)
    },
    [] // to get call only once
  ) // fetch values from heroku, current context has only 1 Account value in initialState

  const putAccountData = async ()=> {
    await putAccount(transactiondispatch,
      {
        id: account.id, name: account.name,  balance: account.balance + amount, type: account.type, linked_accounts: [], transactions: [{
          id: Math.floor(Math.random() * 100), status: "PENDING", payee_name: account.name, amount: amount, type: "CREDITED" 
        }]
      }
    );
  }



  return(
    <div>
      Account {accountId} {console.log(account)}
      { account != null ? <div>id: {account.id} name: {account.name}</div> : null }
      <button onClick={putAccountData} > Credit {amount}</button>
    </div>
  )

}

const TransactionUserTable = (props) => {


  return(
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Account Type</th>
      </tr>
    </thead>
    <tbody>
      {
        props.user.map(u =>
          <tr key={Math.random()}>
            <td>{u.id}</td>
            <td>{u.name}</td>
            <td>{u.email}</td>
            <td>{u.accounttype}</td>
          </tr>
      )
      }
    </tbody>
  </Table>
  )
}
const TransactionAccountTable = (props) => {

  let { transactionstate, transactiondispatch } = useContext(TransactionContext);
  
  const history = useHistory();
  let { path, url } = useRouteMatch();
  const { accountId } = useParams();


  // fetch values from heroku, current context has only 1 Account value in initialState
  useEffect(
    async ()=> {
      await getAccounts(transactiondispatch);
    },
    [] // to get call only once
  ) // fetch values from heroku, current context has only 1 Account value in initialState


  return(
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>ID</th>
        <th>Name</th>
        <th>Balance</th>
        <th>Account Type</th>
        <th>Transactions</th>
      </tr>
    </thead>
    <tbody>
      {
        transactionstate.Accounts.map(u =>
          <tr key={Math.random()}>
            <td onClick={()=>{deleteAccount(transactiondispatch, u.id)}} ><DeleteOutlined />Delete</td>
            <td onClick={()=>{history.push(`${url.replace('accountTable','account')}/`+u.id)}}>{u.id}</td>

            <td>{u.name}</td>
            <td>{u.balance}</td>
            <td>{u.type}</td>
            <td>
              <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Status</th>
                  <th>Amount</th>
                  <th>Due date</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {
                u.transactions != null ?

                  u.transactions.map(t => 
                    <tr>
                      <td>{t.status}</td>
                      <td>{t.amount}</td>
                      <td>{t.due_date}</td>
                      <td>{t.type}</td>
                    </tr>
                    )
                    : 
                    null
                }
                </tbody>
                </Table>
            </td>
          </tr>
      )
      }
    </tbody>
  </Table>
  )
}




function AddNewUser (props) {

  let { transactionstate, transactiondispatch } = useContext(TransactionContext);

  const [status, setStatus] = useState(null);
  

  const setAccountData = async (values) => {
    await setAccount(transactiondispatch, {
      id: Math.floor(Math.random() * 100), name: values.Name,  balance: 0, type: values.accounttype, linked_accounts: [], transactions: []
    }); // sent json (Account obj) built from values 
  }

  const formRef = React.createRef();


  const { Option } = Select;


  let addContact = (values) => transactiondispatch({ 
      type: "ADD_CONTACT",
      payload: { id: Math.floor(Math.random() * 100), name: values.Name, email: values.Email, accounttype: values.accounttype } 
    });

    let addAccount = (values) => transactiondispatch({
      type: "add-account", 
      payload: {  id: Math.floor(Math.random() * 100),  name: values.Name,  balance: 0, type: values.accounttype, linked_accounts: [], transactions: [] }
    })

  var onFinish = values => {
    // console.log(values);
    // addContact(values)
    addAccount(values);
    setAccountData(values);
  };
  var onReset = () => {
    formRef.current.resetFields();
  };

  const layout = {
    labelCol: {
      span: 8
    },
    wrapperCol: {
      span: 16
    }
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16
    }
  };
  const onAccountTypeChange = (value) => {
    //console.log("Account type selected is "+ value);
  }

  return(
      <div>
        <Form {...layout}
        ref={formRef}
        name="control-ref"
        onFinish={onFinish}
      >
        <Form.Item
          name="Name"
          label="Name"
          rules={[
            {
              required: true,
              message: 'Please input your Name!'
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="Email"
          label="Email"
          rules={[
            {
              required: true,
              message: 'Please input your Email!',
            }
          ]}
        >
        
          <Input />
        </Form.Item>
        <Form.Item
          name="accounttype" label="Account Type" rules={[{ required: true,},]}
        >
          <Select
            placeholder="Select Your Account Type"
            onChange={onAccountTypeChange}
            allowClear
          >
            <Option value="CURRENT">CURRENT</Option>
            <Option value="SAVING">SAVING</Option>
            <Option value="SALARY">SALARY</Option>
          </Select>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button1 type="primary" htmlType="submit">
            Submit
          </Button1>
          <Button1 htmlType="button" onClick={onReset}>
            Reset
          </Button1>

        </Form.Item>
      </Form>
      <h1>{transactionstate.success_message != null ? <AddedSuccess setStatus={setStatus} /> : null} </h1>
      </div>
  )

}


function MyAppBody (props) {

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <NavBar />
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                    {/* <Chatting /> Adding chat only after login sucess  */} 
                    {/* <Login /> */}
                    <NavBody />
                </div>
                <div className="col-md-1"></div>
            </div>
            
      </div>
    )
}


const NavBar = () => {

    const classes = useStyles();
    const history = useHistory();
    let { path, url } = useRouteMatch();

    return(
        <div>
          <AppBar position="static">
              <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                  <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                  News
              </Typography>
              <Button color="inherit" onClick={()=>{history.push(`${url}/myAccount`)}}>My Account</Button>
              <Button color="inherit" onClick={()=>{history.push(`${url}/login`)}}>Login</Button>
              <Button color="inherit">Sign Up</Button>
              </Toolbar>
          </AppBar>
        </div>
    )
};

const NavBody = () => {

  const history = useHistory();
  let { path, url } = useRouteMatch();

  return(
    <div>
      <Switch>
        <Route exact path={path}>
        </Route>
        <Route path={`${path}/myAccount`}>
          <div>
          <TransactionCheck />
          </div>
        </Route>
        <Route path={`${path}/login`}>
          <Login />
        </Route>
      </Switch>
    </div>
  )

}

const Chatting = () => {

    const classes = useStyles();

    return(
        <React.Fragment>
            <CssBaseline />
            <Paper square className={classes.paper}>
                <Typography className={classes.text} variant="h5" gutterBottom>
                Inbox
                </Typography>
                <List className={classes.list}>
                {messages.map(({ id, primary, secondary, person }) => (
                    <React.Fragment key={id}>
                    {id === 1 && <ListSubheader className={classes.subheader}>Today</ListSubheader>}
                    {id === 3 && <ListSubheader className={classes.subheader}>Yesterday</ListSubheader>}
                    <ListItem button>
                        <ListItemAvatar>
                        <Avatar alt="Profile Picture" src={person} />
                        </ListItemAvatar>
                        <ListItemText primary={primary} secondary={secondary} />
                    </ListItem>
                    </React.Fragment>
                ))}
                </List>
            </Paper>
        </React.Fragment>
    )
};


function Login(props) {

    const [username, setUsername] = useState("a"); // Matching username
    const [password, setPassword] = useState("a"); // Matching pwd

    const [isLoggedIn, setIsLoggedIn] = useState(false); // Login or Sucess Message

    const [show, setShow] = useState(false); // ToastMsg

    const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
        const [form] = Form.useForm();
        return (
          <Modal
            visible={visible}
            title="Login"
            okText="Login"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={() => {
              form
                .validateFields()
                .then((values) => {
                  form.resetFields();
                  onCreate(values);
                })
                .catch((info) => {
                  console.log('Validate Failed:', info);
                });
            }}
          >
            <Form
              form={form}
              layout="vertical"
              name="form_in_modal"
              initialValues={{
                modifier: 'public',
              }}
            >
              <Form.Item
                name="username"
                label="User Name"
                rules={[
                  {
                    required: true,
                    message: 'Please enter username!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item name="password" label="Password"
              rules={[
                {
                  required: true,
                  message: 'Please enter password!',
                },
              ]}
              >
                <Input type="password" />
              </Form.Item>
              
            </Form>
          </Modal>
        );
      };


    const ToastMsg = () => {


        return(
            <Toast onClose={() => setShow(false)} show={show} delay={2000} autohide>
                <ToastHeader>
                <strong className="mr-auto">Try Again</strong>
                <small>few mins ago</small>
                </ToastHeader>
                <ToastBody>Wrong credentials ... ... ...</ToastBody>
            </Toast>
        )
    }

    const CollectionsPage = () => {
        const [visible, setVisible] = useState(false);
      
        const onCreate = (values) => {
          console.log('Received values of form: ', values);
        //   console.log('values.username ', values.username);
        //   console.log('values.password ', values.password);
        
        // 

        if(values.username === username && values.password === password){
            console.log("Login success");
            setIsLoggedIn(true); // dont show login again
        }
        else{
            setShow(true);     // trigger ToastMsg default initialise True

        }

          
            setVisible(false); // trigger pre existing logic of modal
        };
      
        return (
          <div>
            <Button1
              type="primary"
              onClick={() => {
                setVisible(true);
              }}
            >
              Login
            </Button1>
            <CollectionCreateForm
              visible={visible}
              onCreate={onCreate}
              onCancel={() => {
                setVisible(false);
              }}
            />
          </div>
        );
      };

const LoggedIn = () => {
    return(
        <div>
            <div>Logged In</div>
            <Button1
              type="primary"
              onClick={() => setIsLoggedIn(false)}
            >
              Log Out
            </Button1>
        </div>
    )
}


    return(
            <div className="MainDiv">
                <div className="jumbotron text-center">
                    <div className="container">
                    {isLoggedIn ? <div><LoggedIn /><Chatting /></div> : <CollectionsPage />}  
                    <ToastMsg />
                    </div>                      
                </div>

            </div>
        );
}

const LeftSider = () => {
    return(
        <div>
            {/* <div>Left Sider Func</div> */}
        </div>
    )
}
const RightSider = () => {
    return(
        <div>
            {/* <div>Right Sider Func</div> */}
        </div>
    )
}

export default MyAppComponent;



