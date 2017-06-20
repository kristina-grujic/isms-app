import React, { Component } from 'react';
import EventEmitter from 'events';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getCategories,
} from '../../actions/categories';
import {
  editProduct,
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
      product: undefined,
      price: '',
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
    product.productId = this.state.product.id;
    product.values = JSON.stringify(product.values);
    this.props.editProduct(product)
      .then(() => {
        this.setState({ creating: false });
        if (this.props.editError) {
          alert('There was an error Editing product!');
          return;
        }
        this.closeModal();
      })
  }

  componentDidMount() {
    EventEmitter.prototype.addListener('edit-product-modal-open', this.openModal);
  }

  componentWillUnmount() {
    EventEmitter.prototype.removeListener('edit-product-modal-open', this.openModal);
  }

  openModal(product) {
    this.props.getCategories()
      .then(() => {
        let chosenCategory;
        this.props.categories.map((category) => {
          if (product.categoryId === category.id) {
            chosenCategory = category;
          }
        })
        this.setState({
          open: chosenCategory ? true : false,
          name: product.name,
          description: product.description,
          chosenCategory: chosenCategory,
          values: product.values,
          product: product,
          price: product.price,
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
      product: undefined,
      price: '',
    });
  }

  renderForm() {
    return (
        <div className="login-container">
            <input
              onChange={(e) => this.setState({ name: e.target.value })}
              placeholder="Product name"
              type="text"
              value={this.state.name}
            />
            <input
              onChange={(e) => this.setState({ price: e.target.value })}
              placeholder="Price"
              type="number"
              value={this.state.price}
            />
            {
              this.state.chosenCategory.values.map((value) => {
                return (
                  <input key={value.id}
                    onChange={(event) => {
                      let values = this.state.values;
                      values[value.name] = event.target.value
                      this.setState({ values });
                    }}
                    placeholder={value.name}
                    type="text"
                    value={this.state.values[value.name]}
                  />
                )
              })
            }
            <textarea
              onChange={(e) => this.setState({ description: e.target.value })}
              placeholder="Description"
              value={this.state.description}
            />
            <div className="button wide-button"
              onClick={this.state.creating ? null : this.handleSubmit}
            >
              <h3>{ this.state.creating ? "Editing ... " : 'Edit product' }</h3>
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
              null
          }
      </Modal>
    )
  }
}

function stateToProps(state) {
  return {
    categories: state.categories.categories,
    editError: state.products.editError,
  }
}

function dispatchToProps(dispatch) {
  return bindActionCreators({
    getCategories,
    editProduct,
  }, dispatch)
}

export default connect(stateToProps, dispatchToProps)(renderModal);
