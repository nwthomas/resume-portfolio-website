export const CHANGE_THEME = "CHANGE_THEME";

const mode = localStorage.getItem("darkMode");
const preset = mode ? JSON.parse(mode) : false;

const initialState = {
  darkmode: preset
};

export const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      localStorage.setItem("darkMode", !state.darkmode);
      return {
        ...state,
        darkmode: !state.darkmode
      };
    default:
      return state;
  }
};
