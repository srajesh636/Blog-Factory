import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Express from './components/Express';
import Navbar from './components/Navbar';
import Node from './components/Node';
import ReactJs from './components/ReactJs';
import Redux from './components/Redux';
import Footer from './components/Footer';

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
