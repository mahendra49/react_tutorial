import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';

const myreducer = (state, action) => {
    if (action.type === 'INC') {
        return {
            age: 35
        }
    }
    return state;
}
const store = createStore(myreducer, { age: 20 });
store.subscribe(() => {
    console.log("from subscribe" + JSON.stringify(store.getState()));
});
store.dispatch({ type: "INC" });

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
