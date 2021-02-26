import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import employees from "./utils/reducer";
import { initialStore } from "./utils/initialStore";

const store = createStore(employees, initialStore);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
