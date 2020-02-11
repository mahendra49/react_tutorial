import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
const myreducer = (state, action) => {
    if (action.type === 'FORM_UPLOAD') {
        const newstate = { ...state, ...action.data };
        return newstate;
    }
    return state;
}
const store = createStore(myreducer, { firstname: "", lastname: "", phonenumber: "" });
store.subscribe(() => {
    console.log("storestate:" + JSON.stringify(store.getState()));
});
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
