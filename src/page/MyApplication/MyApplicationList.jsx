import React, { useState, useEffect } from "react";
import MyapplicationRow from "./MyapplicationRow";
import Swal from "sweetalert2";

const MyApplicationList = ({ applicationPromise }) => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    applicationPromise.then((data) => setApplications(data));
  }, [applicationPromise]);

  const handleDelete = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        // এখন DELETE request পাঠানো হবে
        const res = await fetch(`http://localhost:3000/applications/${id}`, {
          method: "DELETE",
        });
        const data = await res.json();

        if (data.success) {
          // সফলভাবে delete হলে success alert দেখাও
          await Swal.fire({
            title: "Deleted!",
            text: "Your application has been deleted.",
            icon: "success",
          });

          // state আপডেট করো
          setApplications((prev) => prev.filter((item) => item._id !== id));
        } else {
          Swal.fire({
            title: "Failed!",
            text: "Could not delete application.",
            icon: "error",
          });
        }
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.message,
        icon: "error",
      });
    }
  };

  return (
    <div>
      <h4 className="text-3xl font-semibold my-8">
        Jobs Applied so far: {applications.length}
      </h4>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Applicant</th>
              <th>Job Info</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {applications.length > 0 ? (
              applications.map((application, index) => (
                <MyapplicationRow
                  key={application._id || index}
                  index={index}
                  application={application}
                  handleDelete={handleDelete}
                />
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center text-gray-500 py-6">
                  No applications found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplicationList;
