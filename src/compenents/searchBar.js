import React from 'react';

class SearchBar extends React.Component{
	
	/*

	//a function for event handling
	onInputChange(event){
		console.log(event.target.value);
	}

	*/
	
	state = {term:""};


	//event handler for form submit
	onFormSubmit = (event)=>{
		event.preventDefault();

		this.props.onSubmit(this.state.term);


		//error so use arrow function
		//console.log(this.state.term);

	}



	render(){
		return (
			<div className="ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label>Image Search</label>
						<input type="text" value={this.state.term} onChange={(e)=>this.setState({term:e.target.value})}/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
