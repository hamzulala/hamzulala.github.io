import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import EditTeam from './components/EditTeam'
import ViewTeam from './components/ViewTeam'
class App extends Component {
  render() {
    return (
      <Router>
      <div className="myClass">
        <div className="Navigation">
        </div>
        <Route exact path="/" component={Home} />
        <Route path="/EditTeam/:team" component={EditTeam} />
        <Route path="/ViewTeam/:team" component={ViewTeam} />
      </div>
      </Router>
    );
  }
}

export default App;
