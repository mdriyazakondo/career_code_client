import React, { useState } from "react";
import Select from "react-select";
import useAuth from "../../hook/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const currencyOptions = [
  { value: "select a currency", label: "Select a currency" },
  { value: "USD", label: "USD" },
  { value: "EUR", label: "EUR" },
  { value: "GBP", label: "GBP" },
  { value: "BDT", label: "BDT" },
  { value: "INR", label: "INR" },
  { value: "JPY", label: "JPY" },
];

const AddJob = () => {
  const [selectedCurrency, setSelectedCurrency] = useState(currencyOptions[0]);
  const { users } = useAuth();
  const onSelectedCurrency = (option) => {
    setSelectedCurrency(option);
  };

  const handleApplicationSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    data.currency = selectedCurrency.value;
    const { min, max, currency, ...newJobs } = data;
    newJobs.requirements = newJobs.requirements
      .split(",")
      .map((req) => req.trim());

    newJobs.responsibilities = newJobs.responsibilities
      .split(",")
      .map((res) => res.trim());

    newJobs.salaryRange = { min, max, currency };
    newJobs.status = "active";

    axios
      .post("http://localhost:3000/jobs", newJobs)
      .then((res) => {
        if (res?.data?.insertedId) {
          Swal.fire("Saved!", "", "success");
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-indigo-100 to-purple-100 flex items-center justify-center pt-10 pb-40 px-4">
      <div className="w-full max-w-4xl bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl p-8 border border-white/40">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">
          🧾 Add Job Information
        </h2>

        <form className="space-y-8" onSubmit={handleApplicationSubmit}>
          {/* ===== BASIC INFO ===== */}
          <section>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Basic Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Job Title
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Job Title"
                  required
                  className="w-full bg-white/70 rounded-lg border border-gray-300 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 outline-none transition p-3"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  required
                  className="w-full bg-white/70 rounded-lg border border-gray-300 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 outline-none transition p-3"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Company Location
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="Company Location"
                  required
                  className="w-full bg-white/70 rounded-lg border border-gray-300 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 outline-none transition p-3"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Company Logo URL
                </label>
                <input
                  type="text"
                  name="company_logo"
                  placeholder="Company Logo URL"
                  className="w-full bg-white/70 rounded-lg border border-gray-300 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 outline-none transition p-3"
                />
              </div>
            </div>
          </section>

          {/* ===== JOB TYPE ===== */}
          <section>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Job Type
            </h3>
            <div className="flex flex-wrap gap-3">
              {["All", "On-Site", "Remote", "Hybrid"].map((type) => (
                <label key={type}>
                  <input
                    type="radio"
                    name="jobType"
                    value={type}
                    required
                    className="hidden peer"
                  />
                  <span className="btn btn-outline btn-sm rounded-full px-5 py-2.5 text-gray-700 border-gray-300 hover:border-indigo-500 hover:text-indigo-600 peer-checked:bg-indigo-500 peer-checked:text-white transition outline-none focus:outline-none">
                    {type}
                  </span>
                </label>
              ))}
            </div>
          </section>

          {/* ===== CATEGORY ===== */}
          <section>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Job Category
            </h3>
            <select
              defaultValue=""
              name="category"
              required
              className="w-full bg-white/70 rounded-lg border border-gray-300 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 outline-none transition p-3"
            >
              <option value="" disabled>
                Select Job Category
              </option>
              <option>Engineering</option>
              <option>Marketing</option>
              <option>Finance</option>
            </select>
          </section>

          {/* ===== APPLICATION DATE ===== */}
          <section>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Application Deadline
            </h3>
            <input
              type="date"
              name="applicationDeadline"
              required
              className="w-full bg-white/70 rounded-lg border border-gray-300 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 outline-none transition p-3"
            />
          </section>

          {/* ===== SALARY ===== */}
          <section>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Salary Range
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Minimum Salary
                </label>
                <input
                  type="text"
                  name="min"
                  placeholder="e.g. 20000"
                  className="w-full bg-white/70 rounded-lg border border-gray-300 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 outline-none transition p-3"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Maximum Salary
                </label>
                <input
                  type="text"
                  name="max"
                  placeholder="e.g. 40000"
                  className="w-full bg-white/70 rounded-lg border border-gray-300 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 outline-none transition p-3"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600 z-50">
                  Currency
                </label>
                <Select
                  options={currencyOptions}
                  value={selectedCurrency}
                  name="currency"
                  onChange={onSelectedCurrency}
                  className="mt-1 outline-none focus:outline-none"
                />
              </div>
            </div>
          </section>

          {/* ===== JOB DESCRIPTION ===== */}
          <section>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Job Description
            </h3>
            <textarea
              cols="30"
              rows="10"
              name="description"
              placeholder="Job Description"
              className="w-full h-32 bg-white/70 rounded-lg border border-gray-300 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 outline-none transition p-3 resize-none"
            ></textarea>
          </section>

          {/* ===== JOB Requirements ===== */}
          <section>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Job Requirements
            </h3>
            <textarea
              cols="30"
              rows="10"
              name="requirements"
              placeholder="Job Requirements (separate by comma)"
              className="w-full h-32 bg-white/70 rounded-lg border border-gray-300 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 outline-none transition p-3 resize-none"
            ></textarea>
          </section>

          {/* ===== JOB Responsibilities ===== */}
          <section>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Job Responsibilities
            </h3>
            <textarea
              cols="30"
              rows="10"
              name="responsibilities"
              placeholder="Job Responsibilities (separate by comma)"
              className="w-full h-32 bg-white/70 rounded-lg border border-gray-300 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 outline-none transition p-3 resize-none"
            ></textarea>
          </section>

          {/* ===== HR Releted INFO ===== */}
          <section>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              HR Related Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-gray-600">
                  HR Name
                </label>
                <input
                  type="text"
                  name="hr_name"
                  placeholder="HR Name"
                  className="w-full bg-white/70 rounded-lg border border-gray-300 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 outline-none transition p-3"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">
                  HR Email
                </label>
                <input
                  type="email"
                  name="hr_email"
                  defaultValue={users.email}
                  placeholder="HR Email"
                  className="w-full bg-white/70 rounded-lg border border-gray-300 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 outline-none transition p-3"
                />
              </div>
            </div>
          </section>

          {/* ===== SUBMIT BUTTON ===== */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-gradient-to-r cursor-pointer from-indigo-500 to-purple-500 text-white font-semibold px-10 py-3 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 outline-none focus:outline-none"
            >
              🚀 Submit Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
