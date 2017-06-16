import { Record } from 'immutable';
import { clone } from 'lodash';

const InitialState = new Record({
});

const initialState = new InitialState;

function ExampleReducer(state = initialState, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}

export default ExampleReducer;
