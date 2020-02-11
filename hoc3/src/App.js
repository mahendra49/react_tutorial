import React, { Component } from 'react';
import Hoc from './HOC';
import Display from './Display';
const userdata = [
  { id: "1", name: "Ram" },
  { id: "2", name: "Sam" },
  { id: "3", name: "Jam" },
  { id: "4", name: "Bam" }
]
const DISPLAYUSER = Hoc(Display, userdata);
class App extends Component {
  render() {
    return (
      <DISPLAYUSER />
    );
  }
}
export default App;
