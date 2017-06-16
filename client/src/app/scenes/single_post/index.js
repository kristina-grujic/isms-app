import React, { Component } from 'react';

class Product extends Component {
  render() {
    return (
      <div className="cards">
        <div className="main-card">
          <div className="main-info-wrapper">
            <img src="https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg" />
            <div>
              <h3 id='title'>Title of product</h3>
              <h2 id='price'>Price in Euro</h2>
              <div className='cart-button-wrapper'>
                <h5>Quantity</h5>
                <input type='number' />
                <div className="button cart">
                  <h3>Add to cart</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="detailed-info-wrapper">
            <h3>Description</h3>
            <p>Short description Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h3>Details</h3>
            <ul>
              <li><strong>Size: </strong>40</li>
              <li><strong>Producer: </strong>Veleproduct</li>
              <li><strong>Size: </strong>40</li>
              <li><strong>Producer: </strong>Veleproduct</li>
              <li><strong>Size: </strong>40</li>
              <li><strong>Producer: </strong>Veleproduct</li>
              <li><strong>Size: </strong>40</li>
              <li><strong>Producer: </strong>Veleproduct</li>
              <li><strong>Size: </strong>40</li>
              <li><strong>Producer: </strong>Veleproduct</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Product;
