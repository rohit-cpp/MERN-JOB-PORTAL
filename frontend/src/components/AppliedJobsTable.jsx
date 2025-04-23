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

const AppliedJobsTable = () => {
  return (
    <div className="px-20">
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
          {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
            <TableRow key={index}>
              <TableCell>17/04/2025</TableCell>
              <TableCell>Frontend Developer</TableCell>
              <TableCell>Tcs</TableCell>
              <TableCell>
                <Badge>Selected</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobsTable;
