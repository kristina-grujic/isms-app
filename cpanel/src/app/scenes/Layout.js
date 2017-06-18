import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

class Layout extends Component {
  componentDidMount() {
    let loggedIn = localStorage.getItem('current_user');
    if (!loggedIn && this.props.location.pathname!=='/login') {
      this.props.router.push('login');
    }
  }
  render() {
    if (this.props.location.pathname==='/login') {
      return (
        <div>
          { this.props.children }
        </div>
      )
    }
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

export default Layout;
