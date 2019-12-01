import React, { Component } from 'react'
import {login, logout, attemptLogin} from '../../redux/redux';
import {connect} from 'react-redux';
import './login.css';

class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    }
  }
  
  handleChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  render() {
    return (
      <>
      <form onSubmit={()=>this.props.login(this.state.username)}>
        <div class="container">
          <label for="uname"><b>Username</b></label>
          <input onChange={this.handleChange} type="text" placeholder="Enter Username" name="uname" required/>

          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required/>

          <button type="submit">Login</button>
          <label>
            <input type="checkbox" checked="checked" name="remember"/> Remember me
          </label>
        </div>

        <div class="container" style={{backgroundColor:"#f1f1f1"}}>
          <button type="button" class="cancelbtn" onClick={()=>this.props.logout()}>Cancel</button>
          <span class="psw">Forgot <a href="#">password?</a></span>
        </div>
      </form>
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
  loggingIn: state.loggingIn,
  loggedIn: state.loggedIn,
  username: state.username,
})

export default connect(mapStateToProps, actionCreators)(LoginModal);
