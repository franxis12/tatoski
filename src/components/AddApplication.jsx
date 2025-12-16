import React from "react";
import Input from "../components/Input";

function AddApplication() {
  return (
    <div className="bg-black/80 backdrop-blur-sm w-screen h-screen absolute flex items-center justify-center">
      <div className="min-w-5/8 min-h-5/8 bg-(--CardBg) rounded-2xl border border-slate-50/50 shadow-2xl p-5">
        <h2 className="text-2xl font-medium">New job application</h2>
        <Input />
      </div>
    </div>
  );
}

export default AddApplication;
