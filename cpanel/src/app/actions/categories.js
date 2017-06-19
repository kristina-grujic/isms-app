import axios from 'axios';
import * as actions from '../data/categories';
import { apiEndpoint } from '../config';

export function chooseCategory(category) {
  return (dispatch) => {
    dispatch({ type: actions.CHOOSE_CATEGORY, category });
  }
}

export function getCategories() {
  return (dispatch) => {
    dispatch({ type: actions.GET_CATEGORIES_START });
    return axios({
      url: `${apiEndpoint}/categories`,
      method: 'get'
    })
      .then((response) => {
        dispatch({ type: actions.GET_CATEGORIES_SUCCESS, response: response.data });
      })
      .catch((response) => {
        dispatch({ type: actions.GET_CATEGORIES_ERROR, error: response.error });
      })
  }
}


export function createCategory(category) {
  const headers = {
    'Authorization': localStorage.getItem('token')
  }
  return (dispatch) => {
    dispatch({ type: actions.CREATE_CATEGORY_START });
    return axios({
      url: `${apiEndpoint}/categories`,
      method: 'post',
      data: category,
      headers,
    })
      .then((response) => {
        dispatch({ type: actions.CREATE_CATEGORY_SUCCESS, response: response.data });
      })
      .catch((response) => {
        dispatch({ type: actions.CREATE_CATEGORY_ERROR, error: response.error });
      })
  }
}


export function editCategory(category) {
  const headers = {
    'Authorization': localStorage.getItem('token')
  }
  return (dispatch) => {
    dispatch({ type: actions.EDIT_CATEGORY_START });
    return axios({
      url: `${apiEndpoint}/categories`,
      method: 'put',
      data: category,
      headers,
    })
      .then((response) => {
        dispatch({ type: actions.EDIT_CATEGORY_SUCCESS, response: response.data, category });
      })
      .catch((response) => {
        dispatch({ type: actions.EDIT_CATEGORY_ERROR, error: response.error });
      })
  }
}


export function deleteCategory(category) {
  const headers = {
    'Authorization': localStorage.getItem('token')
  }
  return (dispatch) => {
    dispatch({ type: actions.DELETE_CATEGORY_START });
    return axios({
      url: `${apiEndpoint}/categories`,
      method: 'delete',
      data: category,
      headers,
    })
      .then((response) => {
        dispatch({ type: actions.DELETE_CATEGORY_SUCCESS, response: response.data, category });
      })
      .catch((response) => {
        dispatch({ type: actions.DELETE_CATEGORY_ERROR, error: response.error });
      })
  }
}
