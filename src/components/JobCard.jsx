import React from "react";
import Button from "./Button";

function JobCard({ id, jobTitle }) {
  return (
    <div id={id}>
      <div className="w-full h-40 rounded-2xl bg-(--CardBg) p-5 px-5 border border-black">
        <h2 className="text-white text-lg font-medium">{jobTitle}</h2>
        <Button />
      </div>
    </div>
  );
}

export default JobCard;
