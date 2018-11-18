import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

//Components
import Login from './pages/Login/Login';
import Timeline from './pages/Timeline/Timeline';
import SignUpModal from './pages/SignUpModal/SignUpModal';
import Home from './pages/Home/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/Login" component={Login}/>
          <Route path="/Timeline" component={Timeline}/>
          <Route path="/SignUp" component={SignUpModal}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
