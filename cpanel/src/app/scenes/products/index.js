import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from './Card';

class Home extends Component {
  render() {
    return (
      <div className="cards">
        <h3>List all cards here</h3>
      </div>
    )
  }
}

function stateToProps(state) {
  return state;
  // return {
  //   products: state.products.products,
  // };
}

export default connect(stateToProps)(Home)
