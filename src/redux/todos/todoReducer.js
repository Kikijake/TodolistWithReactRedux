import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./todoTypes";
import { v4 as uuidv4 } from "uuid";
uuidv4();
/**
 * @return array state
 */

const initialState = [
  {
    id: uuidv4(),
    task: "click check button to save as done",
    isComplete: false,
    isEdit: false,
  },
  {
    id: uuidv4(),
    task: "press enter to save",
    isComplete: false,
    isEdit: true,
  },
  {
    id: uuidv4(),
    task: "click here to edit",
    isComplete: false,
    isEdit: false,
  },
];

const todoReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TODO:
      return [...state, payload];

    case UPDATE_TODO:
      return state.map((todo) =>
        todo.id === payload.id
          ? {
              ...todo,
              task: payload.task,
              isComplete: payload.isComplete,
              isEdit: payload.isEdit,
            }
          : todo
      );

    case DELETE_TODO:
      return state.filter((todo) => todo.id !== payload);

    default:
      return state;
  }
};

export default todoReducer;
