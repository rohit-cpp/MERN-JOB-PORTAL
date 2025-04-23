import React from "react";
import Navbar from "./shared/Navbar";
import FliterCard from "./FliterCard";
import Job from "./Job";
import { SpaceIcon } from "lucide-react";
import { Badge } from "./ui/badge";

const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const Jobs = () => {
  return (
    <div>
      <Navbar />
      <div className="flex p-3">
        <div className="max-w-7xl mx-auto mt-5">
          <div className="flex gap-5 ">
            <div className="w-50 h-120">
              {" "}
              <FliterCard />
            </div>
          </div>
        </div>

        <div>
          {jobsArray.length <= 0 ? (
            <span>Job not found</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
              <div className="grid grid-cols-3 gap-4 p-4">
                {jobsArray.map((item, index) => (
                  <Job />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
