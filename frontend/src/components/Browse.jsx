import React from "react";
import Navbar from "./shared/Navbar";
import Job from "./Job";

const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const Browse = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto my-20 px-20">
        <h1 className="font-bold text-2xl my-10">
          Search Reuslts {"  "}({randomJobs.length})
        </h1>
        <div className="grid grid-cols-3 gap-4">
          {randomJobs.map((item, index) => {
            return (
              <div>
                {" "}
                <Job />{" "}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Browse;
