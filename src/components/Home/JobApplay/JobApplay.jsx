import React from "react";
import { Link, useParams } from "react-router";
import useAuth from "../../../hook/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const JobApplay = () => {
  const { id: jobId } = useParams();
  const { users } = useAuth();

  console.log(users, jobId);
  const handleApplaySubmit = (e) => {
    e.preventDefault();
    // const fullName = e.target.fullName.value;
    // const email = e.target.email.value;
    const linkedId = e.target.linkedId.value;
    const github = e.target.github.value;
    const resume = e.target.resume.value;
    const applications = {
      jobId,
      applicat: users.email,
      linkedId,
      github,
      resume,
    };

    axios
      .post("http://localhost:3000/applications", applications)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: "Drag me!",
            icon: "success",
            draggable: true,
          });
        }
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="my-20 max-w-2xl mx-auto flex items-center justify-center flex-col">
      <h3 className="text-3xl font-bold text-blue-600 my-8">
        Applay For Jobs : <Link to={`/jobs/${jobId}`}>Details</Link>
      </h3>
      <form
        onSubmit={handleApplaySubmit}
        className="max-w-xl mx-auto w-full p-10 border rounded-xl border-gray-400"
      >
        {/* <div>
          <label className="text-gray-700 font-medium">Your Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Your Full Name"
            required
            className="w-full border border-gray-400 rounded-md outline-none py-2 pl-5 mt-2"
          />
        </div>
        <div>
          <label className="text-gray-700 font-medium">Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full border border-gray-400 rounded-md outline-none py-2 pl-5 mt-2"
          />
        </div> */}

        <div>
          <label className="text-gray-700 font-medium">LinkedId Link</label>
          <input
            type="url"
            name="linkedId"
            placeholder="LinkedId Link"
            required
            className="w-full border border-gray-400 rounded-md outline-none py-2 pl-5 mt-2"
          />
        </div>
        <div>
          <label className="text-gray-700 font-medium">Github Link</label>
          <input
            type="url"
            name="github"
            placeholder="Github Link"
            required
            className="w-full border border-gray-400 rounded-md outline-none py-2 pl-5 mt-2"
          />
        </div>
        <div>
          <label className="text-gray-700 font-medium">Resume Link</label>
          <input
            type="url"
            name="resume"
            placeholder="Resume Link"
            required
            className="w-full border border-gray-400 rounded-md outline-none py-2 pl-5 mt-2"
          />
        </div>
        <div className="flex items-center justify-center mt-5">
          <button
            type="submit"
            className="py-2 bg-blue-600 text-white font-semibold rounded-md px-6 cursor-pointer"
          >
            Applay Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobApplay;
