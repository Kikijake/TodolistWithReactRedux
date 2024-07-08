import React, { useState } from "react";
import PropTypes from "prop-types";
import { deleteTodo, updateToDo } from "../../redux";
import { useDispatch } from "react-redux";

const ToDoRow = (props) => {
  const { todo, index } = props;
  const [task, setTask] = useState(todo.task);
  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const updateTodo = { ...todo, task: task, isEdit: !todo.isEdit };
    dispatch(updateToDo(updateTodo));
  };
  
  const handleEdit = () => {
    const updateTodo = { ...todo, isEdit: !todo.isEdit };
    dispatch(updateToDo(updateTodo));
  };

  const handleComplete = () => {
    const updateTodo = { ...todo, isComplete: !todo.isComplete };
    dispatch(updateToDo(updateTodo));
  };

  const handleDelete = (todoId) => {
    dispatch(deleteTodo(todoId))
  }

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
  index: PropTypes.number.isRequired,
};

export default ToDoRow;
