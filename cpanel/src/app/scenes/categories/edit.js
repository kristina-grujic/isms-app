import React, { Component } from 'react';
import EventEmitter from 'events';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  editCategory,
} from '../../actions/categories';

class renderModal extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      name: '',
      creating: false,
      category: undefined,
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

  }

  componentDidMount() {
    EventEmitter.prototype.addListener('edit-category-modal-open', this.openModal);
  }

  componentWillUnmount() {
    EventEmitter.prototype.removeListener('edit-category-modal-open', this.openModal);
  }

  openModal(category) {
    this.setState({
      open: true,
      name: category.name,
      category: category,
    });
  }

  closeModal() {
    this.setState({
      open: false,
      name: '',
      category: undefined,
    });
  }

  renderForm() {
    return (
        <div className="login-container">
            <input
              onChange={(e) => this.setState({ name: e.target.value })}
              placeholder="Category name"
              type="text"
              value={this.state.name}
            />
            <div className="button wide-button"
              onClick={this.state.creating ? null : this.handleSubmit}
            >
              <h3>{ this.state.creating ? "Editing ... " : 'Edit category' } </h3>
            </div>
        </div>
    )
  }

  render() {
    return (
      <Modal isOpen={this.state.open}
        onRequestClose={this.handleCloseModal}
        overlayClassName="modal-overlay"
      >
          { this.renderForm() }
      </Modal>
    )
  }
}

function stateToProps(state) {
  return {
    editCError: state.categories.editCError,
  }
}

function dispatchToProps(dispatch) {
  return bindActionCreators({
    editCategory,
  }, dispatch)
}

export default connect(stateToProps, dispatchToProps)(renderModal);
