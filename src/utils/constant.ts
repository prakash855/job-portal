export const USER_TYPE = {
  RECRUITER: 0,
  CANDIDATE: 1,
};

export interface JobDetailInterface {
  id: string;
  title: string;
  location: string;
  description: string;
}
