import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Cursor from "./components/UI/Cursor/Cursor";

ReactDOM.render(
  <React.StrictMode>
    <Cursor />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
