import React, { Suspense } from "react";
import useAuth from "../../hook/useAuth";
import JobList from "./JobList";
import { myJobsApi } from "../../api/jobsApi";

const MyPostedJob = () => {
  const { users } = useAuth();

  return (
    <div className="my-20 min-h-[70vh] flex items-center justify-center flex-col">
      <h3 className="text-3xl font-bold text-center ">My Posted Job</h3>
      <Suspense fallback="loading....">
        <JobList jobsApiByPromise={myJobsApi(users.email)} />
      </Suspense>
    </div>
  );
};

export default MyPostedJob;
