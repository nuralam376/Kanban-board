import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

let url;
if (process.env.NODE_ENV === "development") {
  url = "http://localhost:5000/api";
}

if (process.env.NODE_ENV === "production") {
  url = "https://kanban-board12.herokuapp.com/api";
}

axios.defaults.baseURL = url;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
