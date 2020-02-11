import React, { Component } from 'react';
import UpdateHoc from './myhoc';
class HeaderInc extends Component {

    render() {
        return (
            <div>
                <h1 onMouseOver={this.props.countInc}>mouse Passed over header {this.props.count} times</h1>
            </div>
        );
    }
}

export default UpdateHoc(HeaderInc);