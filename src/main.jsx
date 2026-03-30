import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import ScrollManager from "./components/layout/ScrollManager";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/portfolio_web">
      <ScrollManager />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
