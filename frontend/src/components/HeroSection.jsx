import React from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="text-center ">
      <div className="flex flex-col gap-5 my-8">
        
        <h1 className="text-5xl font-bold">
          Search and Apply<br />
          
        </h1>
        
      </div>
      <div
        className="flex w-[48%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto
      "
      >
        <input
          type="text"
          placeholder="enter a job profile"
          className="outline-none border-none w-full "
        />
        <Button className="rounded-r-full bg-blue-600">
          <Search />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
