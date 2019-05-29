export const CHANGE_THEME = "CHANGE_THEME";

const preset = localStorage.getItem("darkMode") === "true" ? true : false;

const initialState = {
  darkmode: preset
};

export const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        darkmode: !state.darkmode
      };
    default:
      return state;
  }
};
