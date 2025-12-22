import React from "react";
import JobCard from "./JobCard";

function Content() {
  const storedApplications = JSON.parse(
    localStorage.getItem("jobApplications") ?? "[]"
  );

  console.log(storedApplications);

  return (
    <main className="col-span-10 row-start-2 row-end-3 h-full bg-(--BgColor) rounded-tl-3xl p-10">
      <h1 className="text-3xl font-semibold mb-10">Recent Active</h1>
      {storedApplications.map((item) => {
        <JobCard id={item.id} jobTitle={item.jobTitle} />;
      })}
    </main>
  );
}

export default Content;
