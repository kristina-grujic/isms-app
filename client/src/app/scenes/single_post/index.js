import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { keys } from 'lodash';
import {
  getProduct,
} from '../../actions/products';

class Product extends Component {
  componentWillMount() {
    let id = this.props.location.pathname.split('/');
    id = id[id.length - 1];
    this.props.getProduct(id)
      .then(() => {
        if (!this.props.currentProduct) {
          this.props.router.replace('/');
        }
      })
  }

  render() {
    if (!this.props.currentProduct) {
      return (
        <div className="cards">
        </div>
      )
    }
    const product = this.props.currentProduct;
    return (
      <div className="cards">
        <div className="main-card">
          <div className="main-info-wrapper">
            <img src="https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg" />
            <div>
              <h3 id='title'>
                {product.name}
              </h3>
              <h2 id='price'>
                {product.price}
              </h2>
              <div className='cart-button-wrapper'>
                <h5>Quantity</h5>
                <input type='number' />
                <div className="button cart">
                  <h3>Add to cart</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="detailed-info-wrapper">
            <h3>Description</h3>
            <p>{ product.description || '/' }</p>
            <h3>Details</h3>
            <ul>
              {
                keys(product.values).length ?
                  null
                  :
                  <li>{'/'}</li>
              }
              {
                keys(product.values).map((valueName) => {
                  return (
                    <li key={valueName}>
                      <strong>{`${valueName}: `}</strong>
                      { product.values[valueName] }
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

function stateToProps(state) {
  return {
    currentProduct: state.products.currentProduct,
  }
}

function dispatchToProps(dispatch) {
  return bindActionCreators({
    getProduct,
  }, dispatch);
}

export default connect(stateToProps, dispatchToProps)(Product);
