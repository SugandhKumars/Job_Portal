import React from "react";
import Navbar from "./shared/Navbar";
import Job from "./Job";
import FilterJobs from "./FilterJobs";

function Jobs() {
  const jobs = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl flex mx-auto gap-2 mt-4">
        <div className="w-[20%] ">
          <FilterJobs />
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-3 gap-4 h-[82vh]   overflow-y-auto p-2">
            {jobs.map((job, index) => (
              <Job key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobs;
