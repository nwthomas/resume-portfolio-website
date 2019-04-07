import React, { useReducer, createContext } from "react";

// Store setup for application state
export const Store = createContext({
  state: {},
  dispatch: () => {}
});

// Initial state setup
const initialState = {
  // Insert initial state values
};

// Reducer setup
const reducer = (state, action) => {
  switch (action.type) {
    case "One":
      return state;
    default:
      return state;
  }
};

// Provides store to entire application
export const MyStore = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
};
