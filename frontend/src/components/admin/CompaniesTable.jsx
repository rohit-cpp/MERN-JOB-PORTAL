import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Edit2, MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import store from "@/redux/store";

const CompaniesTable = () => {
  const { companies } = useSelector((store) => store.company);
  return (
    <div>
      <Table>
        <TableCaption> A list of recent registered companies</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <>
            {companies?.map((company) => (
              <tr>
                <TableCell>
                  <Avatar className="h-15 w-15">
                    <AvatarImage src={company.logo} />
                  </Avatar>
                </TableCell>
                <TableCell>{company.name}</TableCell>
                <TableCell>{company.createdAt.split("T")[0]}</TableCell>
                <TableCell>
                  <Popover>
                    <PopoverTrigger>
                      {" "}
                      <MoreHorizontal className="cursor-pointer" />
                      <PopoverContent className="w-25">
                        <div className="flex items-center gap-2 w-fit cursor-pointer">
                          <Edit2 className="w-4 h-4" />
                          <span>Edit</span>
                        </div>
                      </PopoverContent>
                    </PopoverTrigger>
                  </Popover>
                </TableCell>
              </tr>
            ))}
          </>
        </TableBody>
      </Table>
    </div>
  );
};

export default CompaniesTable;
