import React, { Component } from 'react';
const Hoc = (WrapComp, data) => class extends Component {
    constructor() {
        super();
        this.state = {
            data: data
        }
    }
    render() {
        return (
            <WrapComp person={this.state.data}  {...this.props} />
        );
    }
}

export default Hoc;