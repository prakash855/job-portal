import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./index.css";
import { handleUserRegistration } from "../../../../utils/public.api.helper";
import { USER_TYPE } from "../../../../utils/constant";
import * as actions from "../../../../store/action";

const Register = (props: any) => {
  let [formValues, setFormValues] = useState({
    email: "",
    userRole: USER_TYPE.RECRUITER,
    password: "",
    confirmPassword: "",
    name: "",
    skills: "",
  });

  const handleRegisterFormValues = (event: any) => {
    const { value, name } = event.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleRegister = async (event: any) => {
    event.preventDefault();
    formValues = {
      ...formValues,
      userRole: Number(formValues.userRole),
    };
    const res: any = await handleUserRegistration(formValues);
    if (res.success) {
      props.setSnackbarState({
        mode: "success",
        message: "Successfully Registered.",
        state: true,
      });
      props.history.push("/login");
    } else {
      props.setSnackbarState({
        mode: "error",
        message: res.message ?? "Registration failed.",
        state: true,
      });
    }
  };

  return (
    <div>
      <h4 className="text-center mt-3">Job Portal</h4>
      <div className="card w-50 mt-3">
        <div className="card-body">
          <form>
            <h3 className="text-center">Register</h3>

            <div className="form-group row">
              <label htmlFor="name" className="col-sm-3 col-form-label">
                Name
              </label>
              <div className="col-sm-9">
                <input
                  name="name"
                  id="name"
                  type="text"
                  onChange={handleRegisterFormValues}
                  className="form-control"
                  placeholder="Enter name"
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="email" className="col-sm-3 col-form-label">
                Email address
              </label>
              <div className="col-sm-9">
                <input
                  name="email"
                  id="email"
                  type="email"
                  onChange={handleRegisterFormValues}
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="skills" className="col-sm-3 col-form-label">
                Skills
              </label>
              <div className="col-sm-9">
                <input
                  name="skills"
                  id="skills"
                  type="text"
                  onChange={handleRegisterFormValues}
                  className="form-control"
                  placeholder="Enter comma separated skills"
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="password" className="col-sm-3 col-form-label">
                Password
              </label>
              <div className="col-sm-9">
                <input
                  name="password"
                  id="password"
                  type="password"
                  onChange={handleRegisterFormValues}
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>
            </div>

            <div className="form-group row">
              <label
                htmlFor="confirmPassword"
                className="col-sm-3 col-form-label"
              >
                Confirm Password
              </label>
              <div className="col-sm-9">
                <input
                  name="confirmPassword"
                  id="confirmPassword"
                  type="password"
                  onChange={handleRegisterFormValues}
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="userRole" className="col-sm-3 col-form-label">
                Role
              </label>
              <div className="col-sm-9">
                <select
                  name="userRole"
                  id="userRole"
                  className="form-control"
                  onChange={handleRegisterFormValues}
                >
                  <option value={1}>Candidate</option>
                  <option value={0}>Employer</option>
                </select>
              </div>
            </div>
            <div className="text-center">
              <button
                onClick={(event) => handleRegister(event)}
                className="btn btn-primary"
              >
                Register
              </button>
            </div>
            <br />
            <p className="text-center">
              Already have Account?
              <Link to="/login">{"  "} Log in</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    snackbarValues: state.snackbarValues,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setSnackbarState: (snackbarObj: any) =>
      dispatch(actions.setSnackbarState(snackbarObj)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
