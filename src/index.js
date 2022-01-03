import React from "react";
import ReactDOM from "react-dom";
import { AppProvider } from "./context";
import App from "./App";
import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>{" "}
  </React.StrictMode>,
  document.getElementById("root")
);
