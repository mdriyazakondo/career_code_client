import React, { useEffect, useState } from "react";

const useJobs = () => {
  const [jobsData, setJobsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((data) => setJobsData(data));
  }, []);

  return jobsData;
};

export default useJobs;
