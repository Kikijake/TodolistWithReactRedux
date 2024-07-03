import React,{ useState } from "react";
import ToDoInputBox from "../../components/ToDoList/ToDoInputBox";
import { useSelector, useDispatch } from "react-redux";
import {v4 as uuidv4 } from 'uuid'
import { addTodo } from "../../redux";
uuidv4()

const ToDoList = () => {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  const addTask = (task) => {
    const todo = { id: uuidv4(), task: task, isComplete: false, isEdit: false }
    dispatch(addTodo(todo))
  }
  console.log(todos)
  return (
    <>
      <div>ToDo List</div>
      <ToDoInputBox addTask={addTask}/>
    </>
  )
}

export default ToDoList