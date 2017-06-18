import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <div className="button"
        onClick={this.props.onClick}
      >
        <h3>{this.props.children}</h3>
      </div>
    )
  }
}

export default Button
