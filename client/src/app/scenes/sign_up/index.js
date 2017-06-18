import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sign_up } from '../../actions/auth';

import Button from '../../components/Button';

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
    }
    this.signup = this.signup.bind(this);
  }

  signup() {
    const {
      name,
      email,
      password,
    } = this.state;
    if (!name || !email || !password) {
      alert('Name, email and password are required!');
      return;
    }
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
      alert('Email is not valid!');
      return;
    }
    this.props.sign_up(this.state)
      .then(() => {
        if (this.props.loginError) {
          // alert('Invalid username or password');
          return;
        }
        this.props.router.replace('/');
      })
  }
  render() {
    return (
      <div className="login-container">
        <input
          placeholder="Name"
          onChange={(e) => this.setState({ name: e.target.value })}
          type='text'
          value={this.state.name}
        />
        <input
          placeholder="Email"
          onChange={(e) => this.setState({ email: e.target.value })}
          type='email'
          value={this.state.email}
        />
        <input
          placeholder="Password"
          onChange={(e) => this.setState({ password: e.target.value })}
          type='password'
          value={this.state.password}
        />
        <Button
          onClick={this.signup}
        >
          Register
        </Button>
      </div>
    )
  }
}

function stateToProps(state) {
  return {
    signupError: state.auth.signupError
  };
}

function dispatchToProps(dispatch) {
  return bindActionCreators({
    sign_up,
  }, dispatch)
}

export default connect(stateToProps, dispatchToProps)(Signup);
