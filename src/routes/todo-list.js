import React from "react";
import { simulateDelay } from "../utils";

const ToDoList = React.lazy(() => simulateDelay(() => import("../pages/ToDoList/ToDoList"), 2000))

export { ToDoList };
