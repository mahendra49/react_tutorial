import React, { Component } from 'react';
import Hoc from './HOC';
import Display from './Display';

const userdata = { id: "1", name: "Ram" };

const USERDISPLAY = Hoc(Display, userdata);
class App extends Component {
  render() {
    return (
      <USERDISPLAY />
    );
  }
}

export default App;
