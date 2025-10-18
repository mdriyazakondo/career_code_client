import React, { use } from "react";
import Jobs from "../../shared/Jobs/Jobs";
import { Link } from "react-router";

const JobList = ({ jobsApiByPromise }) => {
  const jobsList = use(jobsApiByPromise);

  return (
    <div className="max-w-[1500px] mx-auto my-20">
      {jobsList.length !== 0 ? (
        <div className="overflow-x-auto">
          {/* ✅ শুধু table width বড় করা হলো */}
          <table className="table w-[1400px]">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Deadline</th>
                <th>count</th>
                <th>View Application</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {jobsList?.map((job, index) => (
                <tr key={job._id} className="border-b-2 pb-3 border-gray-400">
                  <th className="text-sm font-semibold text-gray-600 border-r border-gray-400">
                    {index + 1}
                  </th>
                  <td className="text-sm font-semibold text-gray-600 ">
                    {job.title}
                  </td>
                  <td className="text-sm font-semibold text-gray-600 ">
                    {job.applicationDeadline}
                  </td>
                  <td className="text-sm font-semibold text-gray-600 ">
                    {job.application_count}
                  </td>
                  <td className="text-sm font-semibold text-gray-600 ">
                    <Link to={`/applications/${job?._id}`}>View Job</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          <h4 className="text-center text-5xl font-bold">Job Not Found</h4>
        </div>
      )}
    </div>
  );
};

export default JobList;
