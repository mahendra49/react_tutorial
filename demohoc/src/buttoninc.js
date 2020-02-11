import React, { Component } from 'react';
import UpdateHoc from './myhoc';
class ButtonInc extends Component {

    render() {
        return (
            <div>
                <button onClick={this.props.countInc}>clicked {this.props.count} times</button>
            </div>
        );
    }
}

export default UpdateHoc(ButtonInc);