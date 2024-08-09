import React from "react";
import LatestJob from "./LatestJob";

function LatestJobsOpening() {
  const latestJobs = [1, 2, 3, 4, 5, 6];
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold">
        <span className="text-violet-600">Latest & Top </span>Job Opening
      </h2>
      <div className="grid grid-cols-3 my-10 gap-4">
        {latestJobs.slice(0, 6).map((job, index) => (
          <LatestJob key={index} />
        ))}
      </div>
    </div>
  );
}

export default LatestJobsOpening;
