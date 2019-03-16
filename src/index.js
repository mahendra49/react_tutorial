import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware } from 'redux';
import reducers from './reducers';


const store = createStore(reducers , applyMiddleware(thunk));
//const store = createStore(reducers);


ReactDOM.render(
	<Provider store = {store}>
		<App/>
	</Provider>,
	document.querySelector("#root")
);