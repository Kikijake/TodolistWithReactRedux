import React, { useState } from "react";
import PropTypes from "prop-types";
// API imports
import useAxios from "../../hooks/useAxios";
import API from "../../network/API";
// Redux imports
import { useDispatch } from "react-redux";
import { fetchTodo } from "../../redux";
// UniqueId imports
import { v4 as uuidv4 } from "uuid";
uuidv4();

const ToDoInputBox = (props) => {
  const { setShowMinus } = props;
  const dispatch = useDispatch();
  const { instance } = useAxios();
  const [task, setTask] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `${API.todos}`;
    const todo = { id: uuidv4(), task: task, isComplete: false, isEdit: false };

    const response = await instance.post(url, todo).catch((error) => {
      console.log("error:", error);
    });
    if (response) {
      dispatch(fetchTodo);
      setShowMinus(false);
    }
    setTask("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} id="task-input-form" className="task-input">
        <input
          type="text"
          id="task-input"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">
          <i className="fa-solid fa-check"></i>
        </button>
      </form>
    </>
  );
};

ToDoInputBox.propTypes = {
  setShowMinus: PropTypes.func.isRequired,
};
export default ToDoInputBox;
