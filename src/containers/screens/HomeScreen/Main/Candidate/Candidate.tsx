import React, { useEffect, useState, Fragment } from "react";
import { connect } from "react-redux";

import {
  getAvailableJobList,
  applyCandidateJob,
} from "../../../../../utils/private.api.helper";
import { JobDetailInterface } from "../../../../../utils/constant";
import * as actions from "../../../../../store/action";

const Candidate = (props: any) => {
  const [jobList, setJobList] = useState([]);

  const getJobListing = async () => {
    const res = await getAvailableJobList();
    if (res.success) {
      setJobList(res.data);
    } else {
      setJobList([]);
      props.setSnackbarState({
        mode: "error",
        message: "Available Job fetching failed.",
        state: true,
      });
    }
  };

  useEffect(() => {
    getJobListing();
  }, []);

  const handleApplyJob = async (jobId: string) => {
    const params = {
      jobId,
    };
    await applyCandidateJob(params);
  };

  return (
    <div className="my-3 p-3 bg-white rounded shadow-sm">
      {jobList.length ? (
        <Fragment>
          <h6 className="border-bottom border-gray pb-2 mb-0">
          Jobs for you
          </h6>
          {jobList.map((jobDetail: JobDetailInterface) => {
            return (
              <div className="media text-muted pt-3" key={jobDetail.id}>
                <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                  <div className="d-flex justify-content-between align-items-center w-100">
                    <strong className="text-gray-dark">
                      {jobDetail.title.toUpperCase()}
                    </strong>
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => handleApplyJob(jobDetail.id)}
                    >
                      Apply
                    </div>
                  </div>
                  <span className="d-block">
                    Location : {jobDetail.location}
                  </span>
                  <span className="d-block">
                    Description : {jobDetail.description}
                  </span>
                </div>
              </div>
            );
          })}
        </Fragment>
      ) : (
        <h6 className=" pb-2 mb-0">No Job Available</h6>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setSnackbarState: (snackbarObj: any) =>
      dispatch(actions.setSnackbarState(snackbarObj)),
  };
};

export default connect(null, mapDispatchToProps)(Candidate);
