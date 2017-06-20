import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from './Card';

class Home extends Component {
  render() {
    return (
      <div className="cards">
        {
          this.props.products.length ?
            null
            :
            <h3>No results</h3>
        }
        {
          this.props.products.map((product) => {
            if (!product.category) return;
            return (
              <Card
                key={product.id}
                onClick={() => this.props.router.push(`/product/${product.id}`)}
                product={product}
              />
            )
          })
        }
      </div>
    )
  }
}

function stateToProps(state) {
  return {
    products: state.products.products,
  };
}

export default connect(stateToProps)(Home)
