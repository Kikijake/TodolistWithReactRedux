import { ADD_TODO } from "./todoTypes";

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