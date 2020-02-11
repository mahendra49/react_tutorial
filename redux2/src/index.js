import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
let count = 1;
const myReducer = (state, action) => {
    console.log(JSON.stringify(state) + "  " + count);
    count = count + 1;
    if (action.type === 'CHANGE_NAME') {
        return { val1: action.another }
    }
    return state;
}
const store = createStore(myReducer, { val1: 10 });
store.subscribe(function () {
    console.log(store.getState().val1);
});
store.dispatch({ type: "CHANGE_NAME", another: 20 });
store.dispatch({ type: "CHANGE_NAME", another: 30 });
store.dispatch({ type: "CHANGE_NAME", another: 40 });

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
