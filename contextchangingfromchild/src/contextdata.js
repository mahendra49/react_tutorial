import React from 'react';

const DataProvider = React.createContext({
    count: '',
    changeCount: () => { }
});

export { DataProvider };