import {Job} from "../models/job.model.js";
import cloudinary from "../utils/cloudinary.js";
import getDataUri from "../utils/dataUri.js";
//job created by admin
export const postJob = async(req,res)=>{
    try {
        const {name,title,description, salary,location,jobType,experience,position}= req.body;
        const userID = req.id;

        if(!name||!title || !description  || !salary || !experience || !location || !jobType || !position ){
            return res.status(400).json({
                message:"something is missing",
                success:false 
            });
        }
        
       //cloudinary comes here after
        const file = req.file;
        const fileUri = getDataUri(file);
        const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
       
        const job = await Job.create({
            name,
            title,
            description,
            salary:Number(salary),
            location,
            jobType,
            experienceLevel:experience,
            position,
            logo:cloudResponse.secure_url,
            created_by:userID 
        })
        return res.status(200).json({
            message:"new job created sucessfully",
            job,
            success:true 
        });
    } catch (error) {
        console.log(error);
    }
}

//for student or user
export const getAllJob = async(req,res)=>{
    try {
        // here we get the key word by using query to filter the job
        const keyword = req.query.keyword || "";  
        const query = {
            $or:[
                {titel:{$regex:keyword, $options:"i"}},
                {description:{$regex: keyword, $options:"i"}}
            ]
        };
        //important
        //populate use to show data of other module also
        //here if we don't use populate the only company id will print
        //if if we use populate then we also get company information 
        const jobs = await Job.find(query).sort({createdAt:-1});  
        if(!jobs){
            return res.status(404).json({
                message:"jobs not found.",
                success:false
            });
        }
        return res.status(200).json({
            jobs,
            success:true
        });
    } catch (error) {
       console.log(error); 
    }
}

export const getJobById = async(req,res)=>{
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId).populate({
            path:"applications"
        });
        if(!job){
            return res.status(404).json({
                message:"job not found",
                success:false
            });
        }
        return res.status(200).json({
            job,
            success:true
        });
    } catch (error) {
        console.log(error);
    }
}

//job post or created by admin
export const getAdminJobs = async(req,res)=>{
    try {
        const adminId =req.id;
        const jobs = await Job.find({created_by:adminId});
        if(!jobs){
            return res.status(404).json({
                message:"jobs not found",
                success:false
            });
        }
        return res.status(200).json({
            jobs,
            success:true
        });
    } catch (error) {
        console.log(error);
    }
}