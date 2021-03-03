import React from 'react';


const HeaderContext = React.createContext();

let initialState = {
    count: 10,
    color: "green"
}

let reducer = (state, action) => {

    switch(action.type) {
        case "reset":
            return initialState;
        case "increment":
            return { ...state, count: state.count + 1 };
        case "decrement":
            return { ...state, count: state.count - 1 };
        case "set-color":
            return { ...state, color: action.payload };
    }
};

function HeaderProvider(props) {
    
    let [state, dispatch] = React.useReducer( reducer, initialState );
    let value = { state, dispatch };

    return (
        <HeaderContext.Provider value= {value}> { props.children } </HeaderContext.Provider>
    );

}

let HeaderConsumer = HeaderContext.Consumer;


export { HeaderProvider, HeaderConsumer, HeaderContext }