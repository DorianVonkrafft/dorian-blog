import { StrictMode } from "react";
import ReactDOM from "react-dom";
import HomePage from "./app";


const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <HomePage />
  </StrictMode>,
  rootElement
);
