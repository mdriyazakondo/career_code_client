import axios from "axios";
import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useLoaderData, useParams } from "react-router";
import Swal from "sweetalert2";

const ViewApplications = () => {
  const { job_id } = useParams();
  const applications = useLoaderData();

  const handleStatus = (e, app_id) => {
    e.preventDefault();

    axios
      .patch(`http://localhost:3000/applications/${app_id}`, {
        status: e.target.value,
      })
      .then((res) => {
        console.log("Status updated:", res.data);
        if (res.data.modifiedCount) {
          Swal.fire({
            title: "Drag me!",
            icon: "success",
            draggable: true,
          });
        }
      })
      .catch((err) => console.log("Error:", err.message));
  };

  return (
    <div className="max-w-[1500px] mx-auto my-40">
      <h3 className="text-4xl font-bold mb-8">
        {applications.length} Applications for Job ID: {job_id}
      </h3>

      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="table w-full">
          <thead className="bg-indigo-100 text-gray-700 font-semibold">
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Resume</th>
              <th>GitHub</th>
              <th>LinkedIn</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {applications.map((application, i) => (
              <tr key={application._id} className="hover:bg-gray-50">
                <td>{i + 1}</td>
                <td>{application.applicant || application.email}</td>
                <td>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={application.resume}
                    className="text-blue-600 underline"
                  >
                    Resume
                  </a>
                </td>
                <td>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={application.github}
                    className="text-blue-600 underline"
                  >
                    GitHub
                  </a>
                </td>
                <td>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={application.linkedin}
                    className="text-blue-600 underline"
                  >
                    LinkedIn
                  </a>
                </td>

                <td>
                  <select
                    value={application.status || "Pending"}
                    onChange={(e) => handleStatus(e, application._id)}
                    className="select border rounded-md px-2 py-1 bg-gray-50 focus:border-indigo-500"
                  >
                    <option disabled>Update Status</option>
                    <option>Pending</option>
                    <option>Call for Interview</option>
                    <option>Hired</option>
                    <option>Rejected</option>
                  </select>
                </td>

                <td>
                  <button
                    className="flex items-center gap-1 cursor-pointer px-4 py-1.5 rounded-md bg-red-500 text-white text-sm font-semibold hover:bg-red-600 transition"
                    onClick={() => console.log("Delete:", application._id)}
                  >
                    <MdDelete /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
