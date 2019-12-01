import React, { Component } from 'react';
import {connect} from 'react-redux';
import {login, logout, attemptLogin} from '../../redux/redux';
import './navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "Try 'Richmond Hotels'",
    }
  }
  
  handleChange = (e) => {
    this.setState({
      searchValue: e.target.value,
    })
  }

  login = () => {
    this.props.attemptLogin();
  }

  logOut = () => {
    this.props.logout();
  }

  render() {
    const {
      loggedIn,
      username,
    } = this.props;

    const loggedInNav = loggedIn && (username !== '') ? (
      <ul id="navList">
        <li><p>Become a host</p></li>
        <li><p>Saved</p></li>
        <li><p>Trips</p></li>
        <li><p>Messages</p></li>
        <li><p>Help</p></li>
        <li><img onClick={this.logOut} src="" alt="" id="avatar"/></li>
      </ul>
    ) : (
      <ul id="navList">
        <li><p>English</p></li>
        <li><p>USD</p></li>
        <li><p>Become a host</p></li>
        <li><p>Help</p></li>
        <li><p>Sign up</p></li>
        <li><button onClick={this.login}>Log in</button></li>
      </ul>
    )

    return (
      <>
        <div className="navContainer">
          <div className="navbox">
            <i className="fab fa-airbnb fa-3x"></i>
            <input id="siteSearch" onChange={this.handleChange} value={this.state.searchValue}/>
            {loggedInNav}
          </div>
        </div>
      </>
    )
  }
}

const actionCreators = {
  logout: logout,
  login: login,
  attemptLogin,
};

const mapStateToProps = (state) => ({
  loggedIn: state.loggedIn,
  username: state.username,
})

export default connect(mapStateToProps, actionCreators)(Navbar);
