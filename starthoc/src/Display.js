import React, { Component } from 'react';

class Display extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.person.id}</h1>
                <h1>{this.props.person.name}</h1>
            </div>
        );
    }
}
export default Display;