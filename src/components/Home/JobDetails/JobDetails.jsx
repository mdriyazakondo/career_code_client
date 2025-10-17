import { ImPower } from "react-icons/im";
import { IoLocationOutline } from "react-icons/io5";
import { Link, useLoaderData } from "react-router";

const JobDetails = () => {
  const {
    _id,
    title,
    company_logo,
    location,
    jobType,
    category,
    description,
    company,
    status,
    requirements,
    salaryRange,
    hr_name,
  } = useLoaderData();

  return (
    <div className="mt-16 max-w-5xl mx-auto flex items-center justify-center min-h-screen">
      <div className="shadow p-4 rounded-md relative hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
        <span className="absolute right-3 top-3">
          <ImPower className="w-5 h-5  text-green-600" />
        </span>
        <div className="flex gap-3 items-center mb-4">
          <img
            className="w-16 h-16  group-hover:scale-110 "
            src={company_logo}
            alt=""
          />
          <div>
            <p className="text-2xl font-semibold text-gray-700">{company}</p>
            <small className="font-semibold text-gray-500 flex items-center gap-1">
              <IoLocationOutline /> {location}
            </small>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-xl font-medium text-gray-600">{hr_name}</p>
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold text-gray-700">{title}</p>
            <p className="text-gray-600 font-medium py-1 w-28 text-center rounded-full border border-gray-400">
              {category}
            </p>
          </div>
          <p className="text-gray-600 font-medium">
            Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
          </p>
          <p>{description.slice(0, 80)}...</p>
          <div className="flex items-center gap-2 flex-wrap mt-4">
            {requirements.slice(0, 3)?.map((requirement, i) => (
              <p
                className="py-1 px-2 text-sm bg-blue-50 text-gray-600 font-medium rounded-full border border-gray-400 hover:text-blue-500 hover:border-blue-500 transition-all duration-300"
                key={i}
              >
                {requirement}
              </p>
            ))}
          </div>
          <div className="flex items-center justify-end mt-4 ">
            <Link to={`/jobApplay/${_id}`}>
              <button className="py-2 px-5 bg-blue-600 text-white font-semibold rounded-md cursor-pointer">
                Applay Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
