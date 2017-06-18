import { Record } from 'immutable';
import { clone } from 'lodash';
import * as actions from '../data/products';

const InitialState = new Record({
  products: [],
  query: '',
});

const initialState = new InitialState;

function ProductReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_PRODUCT_QUERY: {
      state = state.set('query', action.query);
      return state;
    }
    case actions.GET_PRODUCTS_SUCCESS: {
      state = state.set('products', action.response.data);
      return state;
    }
    default: {
      return state;
    }
  }
}

export default ProductReducer;