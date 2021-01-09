import * as actionTypes from "./actionTypes";

export const setSnackbarState = (state) => {
  return {
    type: actionTypes.SET_SNACKBAR,
    value: state,
  };
};

export const resetSnackbarState = () => {
  return {
    type: actionTypes.CLEAR_SNACKBAR,
  };
};
