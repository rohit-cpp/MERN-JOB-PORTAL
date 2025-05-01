import React, { useState } from "react";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";

const HeroSections = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };
  return (
    <div className="text-center mt-10">
      <span className="px-4 py-2 text-3xl rounded-xl bg-gray-200 text-[#F83002] font-medium">
        No 1 Job HUNT Platform
      </span>
      <h1 className="text-8xl font-bold mt-8">
        Search, Apply & <br /> Get Your{" "}
        <span className="text-[#6A38C2]">Dream Jobs</span>
      </h1>
      <p className="my-2">
        Search, apply, and land your dream job with ease. Explore thousands of
        opportunities across industries, connect with top employers, and take
        the next big step in your career journey—all through a powerful,
        user-friendly platform designed for success.
      </p>
      <div className="flex w-[40%] mt-12 shadow-lg border border-gray-300 p-1 rounded-md item-center gap-4 mx-auto">
        <input
          type="text"
          placeholder="Find your dream job"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          className="outline-none border-none w-full"
        />
        <Button
          onClick={searchJobHandler}
          className="cursor-pointer text-black bg-amber-400 hover:bg-amber-600"
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default HeroSections;
