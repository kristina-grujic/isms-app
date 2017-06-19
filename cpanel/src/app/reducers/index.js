import { combineReducers } from 'redux';
import auth from './auth';
import products from './products';
import categories from './categories';
import values from './values';

const combinedReducer = combineReducers({
  auth,
  categories,
  products,
  values,
});

export default combinedReducer;
