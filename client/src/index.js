import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/browser";
import App from "./App";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import { StateProvider } from "react-conflux";
import { globalReducer, globalContext } from "./store/reducers/globalReducer";
require("dotenv").config();

Sentry.init({
  dsn: process.env.REACT_SENTRY_VAR
});

const AppWithRouter = withRouter(App);

ReactDOM.render(
  <StateProvider reducer={globalReducer} stateContext={globalContext}>
    <Router>
      <AppWithRouter />
    </Router>
  </StateProvider>,
  document.getElementById("root")
);
