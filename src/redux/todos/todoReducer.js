import { ADD_TODO } from "./todoTypes";

/** 
* @return array state
*/

const initialState = []

const todoReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case ADD_TODO: return [
      ...state,
      payload
    ]
    
    default: return state
  }
}

export default todoReducer