import { combineReducers } from 'redux';
import products from './products';
import categories from './categories';

const combinedReducer = combineReducers({
  categories,
  products,
});

export default combinedReducer;
