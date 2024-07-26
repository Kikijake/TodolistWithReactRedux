import React, { useState } from "react";
// Import components
import ToDoInputBox from "./ToDoInputBox";

const ToDoHeader = () => {
  const [showMinus, setShowMinus] = useState(false);

  const handleShow = () => {
    setShowMinus((showMinus) => {
      return showMinus ? false : true;
    });
  };

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
        <ToDoInputBox setShowMinus={setShowMinus} />
      </div>
    </div>
  );
};

export default ToDoHeader;
