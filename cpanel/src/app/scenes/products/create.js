import React, { Component } from 'react';
import EventEmitter from 'events';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getCategories,
} from '../../actions/categories';
import {
  createProduct,
} from '../../actions/products';

class renderModal extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      name: '',
      description: '',
      values: {},
      creating: false,
      chosenCategory: undefined,
    };
    this.openModal = this.openModal.bind(this);
    this.handleCloseModal= this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.state.name) {
      alert('Name is required!');
      return;
    }
    const product = this.state;
    this.setState({ creating: true });
    product.categoryId = product.chosenCategory.id;
    this.props.createProduct(product)
      .then(() => {
        this.setState({ creating: false });

      })
  }

  componentDidMount() {
    EventEmitter.prototype.addListener('add-product-modal-open', this.openModal);
  }

  componentWillUnmount() {
    EventEmitter.prototype.removeListener('add-product-modal-open', this.openModal);
  }

  openModal() {
    this.props.getCategories()
      .then(() => {
        this.setState({
          open: true,
          name: '',
          description: '',
          chosenCategory: undefined,
          values: {},
        });
      })
  }

  closeModal() {
    this.setState({
      open: false,
      name: '',
      description: '',
      chosenCategory: undefined,
      values: {},
    });
  }

  renderForm() {
    return (
        <div className="login-container">
            <input
              onChange={(e) => this.setState({ name: e.target.value })}
              placeholder="Product name"
              type="text"
            />
            {
              this.state.chosenCategory.values.map((value) => {
                return (
                  <input key={value.id}
                    onChange={() => {
                      let values = this.state.values;
                      values[value.name] = event.target.value
                      this.setState({ values });
                    }}
                    placeholder={value.name}
                    type="text"
                  />
                )
              })
            }
            <textarea
              onChange={(e) => this.setState({ description: e.target.value })}
              placeholder="Description"
            />
            <div className="button wide-button"
              onClick={this.state.creating ? null : this.handleSubmit}
            >
              <h3>{ this.state.creating ? "Creating ... " : 'Create product' }</h3>
            </div>
        </div>
    )
  }

  chooseCategory() {
    return (
      <div>
        <table className="list-table">
          <tbody>
            <tr>
              <th>Name</th>
            </tr>
            {
              this.props.categories.map((category) => {
                return (
                  <tr key={category.id}
                    onClick={() => {
                      this.setState({ chosenCategory: category });
                    }}
                    style={{cursor: 'pointer'}}
                  >
                    <td>{category.name}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }

  render() {
    return (
      <Modal isOpen={this.state.open}
        onRequestClose={this.handleCloseModal}
        overlayClassName="modal-overlay"
      >
          {
            this.state.chosenCategory ?
              this.renderForm()
              :
              this.chooseCategory()
          }
      </Modal>
    )
  }
}

function stateToProps(state) {
  return {
    categories: state.categories.categories,
    createError: state.products.createError,
  }
}

function dispatchToProps(dispatch) {
  return bindActionCreators({
    getCategories,
    createProduct,
  }, dispatch)
}

export default connect(stateToProps, dispatchToProps)(renderModal);
