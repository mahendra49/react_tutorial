import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
function userReducer(state = 0, { type, payload }) {
	switch (type) {
		case 'userAction':
			console.log("1");
			return payload.userss;
			break;
		default:
			return state;
	}
}

function productReducer(state = [], { type, payload }) {
	switch (type) {
		case 'userAction':
			console.log("2");
			return "hai";
			break;
		default:
			return state;
	}
}

const allReducers = combineReducers({ user: userReducer, product: productReducer });
const store = createStore(allReducers, {
	user: "jhon",
	product: [{ "name": "NOKIA" }]
});
console.log(store.getState());
const userAction = {
	type: "userAction",
	payload: { userss: "RAM" }
}
store.dispatch(userAction);
console.log(store.getState());
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
