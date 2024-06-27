import React from "react";
import { simulateDelay } from "../utils";

const HomeScreen = React.lazy(() => simulateDelay(() => import("../pages/Home/HomeScreen"), 2000))

export { HomeScreen }