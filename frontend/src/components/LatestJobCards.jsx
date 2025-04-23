import React from "react";
import { Badge } from "./ui/badge";

const LatestJobCards = () => {
  return (
    <div className="flex flex-col items-start p-3 mx-2 mt-8 rounded-md shadow-xl bg-white border border-gray-200">
      <div>
        <h1 className="font-medium text-lg ">Company Name</h1>
        <p className="tetx-sm flex text-gray-500">India</p>
      </div>
      <div>
        <h1 className="font-bold flex text-lg my-2">Job Title</h1>
        <p className="text-sm text-left text-gray-600 mb-4">
          Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, vel?
        </p>
      </div>
      <div>
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
    </div>
  );
};

export default LatestJobCards;
