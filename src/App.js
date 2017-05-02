import React, { Component } from 'react';
import {BrowserRouter, NavLink, Route, Switch} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

class Step1 extends Component {
  render() {
    return (
      <h2>Step1</h2>
    );
  }
}

class Step2 extends Component {
  render() {
    return (
      <h2>Step2</h2>
    );
  }
}

class NavMenu extends Component {
  render() {
    return (
      <nav className="nav-menu">
        <NavLink to="/step-1">Step 1</NavLink>
        <NavLink to="/step-2">Step 2</NavLink>
      </nav>
    );
  }
}

class NextPrev extends Component {
  render() {
    return (
      <div className="next-prev">
        <button className="prev">Prev</button>
        <button className="next">Next</button>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
          </div>

          <NavMenu/>

          <Switch>
            <Route path="/step-1" component={Step1} />
            <Route path="/step-2" component={Step2} />
            <Route render={() => <h2>Page Not Found</h2>}/>
          </Switch>

          <button>Make Complete</button>

          <NextPrev/>
        </div>
      </BrowserRouter>
    );
  }
}



export default App;
