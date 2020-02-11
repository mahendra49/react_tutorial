import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import myreducer from './reducers';

const store = createStore(myreducer, { name: "ram", age: "30" });
store.subscribe(() => {
    console.log(store.getState());
});
// store.dispatch({ type: "UPDATE_AGE", newage: "40" });
// store.dispatch({ type: "UPDATE_NAME", newname: "sam" });
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
