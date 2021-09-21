import React from 'react';

// VALORES POR DEFECTO DEL PROVIDER
const Context = React.createContext({
    name: 'esto-es-sin-provider',
    suscribeteAlCanal: true
})

export default Context