import React, { Component } from 'react';
import Hoccoun from './myhoc';

class ButtonInc extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.incCounter}>Clicked {this.props.count} times</button>
            </div>
        );
    }
}
export default Hoccoun(ButtonInc);