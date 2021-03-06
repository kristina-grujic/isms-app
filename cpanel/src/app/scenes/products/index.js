import React, { Component } from 'react';
import { EventEmitter } from 'events';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { filter } from 'lodash';
import {
  getProducts,
  deleteProduct,
} from '../../actions/products';
import CreateModal from './create';
import EditModal from './edit';

class Products extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    return (
      <div className="cards">
        <h3>Products</h3>
        <div className="button add-button"
          onClick={() => EventEmitter.prototype.emit('add-product-modal-open')}
        >
          <h3>Add product</h3>
        </div>
        <table className="list-table">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th></th>
            </tr>

            {
              this.props.products.length ?
                null
                :
                <tr>
                  <td><h3>No products</h3></td>
                  <td />
                  <td />
                </tr>
            }
            {
              this.props.products.map((product) => {
                return (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.category.name}</td>
                    <td style={{float: 'right'}}>
                      <button
                        onClick={() => EventEmitter.prototype.emit('edit-product-modal-open', product)}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          const result = confirm('Are you sure you want to delete this product?');
                          if (result) {
                            this.props.deleteProduct({
                              productId: product.id,
                            })
                              .then(() => {
                                if (this.props.deleteError) {
                                  alert('There was an error deleting product!');
                                  return;
                                }
                              });
                          }
                        }}

                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        <CreateModal />
        <EditModal />
      </div>
    )
  }
}

function stateToProps(state) {
  return {
    products: state.products.products,
    deleteError: state.products.deleteError,
  };
}

function dispatchToProps(dispatch) {
  return bindActionCreators({
    getProducts,
    deleteProduct,
  }, dispatch)
}

export default connect(stateToProps, dispatchToProps)(Products)
