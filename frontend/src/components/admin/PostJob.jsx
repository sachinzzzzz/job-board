import React, { useState } from "react";
import Navbar from "../ui/shared/navbar";
import Footer from "../ui/shared/Footer";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";
import { JOB_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PostJob = () => {
  const navigate= useNavigate();
  const [input, setInput] = useState({
    name: "",
    title: "",
    description: "",
    salary: 10,
    location: "",
    jobType: "",
    experience: "",
    position: 0,
    file: null,
  });

  const [loading, setLoading] = useState(false);

  //event handler
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  //file handler
  const changeFileHandler = (e) => {
    const file = e.target.files?.[0];
    setInput({ ...input, file });
  };

  //submit handler 1
  const submitHandler1 = async (e) => {
    e.preventDefault();
    console.log(input);

    const formData = new FormData();
    formData.append("name", input.name);
    formData.append("title", input.title);
    formData.append("description", input.description);
    formData.append("salary", input.salary);
    formData.append("location", input.location);
    formData.append("jobType", input.jobType);
    formData.append("experience", input.experience);
    formData.append("position", input.position);
    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      setLoading(true);
      const res = await axios.post(`${JOB_API_END_POINT}/post`, input, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/admin/jobs");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="text-center ">
        <div className="flex flex-col gap-5 my-8">
          <h1 className="text-5xl font-bold">
            Find Talent Faster &<br />
            <span className="text-[#088178]">Hire Smarter</span>
          </h1>
          <p>
            you're building futures. Every hire has the potential to elevate a
            team, transform a company, and shape success.
          </p>
        </div>
      </div>
      <div className="flex items-center w-fit mx-auto my-5 border border-gray-300 shadow-xl">
        <form className="p-8" onSubmit={submitHandler1}>
          <h1 className="text-center  font-bold text-2xl mb-6">
            Provide Job Informations
          </h1>
          <div className="grid grid-cols-2 gap-2">
          <div>
              <Label>Name</Label>
              <Input
                type="text"
                name="name"
                value={input.name}
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            <div>
              <Label>Title</Label>
              <Input
                type="text"
                name="title"
                value={input.title}
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            <div>
              <Label>Salary</Label>
              <Input
                type="number"
                name="salary"
                value={input.salary}
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            <div>
              <Label>Location</Label>
              <Input
                type="text"
                name="location"
                value={input.location}
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            <div>
              <Label>Job Type</Label>
              <Input
                type="text"
                name="jobType"
                value={input.jobType}
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            <div>
              <Label>Experience</Label>
              <Input
                type="number"
                name="experience"
                value={input.experience}
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            <div>
              <Label>Position</Label>
              <Input
                type="number"
                name="position"
                value={input.position}
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            <div >
              <Label>Company Logo</Label>
              <Input
                type="file"
                accept="image/*"
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                onChange={changeFileHandler}
              />
            </div>
          </div>
          <div>
            <Label>Description</Label>
            <Input
              type="text"
              name="description"
              value={input.description}
              onChange={changeEventHandler}
              className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
            />
          </div>

          {loading ? (
            <Button className="w-full my-4">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please Wait
            </Button>
          ) : (
            <Button
              type="submit"
              className="bg-black text-white rounded-xl hover:bg-gray-600 mt-4 w-full"
            >
              Post New Job
            </Button>
          )}
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default PostJob;
