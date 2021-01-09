import * as actionTypes from "./actionTypes";
import { updateObject } from "./utility";

const initialState = {
  snackbarValues: {
    state: false,
    mode: "error",
    message: "",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SNACKBAR:
      return updateObject(state, { snackbarValues: action.value });
    case actionTypes.CLEAR_SNACKBAR:
      return updateObject(state, {
        snackbarValues: {
          ...initialState.snackbarValues,
        },
      });
    default:
      return state;
  }
};

export default reducer;
