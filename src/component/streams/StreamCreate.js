import React from 'react';

//Field is a component..//reduxForm is a function
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {

	//To foucs the field if input field have some error
	//helper for renderInput //called with meta 
	//destructure it
	renderError({ error , touched}){
		if(touched && error){
			return(
				<div className="ui error message">
					<div className="header">{error}</div>
				</div>
			);
		}
	}


	//on arg here is formProps ..let's destructure it
	renderInput = ({ input, label, meta}) => {
		const className = `field ${meta.error && meta.touched ? 'error':''}`;
		//console.log(meta); //meta contains error object from validate
		return (
			<div className={className}>
				<label>{label}</label>
				<input {...input} autoComplete="off" />
				{ this.renderError(meta) }
			</div>
		);
	}

	onSubmit(formValues) {
		//console.log(formValues);
	}


	//label will be passes as props to component
	render() {
		return (
			<form  onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
				<Field name="title" 
					component={this.renderInput} 
					label="Enter title" 
				/>
				<Field name="description" 
					component={this.renderInput} 
					label="Enter Description" 
				/>
				<button className="ui button primary" >SUBMIT</button>
			</form>
		);
	}
}

//validate the form before submitting 
const validate = (formValues) => {
	const error = {};

	if(!formValues.title){
		error.title = 'you must enter a title';
	}

	if(!formValues.description){
		error.description = 'you must enter description';
	}
	return error;

};

//wire the validate to reduxForm..this will handle the form 
//for valifation before submitting
export default reduxForm({
	form: 'StreamCreate',
	validate:validate
})(StreamCreate);
