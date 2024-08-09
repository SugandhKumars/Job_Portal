import React from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

function JobDescription() {
  const apply = true;
  return (
    <div className="max-w-7xl mx-auto mt-14">
      <div className="flex justify-between mb-3  ">
        <div>
          <h2 className="font-bold text-xl mb-2">Frontend Developer</h2>
          <div className="flex gap-4">
            <Badge variant="outline" className="border-red-500">
              12 Position
            </Badge>
            <Badge variant="outline" className="border-blue-500">
              Part Time
            </Badge>
            <Badge variant="outline" className="border-violet-500">
              12 LPA
            </Badge>
          </div>
        </div>
        {apply ? (
          <Button disable="true" className="bg-gray-500">
            Already applied
          </Button>
        ) : (
          <Button className="bg-violet-500">Apply Now</Button>
        )}
      </div>
      <p className="my-5 text-lg">Job Description</p>
      <hr className="mb-4" />
      <div className="flex gap-3">
        <span className="font-bold">Role:</span> <span>Frontend Developer</span>
      </div>
      <div className="flex gap-3">
        <span className="font-bold">Location:</span> <span>Hyderabad</span>
      </div>
      <div className="flex gap-3">
        <span className="font-bold">Description : </span>{" "}
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          facere!
        </span>
      </div>
      <div className="flex gap-3">
        <span className="font-bold">Experience:</span> <span>0-2 Years</span>
      </div>
      <div className="flex gap-3">
        <span className="font-bold">Salary : </span> <span>12 LPA</span>
      </div>
      <div className="flex gap-3">
        <span className="font-bold">Total Applicants:</span> <span>4</span>
      </div>
      <div className="flex gap-3">
        <span className="font-bold">Posted Date</span> <span>8-Aug-2024</span>
      </div>
    </div>
  );
}

export default JobDescription;
