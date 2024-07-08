import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./todoTypes";

/** 
* Accept object for reducer state
* @accept object 
*/

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo
  }
}

export const updateToDo = (todo) => {
  return {
    type: UPDATE_TODO,
    payload: todo
  }
}
export const deleteTodo = (todoId) => {
  return {
    type: DELETE_TODO,
    payload: todoId
  }
}