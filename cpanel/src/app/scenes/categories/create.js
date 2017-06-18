import React, { Component } from 'react';
import EventEmitter from 'events';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  createCategory,
} from '../../actions/categories';

class renderModal extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      name: '',
      creating: false,
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
    EventEmitter.prototype.addListener('add-category-modal-open', this.openModal);
  }

  componentWillUnmount() {
    EventEmitter.prototype.removeListener('add-category-modal-open', this.openModal);
  }

  openModal() {
    this.setState({
      open: true,
      name: ''
    });
  }

  closeModal() {
    this.setState({
      open: false
    });
  }

  renderForm() {
    return (
        <div className="login-container">
            <input
              onChange={(e) => this.setState({ name: e.target.value })}
              placeholder="Category name"
              type="text"
            />
            <div className="button wide-button"
              onClick={this.state.creating ? null : this.handleSubmit}
            >
              <h3>{ this.state.creating ? "Creating ... " : 'Create category' } </h3>
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
    createCError: state.categories.createCError,
  }
}

function dispatchToProps(dispatch) {
  return bindActionCreators({
    createCategory,
  }, dispatch)
}

export default connect(stateToProps, dispatchToProps)(renderModal);
