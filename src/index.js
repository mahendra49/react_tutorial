import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './seasondisplay'
 

class App extends React.Component {

	//or just use..or equilanent

	/*
		without constructor 

		state = {lat : null}

	*/

	constructor(props){
		super(props);

		//this is only time we do direct assigment
		//any other time call setState()
		this.state = { lat : null , errorMsg:"" };
		
		

	}

	//life cycle of component after first rendering
	componentDidMount(){
		console.log("component mounted");
		

		//get the geolocation
		window.navigator.geolocation.getCurrentPosition(
			(position)=> {
				//call setstate to update a component
				//this.state is like properties of class
				this.setState({lat:position.coords.latitude});
			},
			(err)=> {
				this.setState({errorMsg:"there was some error"});
			}  	
		);

	}

	//after any update .. ie after "this.setState()"
	componentDidUpdate(){
		console.log("component did update");
	}

	render(){
		
		if(this.state.lat){
			return <SeasonDisplay lat={this.state.lat}/>;
		}
		else if(this.state.errorMsg){
			return <div>error: {this.state.errorMsg}</div>;
		}
		else{
			return <div> Loading: </div>;
		}
				

	}

} 

ReactDOM.render(<App/> , document.querySelector("#root"));