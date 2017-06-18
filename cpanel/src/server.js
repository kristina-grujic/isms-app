require('dotenv').config({ path: '../.env' });
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router'
import routes from './app/routes'
import App from './app/app';
import template from './template';

import { Provider } from 'react-redux';
import createStore from './app/store';

const server = express();

const store = createStore();

server.use('/assets', express.static('assets'));

server.get('*', (req, res) => {
  match({ routes: routes, location: req.url }, (err, redirect, props) => {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search)
    } else if (props) {
      const appString = renderToString(
        <Provider store={store}>
          <RouterContext {...props}/>
        </Provider>
      )
      res.send(template({
        body: appString,
        title: 'React Universal App'
      }));
    } else {
      res.status(404).send('Not Found')
    }
  })
});

server.listen((process.env.PORT || 3000));
console.log("Server listening on port: " + (process.env.PORT || 3000));
