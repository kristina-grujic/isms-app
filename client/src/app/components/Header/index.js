import React, { Component } from 'react';
import Button from '../Button';
import SearchBox from '../Searchbox';
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
            <SearchBox />
          </div>
          <div className="header-buttons">
            <FontAwesome name='shopping-basket'
              color="lightseagreen"
              size='2x'
            />
            {
              this.me ?
                null
                :
                <Button>Login</Button>
            }
            {
              this.me ?
                <Button>Profile</Button>
                :
                <Button>Sign up</Button>
            }
          </div>
        </header>
      </div>
    )
  }
}

export default Header;
