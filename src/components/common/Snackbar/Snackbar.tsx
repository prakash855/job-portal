import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import styled from "@material-ui/core/styles/styled";
import { connect } from "react-redux";
import * as actions from "../../../store/action";

const Message = styled("span")({
  display: "flex",
  alignItems: "center",
});

function Alert(props: any) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SimpleSnackbar = (props: any) => {
  const { snackbarValues, resetSnackbarState } = props;
  const { message, mode, state } = snackbarValues;

  const handleClose = () => {
    resetSnackbarState();
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={Boolean(state)}
      autoHideDuration={5000}
      onClose={handleClose}
    >
      <Alert severity={mode} onClose={handleClose}>
        <Message>{message}</Message>
      </Alert>
    </Snackbar>
  );
};

const mapStateToProps = (state: any) => {
  return {
    snackbarValues: state.snackbarValues,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    resetSnackbarState: () => dispatch(actions.resetSnackbarState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SimpleSnackbar);
