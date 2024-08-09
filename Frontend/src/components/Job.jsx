import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { FaRegBookmark } from "react-icons/fa";
import { Pointer } from "lucide-react";
import { useNavigate } from "react-router-dom";
function Job() {
  const navigate = useNavigate();
  const jobId = "kjhfkadhkjh";
  return (
    <div className="border shadow-lg p-4 rounded-lg">
      <div className="flex justify-between mb-3">
        <p className="text-gray-500 text-sm">2 Days Ago</p>
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
          <p className="text-lg font-semibold">Company Name</p>
          <p className="text-sm text-gray-400">India</p>
        </div>
      </div>
      <div>
        <p className="text-2xl font-bold my-2">Title</p>
        <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum magnam
          libero debitis iste suscipit. Sunt, libero. At, explicabo.
          Exercitationem assumenda aut similique officiis illo at fugit optio
          dolorem iusto eius!
        </p>
        <div className="flex gap-4 my-4">
          <Badge
            variant="outline"
            className="text-red-400 hover:border-red-400 transition-all cursor-pointer"
          >
            12 Position
          </Badge>
          <Badge
            variant="outline"
            className="text-blue-400 hover:border-blue-400 transition-all cursor-pointer"
          >
            Part Time
          </Badge>
          <Badge
            variant="outline"
            className="text-violet-600 hover:border-violet-600 transition-all cursor-pointer"
          >
            24 LPA
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
