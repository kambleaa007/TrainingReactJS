import React from 'react';


const HeaderContext = React.createContext({ Header : null });


const HeaderProvider = HeaderContext.Provider // App.js
const HeaderConsumer = HeaderContext.Consumer // DONT/No -> Use Hooks instead



export { HeaderProvider, HeaderConsumer, HeaderContext }