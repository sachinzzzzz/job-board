import React from "react";
import Navbar from "./ui/shared/navbar";
import Footer from "./ui/shared/Footer";
import Job from "./Job";
import { useSelector } from "react-redux";

//const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];

const Jobs = () => {
  const {allJobs}=useSelector(store=>store.job);
  return (
    <div>
      <Navbar />
      <div className="flex gap-5 max-w-7xl mx-auto mt-5">
        {allJobs.length <= 0 ? (
          <span>Job Not Available</span>
        ) : (
          <div className="flex-1 h-[90vh] overflow-y-auto pb-5">
            <div className="grid grid-cols-3 gap-3">
              {
               allJobs.map((job) => (
                 <div key={job._id}>
                   <Job job={job}/>
                 </div>
                ))
              }
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Jobs;
