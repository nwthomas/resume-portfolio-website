import React from "react";
import { Router } from "react-router-dom";
import { render } from "react-testing-library";
import { createMemoryHistory } from "history";
import { StateProvider } from "react-conflux";
import { darkContext } from "../store/contexts";
import { globalReducer } from "../store/reducers/globalReducer";

const renderWithRouter = (
  ui,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) => {
  return {
    ...render(
      <StateProvider reducer={globalReducer} stateContext={darkContext}>
        <Router history={history}>{ui}</Router>
      </StateProvider>
    ),
    history
  };
};

export default renderWithRouter;
