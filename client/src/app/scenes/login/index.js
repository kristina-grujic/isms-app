import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../../actions/auth';

import Button from '../../components/Button';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    }
    this.login = this.login.bind(this);
  }

  login() {
    const {
      email,
      password,
    } = this.state;
    if (!email || !password) {
      alert('Username and password are requred to login!');
      return;
    }
    this.props.login(this.state)
      .then(() => {
        if (this.props.loginError) {
          alert('Invalid username or password');
          return;
        }
        this.props.router.replace('/');
      })
  }
  render() {
    return (
      <div className="cards">
        <h3>Welcome to webshop control panel</h3>
        <input
          onChange={(e) => this.setState({ email: e.target.value })}
          type='text'
          value={this.state.email}
        />
        <input
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
