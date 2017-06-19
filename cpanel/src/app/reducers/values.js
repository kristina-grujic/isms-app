import { Record } from 'immutable';
import { clone, filter } from 'lodash';
import * as actions from '../data/values';

const InitialState = new Record({
  createError: undefined,
  editError: undefined,
  deleteError: undefined,
});

const initialState = new InitialState;

function ValueReducer(state = initialState, action) {
  switch (action.type) {
    case actions.DELETE_VALUE_START:
    case actions.EDIT_VALUE_START:
    case actions.CREATE_VALUE_START: {
      state = state.set('createError', undefined);
      state = state.set('editError', undefined);
      state = state.set('deleteError', undefined);
      return state;
    }
    case actions.CREATE_VALUE_ERROR: {
      return state.set('createError', action.error);
    }
    case actions.EDIT_VALUE_ERROR: {
      return state.set('editError', action.error);
    }
    case actions.DELETE_VALUE_ERROR: {
      return state.set('deleteError', action.error);
    }
    default: {
      return state;
    }
  }
}

export default ValueReducer;
