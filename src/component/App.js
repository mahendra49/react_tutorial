import React from 'react';
import { BrowserRouter , Route } from 'react-router-dom';

import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/streamShow';
import Header from './Header';

const App = ()=>  {

	return (
		<div className="ui container">
			
			<BrowserRouter>
				<div>
					<Header />

					<Route path="/" exact component = {StreamList}/>
					<Route path="/streams/new" component = {StreamCreate}/>
					<Route path="/streams/edit" component = {StreamEdit}/>
					<Route path="/streams/delete" component = {StreamDelete}/>
					<Route path="/streams/show" component = {StreamShow}/>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;



/*//good practice to use Link from react-router instead of anchor tag..
const PageOne = ()=>{
	return(
		<div>
			<Link to="/pagetwo">Navigate to page two </Link>
		</div>
	);
}

const PageTwo = ()=>{
	return( 
		<div>
			<Link to="/pageone">Navigate to page one </Link>
		</div>
	);
}*/
