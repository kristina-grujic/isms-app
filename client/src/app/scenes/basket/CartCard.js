import React, { Component } from 'react';

class CartCard extends Component {
  render() {
    return (
      <div className="cart-card">
        <div className="image-wrapper">
          <img src="https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg" />
        </div>
        <div>
          <h3>Title</h3>
          <p><strong>Quantity: </strong>5</p>
          <h3 id="price"><strong>Price: </strong> 5 x 1.99$</h3>
        </div>
      </div>
    )
  }
}

export default CartCard;
