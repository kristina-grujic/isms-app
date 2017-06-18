import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getProducts,
} from '../../actions/products';

class Products extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    return (
      <div className="cards">
        <h3>Products</h3>
        <div className="button add-button"
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
              this.props.products.map((product) => {
                return (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.category.name}</td>
                    <td style={{float: 'right'}}>
                      <button>Edit</button>
                      <button>Delete</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

function stateToProps(state) {
  return {
    products: state.products.products,
  };
}

function dispatchToProps(dispatch) {
  return bindActionCreators({
    getProducts,
  }, dispatch)
}

export default connect(stateToProps, dispatchToProps)(Products)
