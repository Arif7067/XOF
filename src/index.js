import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import Loki from './Between/applyart.js'
ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
      <Loki/>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
