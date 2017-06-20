import { Record } from 'immutable';
import { clone, filter } from 'lodash';
import * as actions from '../data/products';

const InitialState = new Record({
  products: [],
  createError: undefined,
  editError: undefined,
  deleteError: undefined,
});

const initialState = new InitialState;

function ProductReducer(state = initialState, action) {
  switch (action.type) {
    case actions.CREATE_PRODUCT_SUCCESS: {
      let products = clone(state.products);
      products.push(action.response.data);
      state = state.set('products', products);
      return state;
    }
    case actions.EDIT_PRODUCT_SUCCESS: {
      let products = clone(state.products);
      products = products.map((product) => {
        if (product.id === action.product.productId) {
          let newProduct = clone(product);
          newProduct.name = action.product.name;
          newProduct.description = action.product.description;
          newProduct.values = action.product.values;
          return newProduct;
        }
        return product;
      });
      state = state.set('products', products);
      return state;
    }
    case actions.DELETE_PRODUCT_SUCCESS: {
      let products = clone(state.products);
      products = filter(products, (product) => {
        return product.id !== action.product.productId;
      });
      state = state.set('products', products);
      return state;
    }
    case actions.GET_PRODUCTS_SUCCESS: {
      state = state.set('products', action.response.data);
      return state;
    }
    case actions.DELETE_PRODUCT_START:
    case actions.EDIT_PRODUCT_START:
    case actions.CREATE_PRODUCT_START: {
      state = state.set('createError', undefined);
      state = state.set('editError', undefined);
      state = state.set('deleteError', undefined);
      return state;
    }
    case actions.CREATE_PRODUCT_ERROR: {
      return state.set('createError', action.error);
    }
    case actions.EDIT_PRODUCT_ERROR: {
      return state.set('editError', action.error);
    }
    case actions.DELETE_PRODUCT_ERROR: {
      return state.set('deleteError', action.error);
    }
    default: {
      return state;
    }
  }
}

export default ProductReducer;
