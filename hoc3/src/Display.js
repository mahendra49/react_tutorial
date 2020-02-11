import React, { Component } from 'react';

class Display extends Component {
    constructor() {
        super();
        this.draw = this.draw.bind(this);
    }
    draw() {
        return this.props.persons.map((obj, i) => <Show person={obj} key={i} />);
    }
    render() {
        return (
            <div>
                {this.draw()}
            </div>
        );
    }
}

class Show extends Component {
    render() {
        return (
            <div>
                <b>{this.props.person.id}</b>
                <b>{this.props.person.name}</b>
            </div>
        );
    }
}
export default Display;