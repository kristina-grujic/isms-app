import React, { Component } from 'react';
import { EventEmitter } from 'events';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getCategories,
  deleteCategory,
} from '../../actions/categories';

import CreateModal from './create';
import EditModal from './edit';

class Categories extends Component {
  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    return (
      <div className="cards">
        <h3>Categories</h3>
        <div className="button add-button"
          onClick={() => EventEmitter.prototype.emit('add-category-modal-open')}
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
                      <button
                        onClick={() => EventEmitter.prototype.emit('edit-category-modal-open', category)}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          const result = confirm('Are you sure you want to delete this category?');
                          if (result) {
                            this.props.deleteCategory({
                              categoryId: category.id,
                            })
                              .then(() => {
                                if (this.props.deleteError) {
                                  alert('There was an error deleting category!');
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
    categories: state.categories.categories,
    deleteError: state.categories.deleteError,
  };
}

function dispatchToProps(dispatch) {
  return bindActionCreators({
    getCategories,
    deleteCategory,
  }, dispatch)
}

export default connect(stateToProps, dispatchToProps)(Categories)
