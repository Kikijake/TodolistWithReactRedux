import React, { useState } from "react";
import PropTypes from "prop-types";

const ToDoInputBox = (props) => {
  const { addTask } = props;
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask('')
  };

  return (
    <>
      <form onSubmit={handleSubmit} id="task-input-form" className="task-input">
        <input type="text" id="task-input" value={task} onChange={(e) => setTask(e.target.value)} />
        <button type="submit">
          <i className="fa-solid fa-check"></i>
        </button>
      </form>
    </>
  );
};

ToDoInputBox.propTypes = {
  addTask: PropTypes.func.isRequired,
};
export default ToDoInputBox;
