import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { FaRegBookmark } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
function Job({ job }) {
  const navigate = useNavigate();
  const jobFunction = (mongodbTime) => {
    const createdTime = new Date(mongodbTime);
    const currentTime = new Date();
    const difference = currentTime - createdTime;
    console.log(Math.floor(difference / (24 * 60 * 60 * 1000)));
    return Math.floor(difference / (24 * 60 * 60 * 1000));
  };

  const jobId = job?._id;
  return (
    <div className="border shadow-lg p-4 rounded-lg">
      <div className="flex justify-between mb-3">
        <p className="text-gray-500 text-sm">
          {jobFunction(job?.createdAt) > 0
            ? `${jobFunction(job?.createdAt)} days ago`
            : "Today"}
        </p>
        <FaRegBookmark className="cursor-pointer" />
      </div>
      <div className="flex gap-4 items-center">
        <div className="border-[1px] flex items-center justify-center py-4 p-2 rounded-md">
          <img
            className="w-12"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrMEob_i26VBvF7hJU7hsdzfbgxZPgDJhRQw&s"
            alt=""
          />
        </div>
        <div className="my-2">
          <p className="text-lg font-semibold">{job?.company?.name}</p>
          <p className="text-sm text-gray-400">India</p>
        </div>
      </div>
      <div>
        <p className="text-2xl font-bold my-2">{job?.title}</p>
        <p className="text-sm text-gray-500">{job?.description}</p>
        <div className="flex gap-4 my-4">
          <Badge
            variant="outline"
            className="text-red-400 hover:border-red-400 transition-all cursor-pointer"
          >
            {job?.position} Position
          </Badge>
          <Badge
            variant="outline"
            className="text-blue-400 hover:border-blue-400 transition-all cursor-pointer"
          >
            {job?.jobType}
          </Badge>
          <Badge
            variant="outline"
            className="text-violet-600 hover:border-violet-600 transition-all cursor-pointer"
          >
            INR{job?.salary}
          </Badge>
        </div>
        <div className="flex gap-5 mt-5">
          <Button
            variant="outline"
            onClick={() => navigate(`/jobs/description/${jobId}`)}
          >
            Details
          </Button>
          <Button className="bg-violet-600 text-white">Save For Later</Button>
        </div>
      </div>
    </div>
  );
}

export default Job;
