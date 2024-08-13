import React from "react";
import LatestJob from "./LatestJob";
import { useSelector } from "react-redux";
import store from "../redux/store";
function LatestJobsOpening() {
  const jobs = useSelector((store) => store.job.allJobs);

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold">
        <span className="text-violet-600">Latest & Top </span>Job Opening
      </h2>
      <div className="grid grid-cols-3 my-10 gap-4">
        {jobs.slice(0, 6).map((job) => (
          <LatestJob key={job?._id} job={job} />
        ))}
      </div>
    </div>
  );
}

export default LatestJobsOpening;
