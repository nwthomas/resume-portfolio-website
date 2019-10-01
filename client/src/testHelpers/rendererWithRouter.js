import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
import { createMemoryHistory } from "history";
import { StateProvider } from "react-conflux";
import { globalReducer, globalContext } from "../store/reducers/globalReducer";

const rendererWithRouter = (
  ui,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) => {
  return {
    ...renderer.create(
      <StateProvider reducer={globalReducer} stateContext={globalContext}>
        <Router history={history}>{ui}</Router>
      </StateProvider>
    ),
    history
  };
};

export default rendererWithRouter;
