import axios from 'axios';
import * as actions from '../data/auth';
import { apiEndpoint } from '../config';

export function login(request) {
  return (dispatch) => {
    dispatch({ type: actions.USER_LOGIN_START });
    return axios({
      url: `${apiEndpoint}/login`,
      method: 'post',
      data: request
    })
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('current_user', JSON.stringify(response.data.data));
        dispatch({ type: actions.USER_LOGIN_SUCCESS, response: response.data });
      })
      .catch((error) => {
        dispatch({ type: actions.USER_LOGIN_ERROR, error });
      })
  }
}

export function sign_up(request) {
  return (dispatch) => {
    dispatch({ type: actions.USER_REGISTER_START });
    return axios({
      url: `${apiEndpoint}/register`,
      method: 'post',
      data: request
    })
      .then((response) => {
        dispatch({ type: actions.USER_REGISTER_SUCCESS, response: response.data });
      })
      .catch((error) => {
        dispatch({ type: actions.USER_REGISTER_ERROR, error });
      })
  }
}
