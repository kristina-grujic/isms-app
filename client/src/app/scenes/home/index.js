import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './Card';

class Home extends Component {
  render() {
    return (
      <div className="cards">
        <Card
          onClick={() => this.props.router.push('product')}
        />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    )
  }
}

export default connect(null, null)(Home)
