import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Express from './Express';
import Navbar from './Navbar';
import Node from './Node';
import ReactJs from './ReactJs';
import Redux from './Redux';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div>
            <Switch>
              <Route path="/react" component={ReactJs} />
              <Route path="/node" component={Node} />
              <Route path="/express" component={Express} />
              <Route path="/redux" component={Redux} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>

    );
  }
}

export default App;
