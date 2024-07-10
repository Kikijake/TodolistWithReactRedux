import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodo } from "../../redux";
import ToDoHeader from "../../components/ToDoList/ToDoHeader";
import ToDoRow from "../../components/ToDoList/ToDoRow";

const ToDoList = () => {
  const dispatch = useDispatch();
  
  const todos = useSelector((state) => state.todos);
  const latestTodos = [...todos].reverse();

  useEffect(() => {
    dispatch(fetchTodo);
  }, []);

  return (
    <div className="todo-list">
      <ToDoHeader />
      <div className="task-table">
        {todos?.length > 0 &&
          latestTodos.map((todo, index) => <ToDoRow key={index} todo={todo} />)}
      </div>
    </div>
  );
};

export default ToDoList;
