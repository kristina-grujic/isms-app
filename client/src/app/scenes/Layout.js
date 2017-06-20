import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

class Layout extends Component {
  componentDidMount() {
    let loggedIn = localStorage.getItem('current_user');
    const path = this.props.location.pathname;
    if (loggedIn) {
      switch (path) {
        case '/login':
        case 'login':
        case 'sign_up':
        case '/sign_up':
          this.props.router.replace('/');
          break;
        default:
          break;
      }
    }
  }

  render() {
    const path = this.props.location.pathname
    switch (path) {
      case '/login':
      case 'login':
      case 'sign_up':
      case '/sign_up': {
        return (
          <div>
            <Header location={this.props.location}
              router={this.props.router}
            />
            { this.props.children }
          </div>
        )
      }
      default: {
        return (
          <div>
            <Header location={this.props.location}
              router={this.props.router}
            />
            <Sidebar location={this.props.location}
              router={this.props.router}
            />
            <div>
              { this.props.children }
            </div>
          </div>
        )
      }
    }
  }
}

export default Layout;
