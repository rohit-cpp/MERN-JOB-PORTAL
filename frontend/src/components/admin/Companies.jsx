import React from "react";
import Navbar from "../shared/Navbar";
import { Button } from "../ui/button";

const Companies = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto my-10">
        <Input className="w-fit" placeholder="Filter by name" />
        <Button>New Company</Button>
      </div>
    </div>
  );
};

export default Companies;
