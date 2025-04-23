import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";

const Job = () => {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-200">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">2 days ago</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />{" "}
        </Button>
      </div>

      <div className="flex items-center gap-2 my-2">
        <Button variant="outline">
          <Avatar>
            <AvatarImage src="./public/images.png" className="h-5 w-5" />
          </Avatar>
        </Button>
        <div>
          {" "}
          <h1 className="font-medium text-lg">Company Name</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">Title</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          praesentium quaerat dolore inventore ea alias a consequatur saepe enim
          facere.
        </p>
      </div>
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
      <div className="flex items-center gap-4 mt-4 ">
        <Button
          variant="outline "
          className="cursor-pointer bg-blue-300 hover:bg-amber-500"
        >
          Details
        </Button>
        <Button
          variant="outline "
          className="cursor-pointer bg-blue-300 hover:bg-amber-500"
        >
          Save for later
        </Button>
      </div>
    </div>
  );
};

export default Job;
