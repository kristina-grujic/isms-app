import React from 'react';
import { IndexRoute, Route } from 'react-router'
import Layout from './scenes/Layout';
import Home from './scenes/home/index.js';
import Product from './scenes/single_post/index.js';
import Basket from './scenes/basket/index.js';

module.exports = (
  <Route component={Layout}
    path='/'
  >
    <IndexRoute component={Home} />
    <Route path="product" component={Product} />
    <Route path="cart" component={Basket} />
  </Route>
)
