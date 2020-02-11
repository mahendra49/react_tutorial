import React, { Component } from 'react';

export default function Hoc(WrapComponent, data) {
    return class extends Component {
        constructor(props) {
            super(props)
            this.state = {
                data: data
            }
        }
        render() {
            return (
                <WrapComponent persons={this.state.data} {...this.props} />
            );
        }
    }
}