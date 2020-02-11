import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import storereducer from './reducers/myreducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
const store = createStore(storereducer, { age: 20 }, applyMiddleware(thunk));
// store.subscribe(() => {
//     console.log("from subscribe" + JSON.stringify(store.getState()));
// });
// store.dispatch({ type: "INC" });
// store.dispatch({ type: "INC" });
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
