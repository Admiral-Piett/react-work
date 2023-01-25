// 1) Import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/index.css";
import App from "./pages/App";
import { NavigationProvider } from "./contexts/navigation";

// 2) Get a reference to the div with an id of root
const element = document.getElementById("root");

// 3) Tell React to take control of the div element
const root = ReactDOM.createRoot(element);

// 5) Show the component on the screen
root.render(
  <NavigationProvider>
    <App />
  </NavigationProvider>
);
