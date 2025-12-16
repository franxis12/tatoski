import React from "react";
import JobCard from "./JobCard";

function Content() {
  return (
    <main className="col-span-10 row-start-2 row-end-3 h-full bg-(--BgColor) rounded-tl-3xl p-10">
      <h1 className="text-3xl font-semibold mb-10">Recent Active</h1>
      <JobCard />
    </main>
  );
}

export default Content;
