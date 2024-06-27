import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { HomeScreen } from "./home-page";

const Router = () => {
  return (
    <Routes>
      <Route path="*" name="homeScreen" element={<HomeScreen/>} />
    </Routes>
  )
} 

export default Router;
