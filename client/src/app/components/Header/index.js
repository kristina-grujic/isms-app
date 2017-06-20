import React, { Component } from 'react';
import Button from '../Button';
import SearchBox from '../Searchbox';
import FontAwesome from 'react-fontawesome';


class Header extends Component {
  componentDidMount() {
    this.me = localStorage.getItem('current_user');
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
            <SearchBox location={this.props.location} />
          </div>
          <div className="header-buttons">
            <FontAwesome name='shopping-basket'
              color="lightseagreen"
              size='2x'
            />
            {
              //  <Button>Profile</Button>
              this.me ?
                null
                :
                <Button
                  onClick={() => this.props.router.push('/login')}
                >
                  Login
                </Button>
            }
            {
              this.me ?
                <Button
                  onClick={() => {
                    localStorage.clear();
                    this.props.router.push('/login');
                  }}
                >
                  Log out
                </Button>
                :
                <Button
                  onClick={() => this.props.router.push('/sign_up')}
                >
                  Sign up
                </Button>
            }
          </div>
        </header>
      </div>
    )
  }
}

export default Header;
