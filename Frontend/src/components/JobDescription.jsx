import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useParams } from "react-router-dom";
import { APPLICATION_API_ENDPOINT, JOB_API_ENDPOINT } from "@/utils/constanst";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setSingleJob } from "@/redux/jobSlice";
import { toast } from "sonner";

function JobDescription() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singleJob } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.user);
  const jobData = singleJob?.job;
  const isInitialApply =
    singleJob?.applications?.some(
      (application) => application.applicant === user?._id
    ) || false;
  // Getting the by Id
  const [isApplied, setIsApplied] = useState(isInitialApply);
  useEffect(() => {
    const singkeJob = async () => {
      try {
        const res = await axios.get(`${JOB_API_ENDPOINT}/jobBy/${id}`, {
          withCredentials: true,
        });
        console.log(res.data.job);
        dispatch(setSingleJob(res.data));
        setIsApplied(
          res.data.job.applications.some(
            (application) => application.applicant === user?.id
          )
        );
      } catch (error) {
        console.log(error);
      }
    };
    singkeJob();
  }, [id]);

  //  Applying the Job
  const Apply = async () => {
    try {
      const res = await axios.get(`${APPLICATION_API_ENDPOINT}/job/${id}`, {
        withCredentials: true,
      });
      console.log(res.data);
      if (res.data.success) {
        toast.success(res.data.message);
        const updatedSingleJob = {
          ...singleJob,
          applications: [...singleJob.applications, { applicant: user?._id }],
        };
        dispatch(setSingleJob(updatedSingleJob));
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="max-w-7xl mx-auto mt-14">
      <div className="flex justify-between mb-3  ">
        <div>
          <h2 className="font-bold text-xl mb-2">{jobData?.title}</h2>
          <div className="flex gap-4">
            <Badge variant="outline" className="border-red-500">
              {jobData?.position} Position
            </Badge>
            <Badge variant="outline" className="border-blue-500">
              {jobData?.jobType}
            </Badge>
            <Badge variant="outline" className="border-violet-500">
              INR {jobData?.salary}
            </Badge>
          </div>
        </div>
        {isApplied ? (
          <Button disable="true" className="bg-gray-500">
            Already applied
          </Button>
        ) : (
          <Button className="bg-violet-500" onClick={() => Apply()}>
            Apply Now
          </Button>
        )}
      </div>
      <p className="my-5 text-lg">Job Description</p>
      <hr className="mb-4" />
      <div className="flex gap-3">
        <span className="font-bold">Role:</span> <span>{jobData?.title}</span>
      </div>
      <div className="flex gap-3">
        <span className="font-bold">Location:</span>
        <span>{jobData?.location}</span>
      </div>
      <div className="flex gap-3">
        <span className="font-bold">Description : </span>{" "}
        <span>{jobData?.description}</span>
      </div>
      <div className="flex gap-3">
        <span className="font-bold">Experience:</span>{" "}
        <span>{jobData?.experience} Years</span>
      </div>
      <div className="flex gap-3">
        <span className="font-bold">Salary : </span>{" "}
        <span> INR {jobData?.salary}</span>
      </div>
      <div className="flex gap-3">
        <span className="font-bold">Total Applicants:</span>{" "}
        <span> {jobData?.applications.length}</span>
      </div>
      <div className="flex gap-3">
        <span className="font-bold">Posted Date</span>{" "}
        <span>{jobData?.createdAt.split("T")[0]}</span>
      </div>
    </div>
  );
}

export default JobDescription;
