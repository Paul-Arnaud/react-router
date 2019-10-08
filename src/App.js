import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import Home from './Components/Home';
import History from './Components/History';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <nav className="App-nav">  
          < NavLink exact to="/"> Home </NavLink>
            <NavLink to="/notre-histoire"> History </NavLink>
          </nav> 
          <Switch>
            <div className="App-content">
              <Route exact path="/" component={Home} />
              <Route path="/notre-histoire" component={History} />
            </div>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
