import React, { Component } from 'react';
import {connect} from 'react-redux';
import Navbar from './components/navbar/navbar';
import Helpbar from './components/help/helpbar';
import ContinueSearch from './components/continuesearch/continuesearch';
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
            <img src="https://a0.muscache.com/im/pictures/5725eb8d-2948-4c71-9149-4bfa7b3b3ee3.jpg" />
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

export default connect(mapStateToProps)(App);

