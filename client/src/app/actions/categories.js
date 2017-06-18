import axios from 'axios';
import * as actions from '../data/categories';
import { apiEndpoint } from '../config';

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
