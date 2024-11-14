import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'

import { useDispatch, useSelector } from 'react-redux'
import { setSingleJob } from '@/redux/jobsSlice'
import axios from 'axios'
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import { applescript } from 'globals'



const Job = ({job}) => {
 

  
//getting user and singlejob
const {user}=useSelector(store=>store.auth);
const {singleJob}=useSelector(store=>store.job);

//define is applied
const isInitiallyApplied= singleJob?.applications?.some(application=>application.applicant== user?._id)||false;

const[isApplied,setIsApplied]=useState(isInitiallyApplied);


 //apply handler
 const applyJobHandler= async()=>{
  try {
    const res=await axios.get(`${APPLICATION_API_END_POINT}/apply/${job?._id}`,{withCredentials:true});
    if(res.data.success){
      console.log(res.data);
      setIsApplied(true);
      const updatedSingleJob= {...singleJob,applications:[...singleJob.applications,{applicant:user?._id}]};
      dispatch(setSingleJob(updatedSingleJob));
      toast.success(res.data.message);
    }
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
  }
}

  //singlejob
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchSingleJobs = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get/${job?._id}`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setSingleJob(res.data.job));
          setIsApplied(res.data.job.applications.some(application=>application.applicant==user?._id))
          
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleJobs();
  }, [job?._id,dispatch,user?._id]);



 

  

  //days ago function
  const daysAgoFunction=(mongodbTime)=>{
   const createdAt= new Date(mongodbTime);
   const currentTime= new Date();
   const timeDifference= currentTime-createdAt;
   return Math.floor(timeDifference/(1000*24*60*60))
  };

 
  
  return (
    <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100 ml-3 mr-3'>
      <div className='flex items-center justify-between'>
        <p className="text-sm text-gray-500">{ daysAgoFunction(job?.createdAt)==0 ? 'Today':`${daysAgoFunction(job?.createdAt)} days ago`}</p>
        <Button variant="outline" className="rounded-full" size="icon"><Bookmark/></Button>
      </div>
      <div className='flex items-center gap-2 my-2'>
        <Button className="p-6 border border-gray-300" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src={job?.logo}/>
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">{job?.name}</h1>
          <p className="text-sm text-gray-500">{job?.location}</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">{job?.title}</h1>
        {/* <p className='text-sm text-gray-600'>{job?.description}</p> */}
        <p className='text-sm text-gray-600 mt-2 font-bold'>No of applicants: {job?.applications.length}</p>
        <p className='text-sm text-gray-600 mt-2 font-bold'>Experience: {job?.experienceLevel} Yrs</p>
      </div> 
      <div className="flex items-center gap-2 mt-4">
        <Badge className={"text-blue-700 font-bold"} variant="ghost">
          {job?.position} Positons
        </Badge>
        <Badge className={"text-red-500 font-bold"} variant="ghost">
          {job?.jobType}
        </Badge>
        <Badge className={"text-blue-900 font-bold"} variant="ghost">
          {job?.salary}LPA
        </Badge>
      </div>
      <div className='flxe items-center  mt-4 '>
        <Button onClick={isApplied ? null : applyJobHandler} disabled={isApplied} className="bg-[#592ca9] text-gray-100 hover:bg-[#c184ea] w-1/2  rounded-xl">{isApplied ?'Applied':'Apply Job'}</Button>
      </div>
    </div>
  )
}

export default Job
