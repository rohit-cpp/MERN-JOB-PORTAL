import React from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Contact, Mail, Pen } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobsTable from "./AppliedJobsTable";

const skills = [
  "Html",
  "Css",
  "Javascript",
  "Reactjs",
  "Angular",
  "Node",
  "Nextjs",
];
const Profile = () => {
  const isResume = true;
  return (
    <div>
      <Navbar />
      <div className="pt-15 px-25">
        <div className="max-w-7xl mx-auto bg-white border border-gray-200 rounded-2xl my-3 p-8 ">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="./public/images.png" alt="profile" />
                </Avatar>
              </div>
              <div>
                <h1 className="font-medium text-xl">Full Name</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Rerum ipsa minus qui!
                </p>
              </div>
            </div>
            <div>
              {" "}
              <Button
                className="text-right cursor-pointer bg-yellow-400"
                variant="outline"
              >
                {" "}
                <Pen />
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-4 pt-4 px-6">
            <div className="flex gap-2">
              <Mail />
              <span>@gmail.com</span>
            </div>
            <div className="flex gap-2">
              <Contact />
              <span>8426582625</span>
            </div>
            <div className="flex gap-2 mt-2">
              <h1 className="text-xl">Skills :</h1>
              {skills.length !== 0 ? (
                skills.map((item, index) => <Badge key={index}>{item}</Badge>)
              ) : (
                <span>NA</span>
              )}
            </div>
            <div className="grid w-full max-w-sm items-center">
              <Label className="text-md font-bold"></Label>
              {isResume ? (
                <a
                  target="blank"
                  href="https://"
                  className="text-xl w-27 text-blue-500 hover:text-blue-400"
                >
                  {" "}
                  My Resume
                </a>
              ) : (
                <span>NA</span>
              )}
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-center text-3xl font-semibold p-10 underline">
          List of Applied Jobs
        </h1>
        <AppliedJobsTable />
      </div>
    </div>
  );
};

export default Profile;
