export const HANDLE_FORM_CHANGE = "HANDLE_FORM_CHANGE";

const initialState = {
  contactName: "",
  contactEmail: "",
  contactSubject: "",
  contactMessage: "",
  contact_me_by_fax_only: "" // Filters out spam
};

export const formReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case HANDLE_FORM_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };
    default:
      return state;
  }
};
