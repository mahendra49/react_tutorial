import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './contact';
import User from './user';
class App extends Component {
      render() {
            return (
                  <div>
                        <h1>This is all about routing</h1>
                        <Router>
                              <div>
                                    <ul>
                                          <li>
                                                <Link to="/">home</Link>
                                          </li>
                                          <li>
                                                <Link to="/about">about</Link>
                                          </li>
                                          <li>
                                                <Link to="/contact">contact</Link>
                                          </li>
                                          <li>
                                                <Link to="/user/ram">user</Link>
                                          </li>

                                    </ul>
                                    <Route path="/" exact strict component={Home} />
                                    <Route path="/about" exact strict component={About} />
                                    <Route path="/contact" exact strict component={Contact} />
                                    <Route path="/user/:username" exact strict render={({ match }) => {
                                          return (
                                                <User username={match.params.username} />
                                          );
                                    }} />
                              </div>
                        </Router>
                        <h1>This is footer</h1>
                  </div>
            );
      }
}

export default App;
