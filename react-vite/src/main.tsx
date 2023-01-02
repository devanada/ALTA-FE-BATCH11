import React from "react";
import ReactDOM from "react-dom/client";
import Function from "./pages/Function";
import Class from "./pages/Class";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Function />
  </React.StrictMode>
);
