import React from "react";

const MyapplicationRow = ({ application, index, handleDelete }) => {
  const { company_logo, title, company, jobType, applicantName, applicat } =
    application || {};

  return (
    <tr>
      <th>
        <label>{index + 1}</label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={company_logo} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{title}</div>
            <div className="text-sm opacity-50">{company}</div>
          </div>
        </div>
      </td>
      <td>{jobType}</td>
      <td>{applicat}</td>
      <th>
        <button
          onClick={() => handleDelete(application._id)}
          className="bg-red-500 cursor-pointer px-4 py-1.5 rounded-md text-white"
        >
          Delete
        </button>
      </th>
    </tr>
  );
};

export default MyapplicationRow;
