import React, { useState } from "react";
import { withRouter, RouteComponentProps } from "react-router";

import "./index.css";
import { USER_TYPE } from "../../../../utils/constant";
import Modal from "../../../../components/common/Modal/Modal";
import SimpleSnackbar from "../../../../components/common/Snackbar/Snackbar";
import AlreadyAppliedJobs from "../Main/Candidate/AlreadyAppliedJobs/AlreadyAppliedJobs";
import PostNewJob from "../Main/Recruiter/PostNewJob/PostNewJob";
import { Link } from "react-router-dom";

const Navigation = ({ history }: RouteComponentProps) => {
  const userRole: any = parseInt(localStorage.getItem("userRole") ?? "");

  const [modalState, setModalState] = useState(false);

  const [snackbarValues, setSnackbarValues] = useState({
    mode: "error",
    message: "",
    state: false,
  });

  const handleSnackbarClose = () => {
    setSnackbarValues({
      mode: "error",
      message: "",
      state: false,
    });
  };

  const navItems = () => {
    if (userRole === USER_TYPE.CANDIDATE) {
      return (
        <li className="nav-item active">
          <div
            className="nav-link"
            style={{ cursor: "pointer" }}
            onClick={() => setModalState(true)}
          >
            Jobs Applied by you
          </div>
        </li>
      );
    } else {
      return (
        <li className="nav-item">
          <div
            className="nav-link"
            style={{ cursor: "pointer" }}
            onClick={() => setModalState(true)}
          >
            Post a Job
          </div>
        </li>
      );
    }
  };

  const modalChildren = () => {
    if (userRole === USER_TYPE.CANDIDATE) {
      return <AlreadyAppliedJobs onClose={() => setModalState(false)} />;
    } else {
      return <PostNewJob onClose={() => setModalState(false)} />;
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    history.push("/");
  };

  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <Link to="/" style={{ textDecoration: "none" }}>
          MyJobs
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-auto">{navItems()}</ul>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              style={{ background: "none", border: "none" }}
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {localStorage.getItem("name")}
            </button>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="dropdownMenuButton"
            >
              <div
                style={{ cursor: "pointer" }}
                className="dropdown-item"
                onClick={handleLogout}
              >
                Log Out
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Modal isOpen={modalState} onClose={() => setModalState(false)}>
        {modalChildren()}
      </Modal>
      <SimpleSnackbar
        message={snackbarValues.message}
        state={snackbarValues.state}
        mode={snackbarValues.mode}
        onClose={handleSnackbarClose}
      />
    </header>
  );
};

export default withRouter(Navigation);
