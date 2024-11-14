import React from "react";
import { Badge } from "./ui/badge";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

const LatestJobsCards = ({ job }) => {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer ">
      <div className="flex items-center gap-2 my-2">
        <div>
          <Button
            className="p-6 border border-gray-300"
            variant="outline"
            size="icon"
          >
            <Avatar>
              <AvatarImage src={job?.logo} />
            </Avatar>
          </Button>
        </div>
        <div className="ml-4">
          <h1 className="font-medium text-lg">{job?.name}</h1>
          <p className="text-sm text-gray-500">{job?.location}</p>
        </div>
      </div>

      <div>
        <h1 className="font-bold text-lg my-2">{job?.title}</h1>
        <p className="text-sm text-gray-600">{job?.description}</p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className={"text-blue-700 font-bold"} variant="ghost">
          {job?.position} Position
        </Badge>
        <Badge className={"text-red-500 font-bold"} variant="ghost">
          {job?.jobType}
        </Badge>
        <Badge className={"text-blue-900 font-bold"} variant="ghost">
          {job?.salary} LPA
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobsCards;
