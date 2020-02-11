import React, { Component } from 'react';

class User extends Component {
    render() {
        return (
            <h1>I am {this.props.uname} good</h1>
        );
    }
}

export default User;