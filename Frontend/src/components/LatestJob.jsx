import { Badge } from "./ui/badge";
import React from "react";

function LatestJob({ job }) {
  return (
    <div className="border-[1px] rounded-md shadow-lg p-3 cursor-pointer">
      <h3 className="text-lg font-semibold">{job?.company?.name}</h3>
      <p className="text-sm text-gray-500 mb-3">India</p>
      <h2 className="text-xl font-bold ">{job?.title}</h2>
      <p className="my-2 text-sm text-gray-600">{job?.description}</p>
      <div className="flex gap-6">
        <Badge
          variant="outline"
          className="text-red-500 hover:border-red-500 transition-all
 "
        >
          {job?.position} Position
        </Badge>
        <Badge
          variant="outline"
          className="text-violet-500 hover:border-violet-500 transition-all
 "
        >
          {job?.jobType}
        </Badge>
        <Badge
          variant="outline"
          className="text-green-500 hover:border-green-500 transition-all "
        >
          INR {job?.salary}
        </Badge>
      </div>
    </div>
  );
}

export default LatestJob;
