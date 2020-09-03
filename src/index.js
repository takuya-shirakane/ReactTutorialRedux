import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./App";
import appReducer from "./states/reducers";

const store = createStore(appReducer);
const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  rootElement
);
