import React, { Component } from 'react';

class Card extends Component {
  render() {
    const { product } = this.props;
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
          <h3 id='title'>
            {product.name}
          </h3>
          <h2 id='price'>EUR { product.price || 0 }</h2>
          <p>
            {product.description}
          </p>
        </div>
      </div>
    )
  }
}

export default Card;
