import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { HomeScreen } from "./home-page";
import { ToDoList } from "./todo-list";
import Loading from "../components/Loading/Loading";

const Router = () => {
  return (
    <Routes>
      <Route path="*" name="homeScreen" element={<HomeScreen />} />
      {/* <Route path="/loading" name="loading" element={<Loading />} /> */}
      <Route path="/TodoList" name="todoList" element={<ToDoList/>} />
    </Routes>
  )
} 

export default Router;
