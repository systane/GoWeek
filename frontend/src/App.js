import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

//Components
import Login from './pages/Login/Login';
import Timeline from './pages/Timeline/Timeline';
import Home from './pages/Home/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/timeline" component={Timeline}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
