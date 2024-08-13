import React from "react";
import Navbar from "./shared/Navbar";
import Job from "./Job";
import { useSelector } from "react-redux";

function Browse() {
  const jobs = useSelector((store) => store.job.allJobs);
  return (
    <div>
      <Navbar />
      <div className="max-w-5xl mx-auto">
        <p className="font-semibold  text-lg">Search Results {jobs.length}</p>
        <div className="grid grid-row gap-4 my-5 ">
          {jobs.map((job) => (
            <Job key={job?._id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Browse;
