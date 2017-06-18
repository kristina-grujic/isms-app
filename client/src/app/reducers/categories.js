import { Record } from 'immutable';
import { clone } from 'lodash';
import * as actions from '../data/categories';

const InitialState = new Record({
  categories: [],
});

const initialState = new InitialState;

function CategoryReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_CATEGORIES_SUCCESS: {
      state = state.set('categories', action.response.data);
      return state;
    }
    default: {
      return state;
    }
  }
}

export default CategoryReducer;
