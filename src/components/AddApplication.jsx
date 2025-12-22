import React, { useState } from "react";

const createEmptyJobApplication = () => ({
  jobTitle: "",
  salary: "",
  type: "",
  description: "",
  resume: "",
  date: "",
});

function AddApplication({ active, setActive }) {
  const [jobApplication, setJobApplication] = useState(
    createEmptyJobApplication
  );

  const setField = (field) => (event) => {
    const value = event.target.value;
    setJobApplication((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNewJobs = () => {
    const storedApplications = JSON.parse(
      localStorage.getItem("jobApplications") ?? "[]"
    );
    const newApplication = {
      ...jobApplication,
      id: Date.now(),
      createdAt: new Date().toISOString(),
    };
    const updatedApplications = [...storedApplications, newApplication];
    localStorage.setItem(
      "jobApplications",
      JSON.stringify(updatedApplications)
    );
    setJobApplication(createEmptyJobApplication());
  };

  return (
    <div className="bg-black/80 backdrop-blur-sm w-screen h-screen absolute flex items-center justify-center">
      <div className="min-w-5/8 min-h-5/8 bg-(--CardBg) rounded-2xl border border-slate-50/50 shadow-2xl p-5">
        <div className="flex w-full items-end gap-2 mb-2">
          <div className="flex-col flex w-full">
            <label className="text-xl font-medium">Job Title</label>
            <input
              placeholder="Job title"
              className="bg-white rounded-md h-8 p-3"
              value={jobApplication.jobTitle}
              onChange={setField("jobTitle")}
            ></input>
          </div>
          {/*Where did applied*/}
          <div></div>
          <input
            type="date"
            className="bg-white rounded-md h-8 p-3 border"
            value={jobApplication.date}
            onChange={setField("date")}
          />
        </div>

        <div className="flex w-full items-end gap-2 mb-3">
          <div className="flex-col flex w-full">
            <label className="text-xl font-medium">Salary</label>
            <input
              placeholder="Job title"
              className="bg-white rounded-md h-8 p-3"
              value={jobApplication.salary}
              onChange={setField("salary")}
            ></input>
          </div>
          <div className="flex-col flex w-full">
            <label className="text-xl font-medium">Type</label>
            <input
              placeholder="Job title"
              className="bg-white rounded-md h-8 p-3"
              value={jobApplication.type}
              onChange={setField("type")}
            ></input>
          </div>

          <div className="flex-col flex w-full">
            <label className="text-xl font-medium">Resume</label>
            <input
              placeholder="Job title"
              className="bg-white rounded-md h-8 p-3"
              value={jobApplication.resume ?? ""}
              onChange={setField("resume")}
            ></input>
          </div>
        </div>
        <div className="">
          <label className="text-xl font-medium">Job description</label>
          <textarea
            placeholder="Paste here your job description"
            className="bg-white w-full m-h-full rounded-xl  h-90 p-3"
            value={jobApplication.description}
            onChange={setField("description")}
          ></textarea>
        </div>
        <button
          onClick={handleNewJobs}
          className="bg-blue-500 hover:bg-amber-200 p-2 rounded-2xl"
        >
          Save job Application
        </button>
        <button
          onClick={() => setActive(false)}
          className="bg-red-500 hover:bg-red-900 p-2 rounded-2xl"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default AddApplication;
