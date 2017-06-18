import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getCategories,
} from '../../actions/categories';

class Categories extends Component {
  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    return (
      <div className="cards">
        <h3>Categories</h3>
        <div className="button add-button"
        >
          <h3>Add category</h3>
        </div>
        <table className="list-table">
          <tbody>
            <tr>
              <th>Name</th>
              <th></th>
            </tr>
            {
              this.props.categories.map((category) => {
                return (
                  <tr key={category.id}>
                    <td>{category.name}</td>
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
    categories: state.categories.categories,
  };
}

function dispatchToProps(dispatch) {
  return bindActionCreators({
    getCategories,
  }, dispatch)
}

export default connect(stateToProps, dispatchToProps)(Categories)
