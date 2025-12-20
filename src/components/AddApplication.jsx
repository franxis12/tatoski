import React, { useState } from "react";
import Input from "../components/Input";

function AddApplication() {
  const [jobTitle, setJobTitle] = useState(() => {
    return localStorage.getItem("jobTitle") != null
      ? localStorage.getItem("jobTitle")
      : "";
  });
  const [salary, setSalary] = useState(0);
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  console.log(jobTitle);

  const handleNewJobs = () => {
    localStorage.setItem("jobTitle", jobTitle);
  };

  //
  return (
    <div className="bg-black/80 backdrop-blur-sm w-screen h-screen absolute flex items-center justify-center">
      <div className="min-w-5/8 min-h-5/8 bg-(--CardBg) rounded-2xl border border-slate-50/50 shadow-2xl p-5">
        <div className="flex w-full items-end gap-2 mb-2">
          <div className="flex-col flex w-full">
            <label className="text-xl font-medium">Job Title</label>
            <input
              placeholder="Job title"
              className="bg-white rounded-md h-8 p-3"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            ></input>
          </div>
          {/*Where did applied*/}
          <div></div>
          <input
            type="date"
            className="bg-white rounded-md h-8 p-3 border "
          ></input>
        </div>

        <div className="flex w-full items-end gap-2 mb-3">
          <div className="flex-col flex w-full">
            <label className="text-xl font-medium">Salary</label>
            <input
              placeholder="Job title"
              className="bg-white rounded-md h-8 p-3"
            ></input>
          </div>
          <div className="flex-col flex w-full">
            <label className="text-xl font-medium">Type</label>
            <input
              placeholder="Job title"
              className="bg-white rounded-md h-8 p-3"
            ></input>
          </div>

          <div className="flex-col flex w-full">
            <label className="text-xl font-medium">Resume</label>
            <input
              placeholder="Job title"
              className="bg-white rounded-md h-8 p-3"
            ></input>
          </div>
        </div>
        <div className="">
          <label className="text-xl font-medium">Job description</label>
          <textarea
            placeholder="Paste here your job description"
            className="bg-white w-full m-h-full rounded-xl  h-90 p-3"
          ></textarea>
        </div>
        <button
          onClick={handleNewJobs}
          className="bg-blue-500 hover:bg-amber-200 p-2 rounded-2xl"
        >
          Save job Application
        </button>
      </div>
    </div>
  );
}

export default AddApplication;
