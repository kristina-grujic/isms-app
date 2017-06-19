import React from 'react';
import { IndexRoute, Route } from 'react-router'
import Layout from './scenes/Layout';
import Login from './scenes/login';
import Products from './scenes/products';
import Categories from './scenes/categories';
import Values from './scenes/values';

module.exports = (
  <Route path='/'
    component={Layout}
  >
    <IndexRoute component={Products} />
    <Route component={Categories}
      path="categories"
    />
    <Route component={Values}
      path="values"
    />
    <Route component={Login}
      path='login'
    />
  </Route>
)
