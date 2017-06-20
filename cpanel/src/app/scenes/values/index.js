import React, { Component } from 'react';
import { EventEmitter } from 'events';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  chooseCategory,
} from '../../actions/categories';
import {
  deleteValue,
} from '../../actions/values';

import CreateModal from './create';
import EditModal from './edit';

class Values extends Component {
  componentDidMount() {
    if (!this.props.chosenCategory) {
      this.props.router.replace('/categories');
    }
  }

  render() {
    return (
      <div className="cards">
        <div className="button super-wide-button"
          onClick={() => {
            this.props.chooseCategory(undefined);
            this.props.router.replace('/categories');
          }}
        >
          <h3>Back to category list</h3>
        </div>
        <h3>
          {
            `Fields - ${
              this.props.chosenCategory ?
                this.props.chosenCategory.name
                :
                ''
              }
            `
          }
        </h3>
        <div className="button add-button"
          onClick={() => EventEmitter.prototype.emit('add-value-modal-open')}
        >
          <h3>Add field</h3>
        </div>
        <table className="list-table">
          <tbody>
            <tr>
              <th>Name</th>
              <th></th>
            </tr>

            {
              this.props.values.length ?
                null
                :
                <tr>
                  <td><h3>No fields</h3></td>
                  <td/>
                </tr>
            }
            {
              this.props.values.map((value) => {
                return (
                  <tr key={value.id}>
                    <td>{value.name}</td>
                    <td style={{float: 'right'}}>
                      <button
                        onClick={() => EventEmitter.prototype.emit('edit-value-modal-open', value)}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          const result = confirm('Are you sure you want to delete this field?');
                          if (result) {
                            this.props.deleteValue({
                              valueId: value.id,
                            })
                              .then(() => {
                                if (this.props.deleteError) {
                                  alert('There was an error deleting field!');
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
    chosenCategory: state.categories.chosenCategory,
    values: state.categories.chosenCategory ? state.categories.chosenCategory.values || [] : [],
    deleteError: state.values.deleteError,
  };
}

function dispatchToProps(dispatch) {
  return bindActionCreators({
    chooseCategory,
    deleteValue,
  }, dispatch)
}

export default connect(stateToProps, dispatchToProps)(Values)
