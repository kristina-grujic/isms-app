import { Record } from 'immutable';
import { clone, filter } from 'lodash';
import * as actions from '../data/categories';
import * as valueActions from '../data/values';

const InitialState = new Record({
  categories: [],
  createError: undefined,
  editError: undefined,
  deleteError: undefined,
  chosenCategory: undefined,
});

const initialState = new InitialState;

function CategoryReducer(state = initialState, action) {
  switch (action.type) {
    case actions.CHOOSE_CATEGORY: {
      state = state.set('chosenCategory', action.category);
      return state;
    }
    case valueActions.CREATE_VALUE_SUCCESS: {
      let categories = clone(state.categories);
      let chosenCategory = clone(state.chosenCategory);
      let values = clone(chosenCategory.values);
      values.push(action.response.data);
      chosenCategory.values = values;
      categories = categories.map((category) => {
        if (category.id === chosenCategory.id) {
          return chosenCategory;
        }
        return category;
      })
      state = state.set('chosenCategory', chosenCategory);
      state = state.set('categories', categories);
      return state;
    }
    case valueActions.EDIT_VALUE_SUCCESS: {
      let categories = clone(state.categories);
      let chosenCategory = clone(state.chosenCategory);
      let values = clone(chosenCategory.values);
      values = values.map((value) => {
        if (value.id === action.value.valueId) {
          let newValue = clone(value);
          newValue.name = action.value.name;
          return newValue;
        }
        return value;
      })
      chosenCategory.values = values;
      categories = categories.map((category) => {
        if (category.id === chosenCategory.id) {
          return chosenCategory;
        }
        return category;
      })
      state = state.set('chosenCategory', chosenCategory);
      state = state.set('categories', categories);
      return state;
    }
    case valueActions.DELETE_VALUE_SUCCESS: {
      let categories = clone(state.categories);
      let chosenCategory = clone(state.chosenCategory);
      let values = clone(chosenCategory.values);
      values = filter(values, (value) => {
        return value.id!==action.value.valueId;
      })
      chosenCategory.values = values;
      categories = categories.map((category) => {
        if (category.id === chosenCategory.id) {
          return chosenCategory;
        }
        return category;
      })
      state = state.set('chosenCategory', chosenCategory);
      state = state.set('categories', categories);
      return state;
    }
    case actions.GET_CATEGORIES_SUCCESS: {
      state = state.set('categories', action.response.data);
      return state;
    }
    case actions.CREATE_CATEGORY_SUCCESS: {
      let categories = clone(state.categories);
      categories.push(action.response.data);
      state = state.set('categories', categories);
      return state;
    }
    case actions.EDIT_CATEGORY_SUCCESS: {
      let categories = clone(state.categories);
      categories = categories.map((category) => {
        if (category.id === action.category.categoryId) {
          let newCategory = clone(category);
          newCategory.name = action.category.name;
          return newCategory;
        }
        return category;
      });
      state = state.set('categories', categories);
      return state;
    }
    case actions.DELETE_CATEGORY_SUCCESS: {
      let categories = clone(state.categories);
      categories = filter(categories, (category) => {
        return category.id !== action.category.categoryId;
      });
      state = state.set('categories', categories);
      return state;
    }
    case actions.DELETE_CATEGORY_START:
    case actions.EDIT_CATEGORY_START:
    case actions.CREATE_CATEGORY_START: {
      state = state.set('createError', undefined);
      state = state.set('editError', undefined);
      state = state.set('deleteError', undefined);
      return state;
    }
    case actions.CREATE_CATEGORY_ERROR: {
      return state.set('createError', action.error);
    }
    case actions.EDIT_CATEGORY_ERROR: {
      return state.set('editError', action.error);
    }
    case actions.DELETE_CATEGORY_ERROR: {
      return state.set('deleteError', action.error);
    }
    default: {
      return state;
    }
  }
}

export default CategoryReducer;
