import { SET_TODO } from "./todoTypes";
import axios from "axios";
import { API_HOST } from "../../network/domain";
import API from "../../network/API";

const url = `${API_HOST}${API.todos}`;

export const fetchTodo = async (dispatch) => {
  return axios
    .get(url)
    .then((response) => {
      const { data } = response;
      dispatch({
        type: SET_TODO,
        payload: data,
      });
      return Promise.resolve(response);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};
