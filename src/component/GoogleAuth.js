import React from 'react';
import { connect } from 'react-redux';
import { signIn , signOut } from '../actions';


class GoogleAuth extends React.Component {

	componentDidMount(){
		window.gapi.load('client:auth2' , ()=> {
			window.gapi.client
			.init({
				clientId : '350846909990-j29niu3lo43sauuc2hd12vl2arv4afp2.apps.googleusercontent.com',
				scope:'email'
			}).then(()=> {
				this.auth = window.gapi.auth2.getAuthInstance();
				//this.setState({ isSignedIn : this.auth.isSignedIn.get() })
				this.onAuthChange(this.auth.isSignedIn.get());
				this.auth.isSignedIn.listen(this.onAuthChange);
			});
		});
	}

	//this is event listener to line 20
	onAuthChange = (isSignedIn) => {
		if (isSignedIn) {
			this.props.signIn(this.auth.currentUser.get().getId());
		}
		else{
			this.props.signOut(this.auth.currentUser.get().getId());
		}
	};

	onSignInClick = () => {
		this.auth.signIn();
	};

	onSignOutClick = () => {
		this.auth.signOut();	
	};

	renderAuthButton(){
		if(this.props.isSignedIn === null){
			return null;
		}
		else if(this.props.isSignedIn){
			return (
				<button className="ui red google button" onClick={this.onSignOutClick} >
					<i className="google icon"/>
					Signout
				</button>
			);
		}
		else{
			return (
				<button className="ui red google button" onClick={this.onSignInClick}>
					<i className="google icon"/>
					SignIn
				</button>
			);
		}
	}

	render(){

		return <div>{ this.renderAuthButton() }</div>;
	}
}


//state.auth.isSignedIn
//you get the value from redux store(state here) -> 
//then reducer (auth , see ./index.js)
//and finally the value(isSigned here)

const mapStateToProps = (state) => {
	return { isSignedIn : state.auth.isSignedIn  }
}

export default connect(mapStateToProps, 
	{ signIn, signOut }
	)(GoogleAuth);



