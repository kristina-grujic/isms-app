import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getCategories,
} from '../../actions/categories';

class Sidebar extends Component {
  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    if (this.props.location.pathname==='/cart') {
      return <div />
    }
    return (
      <div className="sidebar">
        <ul id="categories">
          {
            this.props.categories.map((category) => {
              return (
                <li
                  key={category.id}
                  onClick={(e) => {
                    e.preventDefault();
                    this.props.router.push(`category/${category.id}`);
                  }}
                >
                  <a href='#'>{category.name}</a>
                </li>
              )
            })
          }
        </ul>
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

export default connect(stateToProps, dispatchToProps)(Sidebar)
