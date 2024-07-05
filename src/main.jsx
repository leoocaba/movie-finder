import React from "react";
import ReactDOM from "react-dom/client";
import { MovieFinder } from "./MovieFinder";
import "./styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MovieFinder />
  </React.StrictMode>
);
