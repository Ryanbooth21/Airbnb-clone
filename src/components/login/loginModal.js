import React, { Component } from 'react'
import {login, logout, attemptLogin} from '../../redux/redux';
import {connect} from 'react-redux';
import { withRouter } from "react-router-dom";
import './login.css';

class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    }
  }

  redirect = (e) => {
    e.preventDefault();
    this.props.logout();
		this.props.history.push('/');
  }

  handleLogin = (e) => {
    e.preventDefault();
    this.props.login(this.state.username);
    this.props.history.push('/');
  }
  
  handleChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleLogin}>
        <div class="formcontainer">
          <label for="uname"><b>Username</b></label>
          <input onChange={this.handleChange} type="text" placeholder="Enter Username" name="uname" required/>

          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required/>

          <button type="submit">Login</button>
          <label>
            <input type="checkbox" checked="checked" name="remember"/> Remember me
          </label>
        </div>

        <div class="formcontainer" style={{backgroundColor:"#f1f1f1"}}>
          <button type="button" class="cancelbtn" onClick={()=>this.props.logout(), this.redirect}>Cancel</button>
          <span class="psw">Forgot <a href="#">password?</a></span>
        </div>
      </form>
    )
  }
}


const actionCreators = {
  logout: logout,
  login: login,
  attemptLogin,
};

const mapStateToProps = (state) => ({
  loggingIn: state.loggingIn,
  loggedIn: state.loggedIn,
  username: state.username,
})

export default connect(mapStateToProps, actionCreators)(LoginModal);
