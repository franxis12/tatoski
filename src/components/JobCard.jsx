import React from "react";
import Button from "./Button";

function JobCard({
  id,
  jobTitle,
  date,
  salary,
  type,
  resume,
  description,
  onDelete,
}) {
  return (
    <div id={id}>
      <div className="w-full h-auto rounded-2xl bg-(--CardBg) p-3 px-5 border border-black ">
        <div className="mb-3 flex w-full items-center justify-between border-b border-gray-900/50">
          <div className="flex w-full flex-col ">
            <h2 className="text-xl font-medium text-white">{jobTitle}</h2>

            <h2 className="text-md text-gray-600">{type}</h2>
          </div>
          <h3 className="flex w-40 justify-end">{date}</h3>
        </div>

        <div className="flex w-full flex-col ">
          <h2 className="text-md text-black  ">{description}</h2>
        </div>

        <div className="flex items-center justify-between">
          <h2 className="text-md font-medium text-green-700">{salary}</h2>

          <Button onClick={onDelete}>Delete</Button>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
