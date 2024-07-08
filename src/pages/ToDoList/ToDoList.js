import React, { useState } from "react";
import ToDoHeader from "../../components/ToDoList/ToDoHeader";
import ToDoRow from "../../components/ToDoList/ToDoRow";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../../redux";
uuidv4();

const ToDoList = () => {
  const todos = useSelector((state) => state.todos);
  const latestTodos = [...todos].reverse();
  const dispatch = useDispatch();
  const [showMinus, setShowMinus] = useState(false);

  const addTask = (task) => {
    const todo = { id: uuidv4(), task: task, isComplete: false, isEdit: false };
    dispatch(addTodo(todo));
    setShowMinus(false);
  };

  const handleShow = () => {
    setShowMinus((showMinus) => {
      return showMinus ? false : true;
    });
  };

  console.log(todos);

  return (
    <div className="todo-list">
      <ToDoHeader
        showMinus={showMinus}
        handleShow={handleShow}
        addTask={addTask}
      />
      <div className="task-table">
        {todos?.length > 0 &&
          latestTodos.map((todo, index) =>
            <ToDoRow
              key={index}
              index={index}
              todo={todo}
            />
          )
        }
      </div>
    </div>
  );
};

export default ToDoList;
