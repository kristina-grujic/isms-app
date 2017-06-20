import { Record } from 'immutable';
import { clone } from 'lodash';
import * as actions from '../data/products';

const InitialState = new Record({
  products: [],
  query: '',
  currentProduct: undefined,
});

const initialState = new InitialState;

function ProductReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_PRODUCT_SUCCESS: {
      state = state.set('currentProduct', action.response.data);
      return state;
    }
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
