import React from "react";
import Input from "../components/Input";

function AddApplication() {
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
      </div>
    </div>
  );
}

export default AddApplication;
