import React from "react";
import { Badge } from "./ui/badge";

const LatestJobCards = ({ job }) => {
  return (
    <div className="flex flex-col items-start p-3 mx-2 mt-8 rounded-md shadow-xl bg-white border border-gray-200">
      <div>
        <h1 className="font-medium text-lg ">{job?.company?.name}</h1>
        <p className="tetx-sm flex text-gray-500">India</p>
      </div>
      <div>
        <h1 className="font-bold flex text-lg my-2">{job?.title}</h1>
        <p className="text-sm text-left text-gray-600 mb-4">
          {job?.description}
        </p>
      </div>
      <div>
        <Badge className="text-blue-700 font-bold" variant="ghost">
          {job?.position} Positions
        </Badge>
        <Badge className="text-yellow-700 font-bold" variant="ghost">
          {job?.jobType}
        </Badge>
        <Badge className="text-emerald-700 font-bold" variant="ghost">
          {job?.salary}LPA
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobCards;
