import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import { StateProvider } from "react-conflux";
import { globalReducer } from "./store/reducers/globalReducer";
import { darkContext } from "./store/contexts";

const AppWithRouter = withRouter(App);

ReactDOM.render(
  <StateProvider reducer={globalReducer} stateContext={darkContext}>
    <Router>
      <AppWithRouter />
    </Router>
  </StateProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
