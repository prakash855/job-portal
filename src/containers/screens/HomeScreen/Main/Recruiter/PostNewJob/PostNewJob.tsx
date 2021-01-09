import React, { useState } from "react";
import { connect } from "react-redux";

import { createJob } from "../../../../../../utils/private.api.helper";
import * as actions from "../../../../../../store/action";

const PostNewJob = (props: any) => {
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    location: "",
  });

  const handleFormValues = (event: any) => {
    const { value, name } = event.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handlePostNewJob = async (event: any) => {
    event.preventDefault();
    const res = await createJob(formValues);
    if (res.success) {
      props.setSnackbarState({
        mode: "success",
        message: "New job successfully posted",
        state: true,
      });
      if (props.onClose) {
        props.onClose();
      }
    } else {
      props.setSnackbarState({
        mode: "error",
        message: "New job posting error",
        state: true,
      });
      if (props.onClose) {
        props.onClose();
      }
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center">
      <h6 className="pb-2 mb-0 text-center">Post Job</h6>
      <hr />
      <form>
        <div className="form-group row">
          <label htmlFor="title" className="col-sm-3 col-form-label">
            Title
          </label>
          <div className="col-sm-9">
            <input
              name="title"
              id="title"
              type="text"
              onChange={handleFormValues}
              className="form-control"
              placeholder="Enter job title"
            />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="description" className="col-sm-3 col-form-label">
            Description
          </label>
          <div className="col-sm-9">
            <input
              name="description"
              id="description"
              type="text"
              onChange={handleFormValues}
              className="form-control"
              placeholder="Enter description"
            />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="location" className="col-sm-3 col-form-label">
            Location
          </label>
          <div className="col-sm-9">
            <input
              name="location"
              id="location"
              type="text"
              onChange={handleFormValues}
              className="form-control"
              placeholder="Enter location"
            />
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={(event) => handlePostNewJob(event)}
            className="btn btn-primary"
          >
            Post Job
          </button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setSnackbarState: (snackbarObj: any) =>
      dispatch(actions.setSnackbarState(snackbarObj)),
  };
};

export default connect(null, mapDispatchToProps)(PostNewJob);
