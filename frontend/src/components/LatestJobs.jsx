import React from "react";
import LatestJobCards from "./LatestJobCards";

const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const LatestJobs = () => {
  return (
    <div className="max-w-7xl text-center my-20">
      <h1 className="text-6xl font-bold ">
        {" "}
        <span className="text-[#6A38C2] mr-3"> Latest & Top </span>
        Job Openings
      </h1>

      <div className="grid grid-cols-3 my-5 px-7">
        {randomJobs.slice(0, 6).map((item, index) => (
          <LatestJobCards />
        ))}
      </div>
    </div>
  );
};

export default LatestJobs;
