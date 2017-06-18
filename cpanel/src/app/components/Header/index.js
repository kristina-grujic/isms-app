import React, { Component } from 'react';
import Button from '../Button';
import FontAwesome from 'react-fontawesome';


class Header extends Component {
  componentDidMount() {
    this.me = localStorage.getItem('logged_in');
  }

  render() {
    return (
      <div>
        <header className="header">
          <div className="header-searchbox">
            <h3 id="title">{ "WebShop" }</h3>
          </div>
          <div className="header-buttons">
            <Button>Log out</Button>
          </div>
        </header>
      </div>
    )
  }
}

export default Header;
