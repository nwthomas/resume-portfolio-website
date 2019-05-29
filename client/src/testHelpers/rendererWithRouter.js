import React from "react";
import { Router } from "react-router-dom";
import renderer from "react-test-renderer";
import { createMemoryHistory } from "history";
import { StateProvider } from "react-conflux";
import { darkContext } from "../store/contexts";
import { globalReducer } from "../store/reducers/globalReducer";

const rendererWithRouter = (
  ui,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) => {
  return {
    ...renderer.create(
      <StateProvider reducer={globalReducer} stateContext={darkContext}>
        <Router history={history}>{ui}</Router>
      </StateProvider>
    ),
    history
  };
};

export default rendererWithRouter;
