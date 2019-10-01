import { createContext } from "react";

export const CHANGE_THEME = "CHANGE_THEME";
export const HANDLE_FORM_CHANGE = "HANDLE_FORM_CHANGE";

const mode = localStorage.getItem("darkMode");
const preset = mode ? JSON.parse(mode) : true;

export const globalContext = createContext();

const initialState = {
  darkmode: preset,
  contactName: "",
  contactEmail: "",
  contactSubject: "",
  contactMessage: "",
  contact_me_by_fax_only: "" // Filters out spam
};

export const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      localStorage.setItem("darkMode", !state.darkmode);
      return {
        ...state,
        darkmode: !state.darkmode
      };
    case HANDLE_FORM_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };
    default:
      return state;
  }
};
