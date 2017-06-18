import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getProducts,
  setQuery,
} from '../../actions/products';

class SearchBox extends Component {

  componentDidMount() {
    this.props.getProducts();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.query !== nextProps.query) {
      this.props = nextProps;
      this.props.getProducts(this.props.query);
    }
  }

  render() {
    return (
      <div className="searchbox">
        <input
          onChange={(event) => this.props.setQuery(event.target.value)}
          type="text"
          value={this.props.query}
        />
      </div>
    )
  }
}

function stateToProps(state) {
  return {
    query: state.products.query
  };
}

function dispatchToProps(dispatch) {
  return bindActionCreators({
    getProducts,
    setQuery,
  }, dispatch)
}

export default connect(stateToProps, dispatchToProps)(SearchBox)
