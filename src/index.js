import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import ReducerName from "./reducers/ReducerName";
import InitialState from "./store/InitialState";

const store = createStore(ReducerName, InitialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
