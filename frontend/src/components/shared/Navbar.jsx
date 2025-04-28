import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { LogOut, Pointer, User2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import store from "@/redux/store";
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import axios from "axios";
import { setUser } from "@/redux/authSlice";

const Navbar = () => {
  // const user = true;
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, {
        withCredentails: true,
      });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <div className="bg-purple-400 sticky">
      <div className="flex items-center justify-between px-15 mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-semibold">
            Job <span className="text-[#f80002]">Portal</span>{" "}
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <ul className="flex font-medium items-center gap-5">
            {user && user.role === "recruiter" ? (
              <>
                <li>
                  <Link to="/admin/companies">Companies</Link>
                </li>
                <li>
                  {" "}
                  <Link to="/admin/jobs">Jobs</Link>{" "}
                </li>
              </>
            ) : (
              <>
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
              </>
            )}
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
                  <AvatarImage src={user?.profile?.profilePhoto} />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="flex">
                  <Avatar className="cursor-pointer m-2">
                    <AvatarImage src={user?.profile?.profilePhoto} />
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">{user?.fullname}</h4>
                    <p className="text-sm text-muted-foreground">
                      {user?.profile?.bio}
                    </p>
                  </div>
                </div>
                <div className="mt-2 flex gap-8 cursor-pointer">
                  {user && user.role === "student" && (
                    <Button variant="link" className="cursor-pointer">
                      <User2 />
                      <Button variant="Link">
                        {" "}
                        <Link to="/profile"> View Profile</Link>{" "}
                      </Button>{" "}
                    </Button>
                  )}

                  <Button
                    onClick={logoutHandler}
                    variant="link"
                    className="cursor-pointer"
                  >
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
