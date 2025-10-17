import useJobs from "../../hook/useJobs";
import Jobs from "../../shared/Jobs/Jobs";

function HotJobs() {
  const jobsData = useJobs();


  return (
    <div className="max-w-[1500px] mx-auto my-20">
      <h2 className="my-8 text-4xl text-center text-gray-700 font-bold">
        Hot Jobs of thek Day
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {jobsData.slice(0, 6)?.map((job) => (
          <Jobs key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
}

export default HotJobs;
