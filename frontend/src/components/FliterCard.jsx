import React from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "@radix-ui/react-label";

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"],
  },
  {
    filterType: "Industry",
    array: [
      "Frontend Developer",
      "Backend Developer",
      "FullStack Developer",
      "DevOps",
      "Cloud Computing",
    ],
  },
  {
    filterType: "Salary",
    array: ["0-40k", "42k-1 Lakh", "1 Lakh-5 Lakh"],
  },
];

const FilterCard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Filter Jobs</h1>
      <hr className="mt-3" />
      <div>
        <RadioGroup>
          {filterData.map((data, index) => (
            <div key={index} className="mt-4">
              <h2 className="font-semibold text-xl">{data.filterType}</h2>
              {data.array.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 mt-1">
                  <RadioGroupItem
                    className="border border-black"
                    value={item}
                    id={`${data.filterType}`}
                  />
                  <Label htmlFor={`${data.filterType}`}>{item}</Label>
                </div>
              ))}
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
};

export default FilterCard;
