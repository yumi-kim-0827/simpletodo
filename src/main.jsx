import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./Basic.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
  // <App basename={process.env.PUBLIC_URL} />
);
