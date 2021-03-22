import React from 'react';

import { TransactionContext } from "../Context/TransactionContext";


const AccountContext = React.createContext();


let initialState = {
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

                }
            ]
        }
    ]
}

let reducer = (state, action) => {

    switch(action.type) {
        case "reset":
            return initialState;
        case "add-new-account":
            const newAccountArr = [...state.Accounts];
            // const newArr = [...state.Accounts, action.payload];
            newAccountArr.push(action.payload);
            return { ...state, Accounts: newAccountArr};      
        
        case "add-account-transaction-with-accountid":
            const newArr = [...state.Accounts];
            const ID = action.payload.accountID;
            const Acc = newArr.find(a => a.id == ID);
            Acc.transactions.push(action.payload.transaction)
            
            return {
                ...state, Accounts: newArr
            };    
    }
};

function AccountProvider(props) {
    
    let [state, dispatch] = React.useReducer( reducer, initialState );
    let value = { state, dispatch };

    return (
        <AccountContext.Provider value= {value}> { props.children } </AccountContext.Provider>
    );

}

let AccountConsumer = AccountContext.Consumer;


export { AccountProvider, AccountConsumer, AccountContext }