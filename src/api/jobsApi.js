export const myJobsApi = (email) => {
  return fetch(`http://localhost:3000/jobs/applicaitons?email=${email}`).then(
    (res) => res.json()
  );
};
