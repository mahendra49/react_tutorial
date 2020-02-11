import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
let count = 0;
const myreducer = (state, action) => {
    if (action.type === 'STUDENT_REGISTRATION') {
        count = count + 1;
        console.log(count);
        const newstate = { ...state, [action.field_name]: action.field_value };
        return newstate;
    }
    return state;
}
const store = createStore(myreducer, { firstname: "", lastname: "", phonenumber: "" });
store.subscribe(() => {
    console.log(store.getState());
});

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
