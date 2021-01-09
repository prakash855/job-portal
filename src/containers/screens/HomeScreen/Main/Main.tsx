import React, { lazy } from "react";

import "./index.css";
import { USER_TYPE } from "../../../../utils/constant";

const Candidate = lazy(() => import("./Candidate/Candidate"));

const Recruiter = lazy(() => import("./Recruiter/Recruiter"));

const Main = () => {
  const renderScreen = () => {
    const userRole = parseInt(localStorage.getItem("userRole") ?? "");
    if (userRole === USER_TYPE.CANDIDATE) {
      return <Candidate />;
    } else {
      return <Recruiter />;
    }
  };

  return <main role="main">{renderScreen()}</main>;
};

export default Main;
