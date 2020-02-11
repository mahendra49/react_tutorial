import React, { Component } from 'react';
import Hoccoun from './myhoc';

class HeaderInc extends Component {
    render() {
        return (
            <div>
                <h1 onMouseOver={this.props.incCounter}>Passed{this.props.count} times</h1>
            </div>
        );
    }
}
export default Hoccoun(HeaderInc);