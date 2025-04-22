import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { LogOut, Pointer, User2 } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = false;
  return (
    <div className="bg-purple-400">
      <div className="flex items-center justify-between px-15 mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-semibold">
            Job <span className="text-[#f80002]">Portal</span>{" "}
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <ul className="flex font-medium items-center gap-5">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              {" "}
              <Link to="/jobs">Jobs</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/browse">Browse</Link>{" "}
            </li>
          </ul>
          {!user ? (
            <div>
              {" "}
              <Link to="/login">
                <Button
                  variant="outline"
                  className="mx-1 cursor-pointer bg-amber-400 hover:bg-amber-600"
                >
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button
                  variant="outline"
                  className="mx-1 cursor-pointer bg-amber-400 hover:bg-amber-600"
                >
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer m-3">
                  <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="flex">
                  <Avatar className="cursor-pointer m-2">
                    <AvatarImage src="https://github.com/shadcn.png" />
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">Rohit Gawande</h4>
                    <p className="text-sm text-muted-foreground">
                      Full Stack (MERN) Developer
                    </p>
                  </div>
                </div>
                <div className="mt-2 flex gap-8 cursor-pointer">
                  <Button variant="link" className="cursor-pointer">
                    <User2 /> View Profile{" "}
                  </Button>

                  <Button variant="link" className="cursor-pointer">
                    <LogOut /> Logout{" "}
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
