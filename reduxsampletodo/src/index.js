import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import toDoReducer from './reducers';

const store = createStore(toDoReducer, [
    { text: "i have to go home" },
    { text: "i have to eat" },
    { text: "i have to watch movie" },
    { text: "i have to play" },
]);
store.subscribe(() => {
    console.log(store.getState());
});
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
