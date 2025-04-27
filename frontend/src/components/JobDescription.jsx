import React, { useEffect } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Navbar from "./shared/Navbar";
import { useParams } from "react-router-dom";

import axios from "axios";
import { JOB_API_END_POINT } from "@/utils/constant";
import { setSingleJob } from "@/redux/jobSlice";
import { useDispatch, useSelector } from "react-redux";
import store from "@/redux/store";

const JobDescription = () => {
  const { singleJob } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.auth);
  const isApplied =
    singleJob?.applications?.some(
      (application) => application.applicant === user?._id
    ) || false;
  const params = useParams();
  const jobId = params.id;

  const dispatch = useDispatch();
  //   useGetSingleJob(jobId); // custom hook to get single jobs

  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setSingleJob(res.data.job));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleJob();
  }, [jobId, dispatch, user?._id]);
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="px-20 py-14">
        <h1 className="font-bold text-4xl">{singleJob?.title}</h1>
        <p className="mt-1">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio,
          tempora?
        </p>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row gap-3 pt-3 ">
            <Badge className="text-blue-700 font-bold" variant="ghost">
              {singleJob?.position}Position
            </Badge>
            <Badge className="text-yellow-700 font-bold" variant="ghost">
              {singleJob?.jobType}
            </Badge>
            <Badge className="text-emerald-700 font-bold" variant="ghost">
              {singleJob?.salary}
            </Badge>
          </div>
          <div>
            <Button
              disabled={isApplied}
              className={` text-black cursor-pointer ${
                isApplied
                  ? "bg-gray-500 hover:bg-gray-400 cursor-not-allowed"
                  : " bg-amber-400 hover:bg-amber-600"
              }`}
            >
              {isApplied ? "Already Applied" : "Apply Now"}
            </Button>
          </div>
        </div>
        <h1 className="text-2xl font-semibold border-b-2 border-gray-300 mt-5 pt-5 pb-2">
          Job Description
        </h1>
        <div className="pt-5">
          <h1 className="font-bold my-1">
            Role:{" "}
            <span className="pl-4 font-normal text-gray-800">
              {singleJob?.title}
            </span>{" "}
          </h1>
          <h1 className="font-bold my-1">
            Location:{" "}
            <span className="pl-4 font-normal text-gray-800">
              {singleJob?.location}
            </span>{" "}
          </h1>
          <h1 className="font-bold my-1">
            Description:{" "}
            <span className="pl-4 font-normal text-gray-800">
              {singleJob?.description}
            </span>{" "}
          </h1>
          <h1 className="font-bold my-1">
            Experience:{" "}
            <span className="pl-4 font-normal text-gray-800">
              {singleJob?.experience}
            </span>{" "}
          </h1>
          <h1 className="font-bold my-1">
            Salary:{" "}
            <span className="pl-4 font-normal text-gray-800">
              {singleJob?.salary}Lpa
            </span>{" "}
          </h1>
          <h1 className="font-bold my-1">
            Total Applicant:{" "}
            <span className="pl-4 font-normal text-gray-800">
              {singleJob?.applications?.length}
            </span>{" "}
          </h1>
          <h1 className="font-bold my-1">
            Date:
            <span className="pl-4 font-normal text-gray-800">
              {singleJob?.createdAt.split("T")[0]}
            </span>{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
