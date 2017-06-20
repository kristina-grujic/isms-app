import axios from 'axios';
import * as actions from '../data/products';
import { apiEndpoint } from '../config';

export function getProduct(productId) {
  return (dispatch) => {
    dispatch({ type: actions.GET_PRODUCT_START });
    return axios({
      url: `${apiEndpoint}/product`,
      method: 'get',
      params: {
        productId,
      }
    })
      .then((response) => {
        dispatch({ type: actions.GET_PRODUCT_SUCCESS, response: response.data });
      })
      .catch((response) => {
        dispatch({ type: actions.GET_PRODUCT_ERROR, error: response.error });
      })
  }
}

export function getProducts(query='') {
  return (dispatch) => {
    dispatch({ type: actions.GET_PRODUCTS_START });
    return axios({
      url: `${apiEndpoint}/products`,
      method: 'get',
      params: {
        query,
      }
    })
      .then((response) => {
        dispatch({ type: actions.GET_PRODUCTS_SUCCESS, response: response.data });
      })
      .catch((response) => {
        dispatch({ type: actions.GET_PRODUCTS_ERROR, error: response.error });
      })
  }
}

export function setQuery(query = '') {
  return (dispatch) => {
    dispatch({ type: actions.SET_PRODUCT_QUERY, query });
  }
}
