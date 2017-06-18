import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <ul id="categories">
          <li>
            <a href='/'>Products</a>
          </li>
          <li>
            <a href='categories'>Categories</a>
          </li>
          <li>
            <a href='#'>Orders</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Sidebar
