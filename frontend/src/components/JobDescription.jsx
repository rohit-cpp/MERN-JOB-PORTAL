import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Navbar from "./shared/Navbar";

const JobDescription = () => {
  const isApplied = true;
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="px-20 py-14">
        <h1 className="font-bold text-4xl">Frontend Developer</h1>
        <p className="mt-1">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio,
          tempora?
        </p>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row gap-3 pt-3 ">
            <Badge className="text-blue-700 font-bold" variant="ghost">
              12 Position
            </Badge>
            <Badge className="text-yellow-700 font-bold" variant="ghost">
              Part Time
            </Badge>
            <Badge className="text-emerald-700 font-bold" variant="ghost">
              12 LPA
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
              Frontend Developer
            </span>{" "}
          </h1>
          <h1 className="font-bold my-1">
            Location:{" "}
            <span className="pl-4 font-normal text-gray-800">Hyderbad</span>{" "}
          </h1>
          <h1 className="font-bold my-1">
            Description:{" "}
            <span className="pl-4 font-normal text-gray-800">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
              excepturi mollitia debitis
            </span>{" "}
          </h1>
          <h1 className="font-bold my-1">
            Experience:{" "}
            <span className="pl-4 font-normal text-gray-800">2 Yrs</span>{" "}
          </h1>
          <h1 className="font-bold my-1">
            Salary:{" "}
            <span className="pl-4 font-normal text-gray-800">12Lpa</span>{" "}
          </h1>
          <h1 className="font-bold my-1">
            Total Applicant:{" "}
            <span className="pl-4 font-normal text-gray-800">4</span>{" "}
          </h1>
          <h1 className="font-bold my-1">
            Date Posted:{" "}
            <span className="pl-4 font-normal text-gray-800">12/05/2025</span>{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
