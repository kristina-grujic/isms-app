import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    if (this.props.location.pathname==='/cart') {
      return <div />
    }
    return (
      <div className="sidebar">
        <ul id="categories">
          <li>
            <a href='#'>Category 1</a>
          </li>
          <li>
            <a href='#'>Category 2</a>
          </li>
          <li>
            <a href='#'>Category 3</a>
          </li>
          <li>
            <a href='#'>Category 4</a>
          </li>
          <li>
            <a href='#'>Category 5</a>
          </li>
          <li>
            <a href='#'>Category 6</a>
          </li>
          <li>
            <a href='#'>Category 7</a>
          </li>
          <li>
            <a href='#'>Category 8</a>
          </li>
          <li>
            <a href='#'>Category 9</a>
          </li>
          <li>
            <a href='#'>Category 10</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Sidebar
