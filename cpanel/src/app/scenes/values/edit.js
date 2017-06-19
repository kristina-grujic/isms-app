import React, { Component } from 'react';
import EventEmitter from 'events';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  editValue,
} from '../../actions/values';

class renderModal extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      name: '',
      creating: false,
      value: undefined,
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
    this.setState({ creating: true });
    this.props.editValue({
      valueId: this.state.value.id,
      name: this.state.name,
    })
      .then(() => {
        this.setState({ creating: false });
        if (this.props.editError) {
          alert('There was an error editing field!');
          return;
        }
        this.closeModal();
      });

  }

  componentDidMount() {
    EventEmitter.prototype.addListener('edit-value-modal-open', this.openModal);
  }

  componentWillUnmount() {
    EventEmitter.prototype.removeListener('edit-value-modal-open', this.openModal);
  }

  openModal(value) {
    this.setState({
      open: true,
      name: value.name,
      value: value,
    });
  }

  closeModal() {
    this.setState({
      open: false,
      name: '',
      value: undefined,
    });
  }

  renderForm() {
    return (
        <div className="login-container">
            <input
              onChange={(e) => this.setState({ name: e.target.value })}
              placeholder="Value name"
              type="text"
              value={this.state.name}
            />
            <div className="button wide-button"
              onClick={this.state.creating ? null : this.handleSubmit}
            >
              <h3>{ this.state.creating ? "Editing ... " : 'Edit field' } </h3>
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
    editError: state.values.editError,
  }
}

function dispatchToProps(dispatch) {
  return bindActionCreators({
    editValue,
  }, dispatch)
}

export default connect(stateToProps, dispatchToProps)(renderModal);
