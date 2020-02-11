import React, { Component } from 'react';

class TestTwo extends Component {
    render() {
        return (
            <div>
                <h1>This is TestTwo:Export by named value</h1>
            </div>
        );
    }
}

export { TestTwo as MyTestTwo };
