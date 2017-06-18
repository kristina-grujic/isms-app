import { combineReducers } from 'redux';
import products from './products';
import categories from './categories';
import auth from './auth';

const combinedReducer = combineReducers({
  auth,
  categories,
  products,
});

export default combinedReducer;
