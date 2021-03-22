import React, { useContext } from 'react'
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

//Adding antd modules and style
import { Button as Button1, Modal, Form, Input, Radio } from 'antd';
import "antd/dist/antd.css";

import { TransactionContext } from "../Context/TransactionContext";



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
<Check /> here

*/}

                    <Check />


                    
                </div>
            </div>
            
        </div>
    );
}



function Check(props) {


  let { state, dispatch } = useContext(TransactionContext);

  let status = () => 
      dispatch({ 
        type: "ADD_CONTACT",
        payload: { id: Math.floor(Math.random() * 100), name: "newName", email: "newEmail" } 
      });

  let addTransaction = () => dispatch({
    type: "add-transaction",
    payload: { id:"0", status:"PENDING", payee_name:"abcd", amount:1000.00, due_date:"10/10/2020", type:"DEBITED" }
  });    

  return(

  <div>
      <button onClick={status}>Add New Dummy User</button>
      {/* 
      
      <p>contacts length is: {state.contacts.length}</p>   
      <h3>
        contacts name is {state.contacts.map(c=>c.name)}
      </h3>  
      
      */}
      <UserTable user={state.contacts}/>
  </div> 

  )
}

const UserTable = (props) => {


  return(
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      {
        props.user.map(u =>
          <tr key={Math.random()}>
            <td>{u.id}</td>
            <td>{u.name}</td>
            <td>{u.email}</td>
          </tr>
      )
      }
    </tbody>
  </Table>
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
                    <Login />
                </div>
                <div className="col-md-1"></div>
            </div>
            
      </div>
    )
}


const NavBar = () => {

    const classes = useStyles();

    return(
        <AppBar position="static">
            <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
                News
            </Typography>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Sign Up</Button>
            </Toolbar>
        </AppBar>
    )
};

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



