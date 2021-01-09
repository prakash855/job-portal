import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { getJobDetail } from "../../../utils/private.api.helper";
import * as actions from "../../../store/action";

const JobDetail = (props: any) => {
  const [jobDetail, setJobDetail] = useState({
    title: "",
    location: "",
    description: "",
  });

  const handleJobDetail = async () => {
    const jobId: string = props.jobId;
    const res = await getJobDetail(jobId);
    if (res.success) {
      setJobDetail(res.data);
    } else {
      setJobDetail({ title: "", location: "", description: "" });
      props.setSnackbarState({
        mode: "error",
        message: "Job detail fetching failed.",
        state: true,
      });
    }
  };

  // useEffect(() => {
  //   handleJobDetail();
  // }, []);

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{jobDetail.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{jobDetail.location}</h6>
        <p className="card-text">{jobDetail.description}</p>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setSnackbarState: (snackbarObj: any) =>
      dispatch(actions.setSnackbarState(snackbarObj)),
  };
};

export default connect(null, mapDispatchToProps)(JobDetail);
