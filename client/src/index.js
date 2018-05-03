import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/index.js";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import "semantic-ui-css/components/icon.min.css";

import App from "./App";

axios.get("./items");

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
