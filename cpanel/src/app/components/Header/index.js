import React, { Component } from 'react';
import Button from '../Button';
import FontAwesome from 'react-fontawesome';


class Header extends Component {
  componentDidMount() {
    this.me = localStorage.getItem('logged_in');
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <header className="header">
          <div className="header-searchbox">
            <h3 id="title"
              onClick={() => this.props.router.push('/')}
            >
              { "WebShop" }
            </h3>
          </div>
          <div className="header-buttons">
            <Button
              onClick={() => {
                localStorage.clear();
                this.props.router.push('/login');
              }}
            >
              Log out
            </Button>
          </div>
        </header>
      </div>
    )
  }
}

export default Header;
