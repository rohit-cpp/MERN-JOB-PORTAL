import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Contact, Mail, Pen } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobsTable from "./AppliedJobsTable";
import UpdateProfileDialoug from "./UpdateProfileDialoug";
import { useSelector } from "react-redux";
import store from "@/redux/store";
import useGetAppliedJobs from "@/hooks/useGetAppliedJobs";

const skills = [
  "Html",
  "Css",
  "Javascript",
  "Reactjs",
  "Angular",
  "Node",
  "Nextjs",
];
const isResume = true;
const Profile = () => {
  useGetAppliedJobs();
  const [open, setOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);

  return (
    <div>
      <Navbar />
      <div className="pt-15 px-25">
        <div className="max-w-7xl mx-auto bg-white border border-gray-200 rounded-2xl my-3 p-8 ">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage
                    src={user?.profile?.profilePhoto}
                    alt="profile"
                  />
                </Avatar>
              </div>
              <div>
                <h1 className="font-medium text-xl">{user?.fullname}</h1>
                <p>{user?.profile?.bio}</p>
              </div>
            </div>
            <div>
              {" "}
              <Button
                onClick={() => setOpen(true)}
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
              <span>{user?.email}</span>
            </div>
            <div className="flex gap-2">
              <Contact />
              <span>{user?.phoneNumber}</span>
            </div>
            <div className="flex gap-2 mt-2">
              <h1 className="text-xl">Skills :</h1>
              {user?.profile?.skills.length !== 0 ? (
                user?.profile?.skills.map((item, index) => (
                  <Badge key={index}>{item}</Badge>
                ))
              ) : (
                <span>NA</span>
              )}
            </div>
            <div className="grid w-full max-w-sm items-center">
              <Label className="text-md font-bold">My Resume</Label>
              {isResume ? (
                <a
                  target="blank"
                  href={user?.profile?.resume}
                  className="text-xl w-70 text-blue-500 hover:text-blue-400"
                >
                  {user?.profile?.resumeOriginalName}
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
      <UpdateProfileDialoug open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;
