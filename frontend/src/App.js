import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

//Components
import Login from './pages/Login';
import Timeline from './pages/Timeline';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/timeline" component={Timeline}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
