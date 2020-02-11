import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './contact';
import User from './user';
import Menu from './menu'
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Menu />
          <Route path="/" exact strict component={Home} />
          <Route path="/about" exact strict component={About} />
          <Route path="/contact" exact strict component={Contact} />
          <Route path="/user/:username" exact strict render={({ match }) => {
            return (
              <User uname={match.params.username} />
            );
          }} />
        </Router>
      </div>
    );
  }
}
export default App;
