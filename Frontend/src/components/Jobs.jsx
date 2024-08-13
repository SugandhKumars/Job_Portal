import React, { useEffect } from "react";
import Navbar from "./shared/Navbar";
import Job from "./Job";
import FilterJobs from "./FilterJobs";

import { useSelector } from "react-redux";

function Jobs() {
  const jobs = useSelector((store) => store.job.allJobs);

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl flex mx-auto gap-2 mt-4">
        <div className="w-[20%] ">
          <FilterJobs />
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-3 gap-4    overflow-y-auto p-2">
            {jobs?.map((job, _id) => (
              <Job key={_id} job={job} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobs;
