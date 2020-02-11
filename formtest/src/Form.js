import React, { Component } from 'react';

class Form extends Component {
    state = {
        firstName: "",
        lastName: "",
        userEmail: ""
    }
    handle(e) {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value }, function () {
            console.log(this.state);
        });

    }
    render() {
        return (
            <div>
                <form>
                    <input type="text" name="firstName" placeholder="firstname" value={this.state.firstName} onChange={e => this.handle(e)} /><br />
                    <input type="text" name="lastName" placeholder="lastName" value={this.state.lastName} onChange={e => this.handle(e)} /><br />
                    <input type="text" name="userEmail" placeholder="userEmail" value={this.state.userEmail} onChange={e => this.handle(e)} /><br />
                </form>
            </div>
        );
    }
}
export default Form;