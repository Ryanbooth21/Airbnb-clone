import React, { Component } from 'react';
import Navbar from './components/navbar/navbar';
import LoginModal from './components/login/loginModal';
import App from './App';
import PlacesToStay from './components/homes/placestostay';
import SingleHome from './components/singlehome/singlehome';
import { BrowserRouter as Router, Switch, Route, HashRouter } from 'react-router-dom';

import './App.css';

class AppRouter extends Component {
  render(){
    return (
      <Router basename="/Airbnb-clone">
        <Navbar />
        <Switch>
          <Route path="/Airbnb-clone" component={App} />
          <Route path="/login" component={LoginModal} />
          <Route path="/homes" exact component={PlacesToStay} />
          <Route path="/homes/:id" component={SingleHome} />
          <Route path="/" component={App}/>
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;