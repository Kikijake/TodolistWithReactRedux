import React, { useState } from "react";
import PropTypes from "prop-types";
// API imports
import useAxios from "../../hooks/useAxios";
import API from "../../network/API";
// Redux imports
import { useDispatch } from "react-redux";
import { fetchTodo } from "../../redux";

const ToDoRow = (props) => {
  const { todo } = props;
  const { instance } = useAxios();
  const [task, setTask] = useState(todo.task);
  const dispatch = useDispatch();
  const url = `${API.todos}/${todo.id}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await instance
      .patch(url, { task:task, isEdit: !todo.isEdit })
      .catch((error) => {
        console.log("error:", error);
      });
    if (response) {
      dispatch(fetchTodo);
    }
  };

  const handleEdit = async () => {
    const response = await instance
      .patch(url, {isEdit: !todo.isEdit})
      .catch((error) => {
        console.log("error:", error);
      });
    if (response) {
      dispatch(fetchTodo);
    }
  };

  const handleComplete = async () => {
    const response = await instance
      .patch(url, {isComplete: !todo.isComplete})
      .catch((error) => {
        console.log("error:", error);
      });
    if (response) {
      dispatch(fetchTodo);
    }
  };

  const handleDelete = async () => {
    const response = await instance
      .delete(url)
      .catch((error) => {
        console.log("error:", error);
      });
    if (response) {
      dispatch(fetchTodo);
    }
  };

  return (
    <form className="ToDoRow mt-2" onSubmit={handleSubmit}>
      <div className="task">
        {!todo.isEdit ? (
          <p
            className={`todo ms-2 ${todo.isComplete ? "complete" : ""}`}
            onClick={() => handleEdit()}
          >
            {todo.task}
          </p>
        ) : (
          <input
            type="text"
            className={`todo ps-2 ${todo.isComplete ? "complete" : ""}`}
            defaultValue={todo.task}
            onChange={(e) => setTask(e.target.value)}
          />
        )}
        <div>
          <i
            className="fa-solid fa-square-check me-1"
            style={{ cursor: "pointer" }}
            onClick={() => handleComplete()}
          ></i>
          <i
            className="fa-solid fa-trash me-2"
            style={{ cursor: "pointer" }}
            onClick={() => handleDelete(todo.id)}
          ></i>
        </div>
      </div>
    </form>
  );
};

ToDoRow.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default ToDoRow;
