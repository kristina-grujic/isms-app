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
        dispatch({ type: actions.USER_LOGIN_SUCCESS, response: response.data });
      })
      .catch((error) => {
        dispatch({ type: actions.USER_LOGIN_ERROR, error });
      })
  }
}
