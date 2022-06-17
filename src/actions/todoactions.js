import { ADD_TODOS } from "./constants";


export const addTodo = data => ({
  type: ADD_TODOS,
  payload : data
});
