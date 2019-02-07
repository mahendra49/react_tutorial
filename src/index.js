//import react and react-dom
import React from 'react';
import ReactDOM from 'react-dom';
import Commondetail from './CommonDetails'


//create a react component
const App = ()=>{
	return (
		<div className = "ui container comments">
		
			<Commondetail author = "sam"/>
			<Commondetail author = "is here"/>
			<Commondetail />
			<Commondetail />

		</div>		
	);
}

//take the component and display it
ReactDOM.render(<App/> , document.querySelector('#root'));