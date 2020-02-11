import React, { Component } from 'react';
import TestOne from './testone';
import { MyTestTwo } from './testtwo';

class App extends Component {
  render() {
    return (
      <div>
        <TestOne />
        <MyTestTwo />
      </div>
    );
  }
}

export default App;
