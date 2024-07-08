import React from "react";
import PropTypes from "prop-types";
import ToDoInputBox from "./ToDoInputBox";

const ToDoHeader = (props) => {
  const { showMinus, handleShow, addTask } = props;

  return (
    <div className="todo-header">
      <button className="plus-button" onClick={handleShow}>
        {!showMinus ? (
          <i className="fa-solid fa-plus"></i>
        ) : (
          <i className="fa-solid fa-minus"></i>
        )}
      </button>
      <h5>ToDo List</h5>
      <div className={`ToDoInputBox ${showMinus ? "drop" : ""}`}>
        <ToDoInputBox addTask={addTask} />
      </div>
    </div>
  );
};

ToDoHeader.propTypes = {
  showMinus: PropTypes.bool.isRequired,
  handleShow: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
};

export default ToDoHeader;
