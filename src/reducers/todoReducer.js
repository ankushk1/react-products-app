import { ADD_TODOS } from "../actions/constants";

const initialState = {
  todos: []
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODOS:
      return action.payload;
    default:
      return state;
  }
};
