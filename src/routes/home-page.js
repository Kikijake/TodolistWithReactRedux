import React from "react";
import { simulateDelay } from "../utils";

const HomeScreen = React.lazy(() => simulateDelay(() => import("../pages/Home/HomeScreen")))

export { HomeScreen }