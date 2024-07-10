import React from "react";
import { Routes, Route} from "react-router-dom";
import { HomeScreen } from "./home-page";
import { ToDoList } from "./todo-list";

const Router = () => {
  return (
    <Routes>
      <Route path="*" name="homeScreen" element={<HomeScreen />} />
      <Route path="/TodoList" name="todoList" element={<ToDoList/>} />
    </Routes>
  )
} 

export default Router;
