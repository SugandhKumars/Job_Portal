import { Badge } from "./ui/badge";
import React from "react";

function LatestJob() {
  return (
    <div className="border-[1px] rounded-md shadow-lg p-3">
      <h3 className="text-lg font-semibold">Company Name</h3>
      <p className="text-sm text-gray-500 mb-3">India</p>
      <h2 className="text-xl font-bold ">Job Title</h2>
      <p className="my-2 text-sm text-gray-600">
        Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
        consectetur. adipisicing elit.{" "}
      </p>
      <div className="flex gap-6">
        <Badge variant="outline" className="text-red-500 ">
          12 Position
        </Badge>
        <Badge variant="outline" className="text-violet-500 ">
          Part Time
        </Badge>
        <Badge variant="outline" className="text-green-500 ">
          12 LPA
        </Badge>
      </div>
    </div>
  );
}

export default LatestJob;
