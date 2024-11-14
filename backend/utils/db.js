import mongoose from "mongoose";

const connectDB = async() =>{
    try {
        await mongoose.connect("mongodb+srv://sachin:Sachin12345@jobboard-cluster.ma9dh.mongodb.net/?retryWrites=true&w=majority&appName=jobBoard-cluster");
        console.log('mongoose connected sucessfully');
    } catch (error) {
       console.log(error); 
    }
}
export default connectDB;