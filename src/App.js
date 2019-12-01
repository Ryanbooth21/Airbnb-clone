import React, { Component } from 'react';
import {connect} from 'react-redux';
import Navbar from './components/navbar/navbar';
import Helpbar from './components/help/helpbar';
import LoginModal from './components/login/loginModal';
import './App.css';

class App extends Component {
  render() {
    const {
      loggedIn,
      loggingIn,
      username
    } = this.props

    const viewToggle = loggingIn ? <LoginModal /> : (
      <>
        <Navbar />
        <Helpbar 
          loggedIn={loggedIn}
          username={username} 
        />
        <img src="https://a0.muscache.com/im/pictures/5725eb8d-2948-4c71-9149-4bfa7b3b3ee3.jpg" />
      </>
    );

    return (
      <div className="App">
        {viewToggle}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedIn: state.loggedIn,
  username: state.username,
  loggingIn: state.loggingIn,
})

export default connect(mapStateToProps)(App);

