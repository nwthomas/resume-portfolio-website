import React from "react";
import { Router } from "react-router-dom";
import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { StateProvider } from "react-conflux";
import { globalReducer, globalContext } from "../store/reducers/globalReducer";

const renderWithRouter = (
  ui,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) => {
  return {
    ...render(
      <StateProvider reducer={globalReducer} stateContext={globalContext}>
        <Router history={history}>{ui}</Router>
      </StateProvider>
    ),
    history
  };
};

export default renderWithRouter;
