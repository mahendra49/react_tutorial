import React, { Component } from 'react';

class Display extends Component {
    render() {
        return (
            <div>
                {this.props.persons.map((person, i) => <TableDisplay person={person} key={i} />)}
            </div>
        );

    }
}
class TableDisplay extends Component {
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