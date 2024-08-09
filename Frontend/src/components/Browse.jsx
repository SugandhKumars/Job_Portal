import React from "react";
import Navbar from "./shared/Navbar";
import Job from "./Job";

function Browse() {
  const Jobs = [1, 2, 3, 2, 3, 2, 3, 2, 3];
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <p className="font-semibold  text-lg">Search Results {Jobs.length}</p>
        <div className="grid grid-cols-3 gap-4 my-5">
          {Jobs.map((job, index) => (
            <Job key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Browse;
