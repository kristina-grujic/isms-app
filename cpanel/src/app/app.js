import React from 'react';
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux';
import createStore from './store';
import routes from './routes'

const store = createStore();

function App(){
  return (
    <Provider store={store}>
        <Router routes={routes} history={browserHistory}/>
    </Provider>
  )
}

export default App;
