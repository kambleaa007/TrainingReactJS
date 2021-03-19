import React from 'react';


const TransactionContext = React.createContext();

let initialState = {
    id: "99",
    status: "NONE",
    payee_name: "NONE",
    amount: 0.00,
    due_date: "10/10/1970",
    type: "NONE",
    transactions : [
        {}
    ],
    contacts: [
        {
          id: "098",
          name: "Diana Prince",
          email: "diana@us.army.mil"
        },
        {
          id: "099",
          name: "Bruce Wayne",
          email: "bruce@batmail.com"
        },
        {
          id: "100",
          name: "Clark Kent",
          email: "clark@metropolitan.com"
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
            const newArr = [...state.transactions];
            // const newArr = [...state.transactions, action.payload];
            newArr.push(action.payload);
            return { ...state, transactions: newArr};      
        
        case "ADD_CONTACT":
            return {
                contacts: [...state.contacts, action.payload]
            };    
    }
};

function TransactionProvider(props) {
    
    let [state, dispatch] = React.useReducer( reducer, initialState );
    let value = { state, dispatch };

    return (
        <TransactionContext.Provider value= {value}> { props.children } </TransactionContext.Provider>
    );

}

let TransactionConsumer = TransactionContext.Consumer;


export { TransactionProvider, TransactionConsumer, TransactionContext }