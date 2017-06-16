import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

class Layout extends Component {
  render() {
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
