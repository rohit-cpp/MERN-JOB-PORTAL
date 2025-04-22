import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";
const category = [
  "Frontend Developer",
  "Backend Developer",
  "Data Science",
  "Graphic Designer",
  "Full Stack Developer",
  "Video Editor  ",
];

const CategoryCarousel = () => {
  return (
    <div>
      <Carousel className="w-1/5 max-w-xl mx-auto my-10">
        <CarouselContent>
          {category.map((cat, index) => (
            <CarouselItem className="text-center">
              {" "}
              <Button className="cursor-pointer bg-[#6A38C2] hover:bg-[#9473cb] p-6 md:basis-1/2 lg:basis-1/3">
                {" "}
                {cat}
              </Button>{" "}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="cursor-pointer" />
        <CarouselNext className="cursor-pointer" />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
