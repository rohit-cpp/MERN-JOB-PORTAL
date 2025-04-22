import React from "react";
import { Button } from "./ui/button";

const HeroSections = () => {
  return (
    <div className="text-center mt-10">
      <span className="px-4 py-2 text-3xl rounded-xl bg-gray-200 text-[#F83002] font-medium">
        No 1 Job HUNT Platform
      </span>
      <h1 className="text-8xl font-bold mt-8">
        Search, Apply & <br /> Get Your{" "}
        <span className="text-[#6A38C2]">Dream Jobs</span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi itaque
        animi voluptatum dicta. Voluptates laudantium aperiam quibusdam porro
        sequi necessitatibus atque, esse aut.
      </p>
      <div className="flex w-[40%] mt-12 shadow-lg border border-gray-300 p-1 rounded-md item-center gap-4 mx-auto">
        <input
          type="text"
          placeholder="Find your dream job"
          className="outline-none border-none w-full"
        />
        <Button className="cursor-pointer text-black bg-amber-400 hover:bg-amber-600">
          Search
        </Button>
      </div>
    </div>
  );
};

export default HeroSections;
