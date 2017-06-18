import axios from 'axios';
import * as actions from '../data/categories';
import { apiEndpoint } from '../config';

export function getCategories(query='') {
  return (dispatch) => {
    dispatch({ type: actions.GET_CATEGORIES_START });
    return axios({
      url: `${apiEndpoint}/products`,
      method: 'get',
      params: {
        query,
      }
    })
      .then((response) => {
        dispatch({ type: actions.GET_CATEGORIES_SUCCESS, response: response.data });
      })
      .catch((response) => {
        dispatch({ type: actions.GET_CATEGORIES_ERROR, error: response.error });
      })
  }
}
