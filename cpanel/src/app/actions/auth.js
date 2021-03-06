import axios from 'axios';
import * as actions from '../data/auth';
import { apiEndpoint } from '../config';

export function login(request) {
  return (dispatch) => {
    dispatch({ type: actions.ADMIN_LOGIN_START });
    return axios({
      url: `${apiEndpoint}/admin_login`,
      method: 'post',
      data: request
    })
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('current_user', JSON.stringify(response.data.data));
        dispatch({ type: actions.ADMIN_LOGIN_SUCCESS, response: response.data });
      })
      .catch((error) => {
        dispatch({ type: actions.ADMIN_LOGIN_ERROR, error });
      })
  }
}
