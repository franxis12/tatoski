import React, { useCallback, useEffect, useState } from "react";
import JobCard from "./JobCard";

function Content() {
  const [applications, setApplications] = useState([]);

  const loadApplications = useCallback(() => {
    try {
      const stored = JSON.parse(
        localStorage.getItem("jobApplications") ?? "[]"
      );
      setApplications(Array.isArray(stored) ? stored : []);
    } catch (error) {
      console.error("Unable to read job applications from storage", error);
      setApplications([]);
    }
  }, []);

  const handleDelete = useCallback((id) => {
    try {
      const stored = JSON.parse(
        localStorage.getItem("jobApplications") ?? "[]"
      );
      const filtered = (Array.isArray(stored) ? stored : []).filter(
        (app) => app.id !== id
      );
      localStorage.setItem("jobApplications", JSON.stringify(filtered));
      setApplications(filtered);
      window.dispatchEvent(new Event("jobApplicationsUpdated"));
    } catch (error) {
      console.error("Unable to delete job application", error);
    }
  }, []);

  useEffect(() => {
    loadApplications();

    window.addEventListener("jobApplicationsUpdated", loadApplications);
    window.addEventListener("storage", loadApplications);

    return () => {
      window.removeEventListener("jobApplicationsUpdated", loadApplications);
      window.removeEventListener("storage", loadApplications);
    };
  }, [loadApplications]);

  return (
    <main className="col-span-10 row-start-2 row-end-3 h-full bg-(--BgColor) rounded-tl-3xl p-10">
      <h1 className="mb-10 text-3xl font-semibold">Recent Active</h1>
      {applications.length === 0 ? (
        <p className="text-white/70">Aún no tienes aplicaciones guardadas.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {applications.map((item) => (
            <JobCard
              key={item.id}
              id={item.id}
              jobTitle={item.jobTitle}
              date={item.date}
              salary={item.salary}
              type={item.type}
              description={item.description}
              onDelete={() => handleDelete(item.id)}
            />
          ))}
        </div>
      )}
    </main>
  );
}

export default Content;
