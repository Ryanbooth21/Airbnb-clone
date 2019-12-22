import React, { Component } from 'react';
import {connect} from 'react-redux';
import Experiences from './components/experiences/experiences';
import Helpbar from './components/help/helpbar';
import ContinueSearch from './components/continuesearch/continuesearch';
import { BrowserRouter, withRouter } from 'react-router-dom';
import './App.css';

class App extends Component {

  componentDidMount() {
    
  }
  
  render() {
    const {
      loggedIn,
      username,
      searchTerms
    } = this.props

    return (
          <div className="App">
            <Helpbar
              loggedIn={loggedIn}
              username={username} 
            />
            <ContinueSearch 
              searchTerms={searchTerms}
            />
            <Experiences />
          </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedIn: state.loggedIn,
  username: state.username,
  loggingIn: state.loggingIn,
  searchTerms: state.searchTerms,
})

export default withRouter(connect(mapStateToProps)(App));

