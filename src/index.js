import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import "antd/dist/antd.css";
import { store } from "./reducers";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
