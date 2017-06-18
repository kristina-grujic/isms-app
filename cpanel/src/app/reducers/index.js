import { combineReducers } from 'redux';
import auth from './auth';
import products from './products';
import categories from './categories';

const combinedReducer = combineReducers({
  auth,
  categories,
  products,
});

export default combinedReducer;
