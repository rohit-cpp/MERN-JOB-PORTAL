import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });
  const navigate = useNavigate();
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div>
      <div>
        {" "}
        <Navbar />{" "}
      </div>
      <div className="flex items-center justify-center max-w-7xl mx-auto my-10">
        <form
          onSubmit={submitHandler}
          className="w-1/3 border border-gray-300 rounded-md p-8 "
        >
          <h1 className="font-bold text-4xl mb-10 text-center">Login Form </h1>
          {/* <div className="mt-6">
            <Label className="m-2"> Full Name</Label>
            <Input type="text" placeholder="Enter full name" />
          </div> */}
          <div className="mt-6">
            <Label className="m-2"> Email</Label>
            <Input
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder="Enter your email"
            />
          </div>

          {/* <div className="mt-6">
            <Label className="m-2"> Phone Number</Label>
            <Input type="text" placeholder="Enter phone number" />
          </div> */}
          <div className="mt-6">
            <Label className="m-2">Password</Label>
            <Input
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-center ">
            <RadioGroup className="flex items-center justify-around w-full m-3 ">
              {" "}
              <span className="mb-1">Who are you : </span>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="option-one">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === "recruiter"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="option-two">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          {/* <div className="m-2">
            {" "}
            <Label>Add Profile Photo</Label>{" "}
            <Input
              accept="image/*"
              type="file"
              className="cursor-pointer m-2"
            />
          </div> */}
          <Button type="submit" className="w-full my-4 cursor-pointer">
            Login
          </Button>
          <span className="text-sm">
            Dont have an account?{" "}
            <Link to="/signup" className=" text-blue-500 mx-1 cursor-pointer">
              Signup
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
