import React from 'react';
import unpslash from '../api/unpslash';
import SearchBar from './searchBar';
import ImageList from './imageList';

class App extends React.Component {
	

	state = {images:[]};

	onSearchSubmit = async (term)=>{
		console.log(term);
		const response = await unpslash.get("/search/photos",{
			
			params:{
				query:term
			},
			
		})

		this.setState({images:response.data.results});

		//console.log(response.data.results)
	}


	render(){
		return(
			<div className="ui container">
				<SearchBar onSubmit={this.onSearchSubmit}/>
				<ImageList images={this.state.images}/>
			</div>
		);
	}
};


export default App;
