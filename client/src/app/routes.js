import React from 'react';
import { IndexRoute, Route } from 'react-router'
import Layout from './scenes/Layout';
import Home from './scenes/home/index.js';
import Product from './scenes/single_post/index.js';
import Basket from './scenes/basket/index.js';
import Login from './scenes/login/index.js';
import Signup from './scenes/sign_up/index.js';
import Category from './scenes/category/index.js';

module.exports = (
  <Route component={Layout}
    path='/'
  >
    <IndexRoute component={Home} />
    <Route path="product/:id" component={Product} />
    <Route path="category/:id" component={Category} />
    <Route path="cart" component={Basket} />
    <Route path='login' component={Login} />
    <Route path='sign_up' component={Signup} />
  </Route>
)
