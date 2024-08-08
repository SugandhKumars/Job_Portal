import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

function CategoryCarousel() {
  const category = [
    "Frontend Developer",
    "Backend Developer",
    "Devops Engineer",
    "Full Stack Developer",
    "Android Developer",
  ];
  return (
    <div className="w-[40%]   mx-auto my-16">
      <Carousel>
        <CarouselContent>
          {category.map((cat) => (
            <CarouselItem className="basis-1/2  text-center ">
              <button className="px-3 py-2 rounded-full border-[1px] border-violet-600">
                {cat}
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default CategoryCarousel;
