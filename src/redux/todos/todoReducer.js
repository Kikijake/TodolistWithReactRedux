import { SET_TODO } from "./todoTypes";

/**
 * @return todo state 
 */

const initialState = [];

const todoReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_TODO:
      return payload;

    default:
      return state;
  }
};

export default todoReducer;
