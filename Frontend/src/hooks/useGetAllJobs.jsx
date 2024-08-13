import { setAllJobs } from "@/redux/jobSlice";
import { JOB_API_ENDPOINT } from "@/utils/constanst";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function useGetAllJobs() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getJobs = async () => {
      try {
        const res = await axios.get(`${JOB_API_ENDPOINT}/getAllJob`, {
          withCredentials: true,
        });
        const data = await res.data;
        dispatch(setAllJobs(data?.jobs));
      } catch (error) {
        console.log(error);
      }
    };
    getJobs();
  }, []);
}

export default useGetAllJobs;
