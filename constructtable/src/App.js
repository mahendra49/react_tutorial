import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "This is good"
    };
  }
  render() {
    return (
      <div>
        <SiteHeader info={this.state.message} />
      </div>
    );
  }
}
const SiteHeader = data => {
  return (
    <div>
      {console.log({ data })}
      <h1>{data.info}</h1>
    </div>
  );
};
export default App;
