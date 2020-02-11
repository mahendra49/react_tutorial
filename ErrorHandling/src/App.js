import React, { Component } from 'react';

class FiveMax extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value })
  }

  render() {
    if (this.state.value.length > 5) {
      throw new Error('You cannot enter more than five characters!');
    }
    return (
      <div>
        <label>Type away: </label>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </div>
    );
  }
}
class Shield extends React.Component {
  constructor(props) {
    super(props);
    // Add some default error states
    this.state = {
      error: false,
      info: null,
    };
  }

  componentDidCatch(error, info) {
    // Something happened to one of my children.
    // Add error to state
    this.setState({
      error: error,
      info: info,
    });
  }

  render() {
    if (this.state.error) {
      // Some error was thrown. Let's display something helpful to the user
      return (
        <div>
          <h5>Sorry. More than five characters!</h5>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.info.componentStack}
          </details>
        </div>
      );
    }
    // No errors were thrown. As you were.
    console.log(this.props);
    return this.props.children;
  }
}
function App() {
  return (
    <div>
      <h3>Two children under one error boundary. If one crashes. Both are affected!</h3>
      <Shield>
        <FiveMax valu1="hai" />
      </Shield>
      <Shield>
        <FiveMax />
      </Shield>
    </div>
  );
}
export default App;

