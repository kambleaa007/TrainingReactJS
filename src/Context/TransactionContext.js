import React from 'react';
import axios from "axios";

import AddedSuccess from "../Component/Success/AddedSuccess";

const TransactionContext = React.createContext();

let initialState = {
    id: "99",
    status: "NONE",
    payee_name: "NONE",
    amount: 0.00,
    due_date: "10/10/1970",
    type: "NONE",
    success_message: null,
    Account: null,
    transactions : [
        {
            id: "0",            
            accountid: null,
            status: "PENDING",
            payee_name: "abcd",
            amount: 1000.00,
            due_date: "10/10/2020",
            type: "DEBITED",
        }
    ],
    contacts: [
        {
          id: "098",
          name: "Diana Prince",
          email: "diana@us.army.mil",
          accounttype: "CURRENT"
        },
        {
          id: "099",
          name: "Bruce Wayne",
          email: "bruce@batmail.com",
          accounttype: "CURRENT"
        },
        {
          id: "100",
          name: "Clark Kent",
          email: "clark@metropolitan.com",
          accounttype: "CURRENT"
        }
      ],
      Accounts: [
        {
            id: "1",
            name: "1111",
            balance: 10000,
            type: "CURRENT",
            linked_accounts: [
                "1234",
                "1478",
                "1598"
            ],
            transactions: [
                {
                    id: "0",
                    status: "PENDING",
                    payee_name: "abcd",
                    amount: 1000.00,
                    due_date: "10/10/2020",
                    type: "DEBITED"

                },
                {
                    id: "0",
                    status: "PENDING",
                    payee_name: "abcd",
                    amount: 1000.00,
                    due_date: "10/10/2020",
                    type: "DEBITED"

                }
            ]
        }
    ]
}

let reducer = (state, action) => {

    switch(action.type) {
        case "reset":
            return initialState;
        case "set-status":
            return { ...state, status: action.payload };
        case "set-payee_name":
            return { ...state, payee_name: action.payload };
        case "set-amount":
            return { ...state, amount: action.payload };
        case "set-due_date":
            return { ...state, due_date: action.payload };
        case "set-type":
            return { ...state, type: action.payload }; 
        case "add-transaction":
            const newTransationArr = [...state.transactions];     // const newArr = [...state.transactions, action.payload];
            newTransationArr.push(action.payload);
            return { ...state, transactions: newTransationArr};      
        
        case "ADD_CONTACT":
            return {
                contacts: [...state.contacts, action.payload]
            };    

        case "add-account-transaction":
            const Arr = [...state.Accounts];
            const ID = action.payload.accountID; // passing ID from MyApp.js
            const Acc = Arr.find(a => a.id == ID);
            if (Acc != null){
                Acc.transactions.push(action.payload.transaction) // passing transaction from MyApp.js
            }
            //console.log(action.payload.transaction);
            //console.log(Acc);
            return {
                ...state, Accounts: Arr
            };
            
        case "add-account":
            const AccArr = [...state.Accounts];
            AccArr.push(action.payload);

            return {
                ...state, Accounts: AccArr
            }

        case "FETCH-ACCOUNTS":
            return {
                ...state, Accounts: action.payload
            }

        // case "FETCH-ACCOUNT-ByID":
        //     return {
        //         ...state, Accounts: action.payload
        //     }    

        case "FETCH-TRANSACTIONS":
            return {
                ...state, transactions: action.payload
            }

        case "show-success-toast":
            return { ...state, success_message: action.payload };    
    }
};

function TransactionProvider(props) {
    
    let [transactionstate, transactiondispatch] = React.useReducer( reducer, initialState );
    let value = { transactionstate, transactiondispatch };

    return (
        <TransactionContext.Provider value= {value}> { props.children } </TransactionContext.Provider>
    );

}




export const getAccounts = async dispatch => {
        // get user info handler (HOW TO USE)
        // const getUserInfoHandler = async () => {
        //     await getUser(userDispatch);
        //     setLoading(userDispatch, false);
        // };
    await axios
            .get(`https://my-banking-json-server.herokuapp.com/Accounts`) 
            .then(res => {
                const result = res.data;
                console.log(result);
                dispatch({
                    type: "FETCH-ACCOUNTS",
                    payload: result   
                })
            })

}

export const getAccount = async ( dispatch, id ) => {
    return await axios
            .get(`https://my-banking-json-server.herokuapp.com/Accounts/`+id)
            .then( res => res.data )
}

export const setAccount = async ( dispatch, account ) => {
    await axios
            .post(`https://my-banking-json-server.herokuapp.com/Accounts`, account)
            .then(res => {
                console.log(res);
                // getting error for this dispatch only contacts coming, not Accounts, not setting all values correctly
                // dispatch({
                //     type: "add-account",
                //     payload: res.data
                // })
                dispatch({
                    type: "show-success-toast",
                    payload: res.status
                })
                //return res.status;
            })
}

export const deleteAccount = async (dispatch, id ) => {
    await axios
            .delete(`https://my-banking-json-server.herokuapp.com/Accounts/`+ id )
            .then(res => {
                console.log(res);
                getAccounts(dispatch);
            })
}

export const putAccount = async ( dispatch, account ) => {
    await axios
            .put(`https://my-banking-json-server.herokuapp.com/Accounts/`+account.id, account)
            .then(res => {
                console.log(res);
                getAccounts(dispatch);
            })
}



export const getTransactions = async dispatch => {
    await axios
            .get(`https://my-banking-json-server.herokuapp.com/Transactions`) 
            .then(res => {
                const result = res.data;
                console.log(result);
                dispatch({
                    type: "FETCH-TRANSACTIONS",
                    payload: result   
                })
            })

}

export const setTransaction = async ( dispatch, transaction ) => { // /Transactions with -> new accountId field
    await axios
            .post(`https://my-banking-json-server.herokuapp.com/Transactions`, transaction)
            .then(res => {
                console.log(res);
            })
}






let TransactionConsumer = TransactionContext.Consumer;


export { TransactionProvider, TransactionConsumer, TransactionContext }