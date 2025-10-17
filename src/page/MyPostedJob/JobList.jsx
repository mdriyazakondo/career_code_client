import React, { use } from "react";
import Jobs from "../../shared/Jobs/Jobs";

const JobList = ({ jobsApiByPromise }) => {
  const jobsList = use(jobsApiByPromise);
  console.log(jobsList);
  return (
    <div className="max-w-[1500px] mx-auto my-20">
      {jobsList.length !== 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobsList?.map((job) => (
            <Jobs key={job._id} job={job} />
          ))}
        </div>
      ) : (
        <div>
          <h4 className="text-center text-5xl font-semibold">Job Not Found</h4>
        </div>
      )}
    </div>
  );
};

export default JobList;
