import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

function initStore() {
  const middleware = [thunk];
  const store = compose(applyMiddleware(...middleware))(createStore)(rootReducer);
  return store;
}

export default initStore;
