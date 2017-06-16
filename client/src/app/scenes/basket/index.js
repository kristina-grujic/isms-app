import React, { Component } from 'react';
import CartCard from './CartCard';

class Basket extends Component {
  render() {
    return (
      <div className="basket">
        <h3>Your cart</h3>
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
      </div>
    )
  }
}

export default Basket;
