import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Biodata from "./Biodata";
import reportWebVitals from "./reportWebVitals";

// Redux

import { Provider } from "react-redux";
import store from './redux/store.js'

ReactDOM.render(
  <Provider store={store}>
    <Biodata />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
