import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../../actions/auth';

import Button from '../../components/Button';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    }
    this.login = this.login.bind(this);
  }

  login() {
    const {
      username,
      password,
    } = this.state;
    if (!username || !password) {
      alert('Username and password are requred to login!');
      return;
    }
    this.props.login(this.state)
      .then(() => {
        if (this.props.loginError) {
          alert('Invalid username or password');
          return;
        }
        window.location = '/';
      })
  }
  render() {
    return (
      <div className="login-container">
        <h3>Welcome to webshop control panel</h3>
        <input
          placeholder="Username"
          onChange={(e) => this.setState({ username: e.target.value })}
          type='text'
          value={this.state.username}
        />
        <input
          placeholder="Password"
          onChange={(e) => this.setState({ password: e.target.value })}
          type='password'
          value={this.state.password}
        />
        <Button
          onClick={this.login}
        >
          Log in
        </Button>
      </div>
    )
  }
}

function stateToProps(state) {
  return {
    loginError: state.auth.loginError
  };
}

function dispatchToProps(dispatch) {
  return bindActionCreators({
    login,
  }, dispatch)
}

export default connect(stateToProps, dispatchToProps)(Login);
