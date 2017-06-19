import axios from 'axios';
import * as actions from '../data/products';
import { apiEndpoint } from '../config';

export function getProducts() {
  return (dispatch) => {
    dispatch({ type: actions.GET_PRODUCTS_START });
    return axios({
      url: `${apiEndpoint}/products`,
      method: 'get',
    })
      .then((response) => {
        dispatch({ type: actions.GET_PRODUCTS_SUCCESS, response: response.data });
      })
      .catch((response) => {
        dispatch({ type: actions.GET_PRODUCTS_ERROR, error: response });
      })
  }
}

export function createProduct(product) {
  return (dispatch) => {
    const headers = {
      'Authorization': localStorage.getItem('token')
    }
    dispatch({ type: actions.CREATE_PRODUCT_START });
    return axios({
      url: `${apiEndpoint}/products`,
      method: 'post',
      data: product,
      headers,
    })
      .then((response) => {
        dispatch({ type: actions.CREATE_PRODUCT_SUCCESS, response: response.data });
      })
      .catch((response) => {
        dispatch({ type: actions.CREATE_PRODUCT_ERROR, error: response.error });
      })
  }
}


export function editProduct(product) {
  return (dispatch) => {
    const headers = {
      'Authorization': localStorage.getItem('token')
    }
    dispatch({ type: actions.EDIT_PRODUCT_START });
    return axios({
      url: `${apiEndpoint}/products`,
      method: 'put',
      data: product,
      headers,
    })
      .then((response) => {
        dispatch({ type: actions.EDIT_PRODUCT_SUCCESS, response: response.data });
      })
      .catch((response) => {
        dispatch({ type: actions.EDIT_PRODUCT_ERROR, error: response.error });
      })
  }
}


export function deleteProduct(product) {
  return (dispatch) => {
    const headers = {
      'Authorization': localStorage.getItem('token')
    }
    dispatch({ type: actions.DELETE_PRODUCT_START });
    return axios({
      url: `${apiEndpoint}/products`,
      method: 'delete',
      data: product,
      headers,
    })
      .then((response) => {
        dispatch({ type: actions.DELETE_PRODUCT_SUCCESS, response: response.data });
      })
      .catch((response) => {
        dispatch({ type: actions.DELETE_PRODUCT_ERROR, error: response.error });
      })
  }
}
