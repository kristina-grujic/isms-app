import { Record } from 'immutable';
import { clone } from 'lodash';
import * as actions from '../data/auth';

const InitialState = new Record({
  loginError: undefined
});

const initialState = new InitialState;

function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case actions.ADMIN_LOGIN_START: {
      state = state.set('loginError', undefined);
      return state;
    }
    case actions.ADMIN_LOGIN_ERROR: {
      state = state.set('loginError', action.error);
      return state;
    }
    default: {
      return state;
    }
  }
}

export default AuthReducer;
