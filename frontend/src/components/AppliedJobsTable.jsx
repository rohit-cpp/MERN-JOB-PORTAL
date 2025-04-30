import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";
import { useSelector } from "react-redux";
import store from "@/redux/store";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { MoreHorizontal } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const AppliedJobsTable = () => {
  const navigate = useNavigate();
  const { allAppliedJobs } = useSelector((store) => store.jobs);
  return (
    <div className="px-20 pb-100">
      <Table>
        {" "}
        {/* <TableCaption>List of Applied Jobs</TableCaption> */}
        <TableHeader>
          <TableRow className="text-2xl">
            <TableHead className="text-center">Date</TableHead>
            <TableHead className="text-center">Job Role</TableHead>
            <TableHead className="text-center">Company</TableHead>
            <TableHead className="text-center">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-center">
          {allAppliedJobs.length <= 0 ? (
            <span>You Havent Applied Job yet </span>
          ) : (
            allAppliedJobs.map((appliedJob) => (
              <TableRow key={appliedJob._id}>
                <TableCell>{appliedJob?.createdAt?.split("T")[0]}</TableCell>
                <TableCell>{appliedJob.job?.title}</TableCell>
                <TableCell>{appliedJob.job?.company?.name}</TableCell>
                <TableCell>
                  <Badge
                    className={`${
                      appliedJob?.status === "rejected"
                        ? "bg-red-400 cursor-pointer"
                        : appliedJob.status === "pending"
                        ? "bg-gray-400"
                        : "bg-green-400"
                    }`}
                  >
                    {appliedJob?.status === "rejected" ? (
                      <Popover>
                        <PopoverTrigger>
                          <MoreHorizontal className="cursor-pointer" />
                        </PopoverTrigger>
                        <PopoverContent className="w-55">
                          {
                            <div>
                              <h1>
                                Why were you rejected?{" "}
                                <Link
                                  to={"/help"}
                                  className="text-blue-700 cursor-pointer hover:text-blue-400"
                                >
                                  Get Solution from AI
                                </Link>
                              </h1>
                            </div>
                          }
                        </PopoverContent>
                      </Popover>
                    ) : null}
                    {appliedJob.status.toUpperCase()}
                  </Badge>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobsTable;
