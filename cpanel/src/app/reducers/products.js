import { Record } from 'immutable';
import { clone } from 'lodash';
import * as actions from '../data/products';

const InitialState = new Record({
  products: [],
});

const initialState = new InitialState;

function ProductReducer(state = initialState, action) {
  switch (action.type) {
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
