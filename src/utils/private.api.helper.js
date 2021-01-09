import { privateAxiosInstance } from "./api";

export async function getRecruiterPostedJobList() {
  try {
    const res = await privateAxiosInstance.get("recruiters/jobs");
    return res.data;
  } catch (error) {
    return error.response.data;
  }
}

export async function getSingleJobCandidateList(jobId) {
  try {
    const res = await privateAxiosInstance.get(
      `recruiters/jobs/${jobId}/candidates`
    );
    return res.data;
  } catch (error) {
    return error.response.data;
  }
}

export async function applyCandidateJob(params) {
  try {
    const res = await privateAxiosInstance.post("candidates/jobs", params);
    return res.data;
  } catch (error) {
    return error.response.data;
  }
}

export async function getAvailableJobList() {
  try {
    const res = await privateAxiosInstance.get("candidates/jobs");
    return res.data;
  } catch (error) {
    return error.response.data;
  }
}

export async function getCandidateAlreadyAppliedJobList() {
  try {
    const res = await privateAxiosInstance.get("candidates/jobs/applied", {});
    return res.data;
  } catch (error) {
    return error.response.data;
  }
}

export async function getJobDetail(jobId) {
  try {
    const res = await privateAxiosInstance.get(`jobs/${jobId}`, {});
    return res.data;
  } catch (error) {
    return error.response.data;
  }
}

export async function createJob(params) {
  try {
    const res = await privateAxiosInstance.post("jobs", params);
    return res.data;
  } catch (error) {
    return error.response.data;
  }
}

export async function deleteJob(params) {
  try {
    const res = await privateAxiosInstance.delete("jobs", params);
    return res.data;
  } catch (error) {
    return error.response.data;
  }
}
