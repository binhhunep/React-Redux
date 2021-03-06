import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { reduxStore } from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
