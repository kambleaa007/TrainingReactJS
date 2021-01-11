import React from 'react';


const GlobalContext = React.createContext({ Global : null });


const GlobalProvider = GlobalContext.Provider // App.js
const GlobalConsumer = GlobalContext.Consumer // No Use instead Hooks



export { GlobalProvider, GlobalConsumer, GlobalContext }