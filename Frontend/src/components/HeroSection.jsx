import React from "react";
import { IoIosSearch } from "react-icons/io";

function HeroSection() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center my-5">
        <span className="px-4 py-2 bg-gray-100 text-orange-500 font-medium text-center rounded-full">
          No. 1 Job Hunt Website
        </span>
        <p className="my-8 text-5xl font-bold">
          Search ,Apply &
          <br />
          Get Your <span className="text-violet-700">Dream Jobs</span>
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatem! Lorem ipsum dolor sit.
        </p>
        <div className="w-[40%] mx-auto my-5 rounded-full  border  shadow-lg flex items-center gap-5">
          <input type="text" className="w-[90%] px-2 outline-none " />
          <button className="p-2 px-3  bg-violet-700 rounded-r-full">
            <IoIosSearch className="text-xl  text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
