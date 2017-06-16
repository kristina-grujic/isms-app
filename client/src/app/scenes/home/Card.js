import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className="card-wrapper"
        onClick={this.props.onClick}
      >
        <div className="card">
          <div id="image">
            <img src="https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg" />
            <div className="view-card-offer">
              <h3>View details...</h3>
            </div>
          </div>
          <h3 id='title'>Title of product</h3>
          <h2 id='price'>Price in Euro</h2>
          <p>Short description Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    )
  }
}

export default Card;
