import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { id: "1", name: "Ram" },
        { id: "2", name: "Sam" },
        { id: "3", name: "Bam" },
        { id: "4", name: "Jam" }
      ]
    }

  }
  render() {
    return (
      <table border="1">
        <tbody>
          {this.state.data.map((obj, i) => <TableRow key={i} person={obj} />)}
        </tbody>
      </table>
    );
  }
}
class TableRow extends Component {
  render() {
    // console.log(key);
    return (
      <tr>
        <td>{this.props.person.id}</td>
        <td>{this.props.person.name}</td>
      </tr>
    );
  }
}
export default App;
