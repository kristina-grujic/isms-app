import axios from 'axios';
import * as actions from '../data/values';
import { apiEndpoint } from '../config';

export function createValue(value) {
  const headers = {
    'Authorization': localStorage.getItem('token')
  }
  return (dispatch) => {
    dispatch({ type: actions.CREATE_VALUE_START });
    return axios({
      url: `${apiEndpoint}/values`,
      method: 'post',
      data: value,
      headers,
    })
      .then((response) => {
        dispatch({ type: actions.CREATE_VALUE_SUCCESS, response: response.data });
      })
      .catch((response) => {
        dispatch({ type: actions.CREATE_VALUE_ERROR, error: response.error });
      })
  }
}


export function editValue(value) {
  const headers = {
    'Authorization': localStorage.getItem('token')
  }
  return (dispatch) => {
    dispatch({ type: actions.EDIT_VALUE_START });
    return axios({
      url: `${apiEndpoint}/values`,
      method: 'put',
      data: value,
      headers,
    })
      .then((response) => {
        dispatch({ type: actions.EDIT_VALUE_SUCCESS, response: response.data, value });
      })
      .catch((response) => {
        dispatch({ type: actions.EDIT_VALUE_ERROR, error: response.error });
      })
  }
}


export function deleteValue(value) {
  const headers = {
    'Authorization': localStorage.getItem('token')
  }
  return (dispatch) => {
    dispatch({ type: actions.DELETE_VALUE_START });
    return axios({
      url: `${apiEndpoint}/values`,
      method: 'delete',
      data: value,
      headers,
    })
      .then((response) => {
        dispatch({ type: actions.DELETE_VALUE_SUCCESS, response: response.data, value });
      })
      .catch((response) => {
        dispatch({ type: actions.DELETE_VALUE_ERROR, error: response.error });
      })
  }
}
