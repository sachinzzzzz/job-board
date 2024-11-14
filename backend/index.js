import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
import path from "path";
dotenv.config({});
const app = express(); 

const _dirname= path.resolve();

//middle ware 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOption = {
    origin:'http://localhost:5173',
    credentials:true
}
app.use(cors(corsOption));


const PORT = process.env.PORT || 8000;
// const PORT = 3000;

// apis come here
app.use("/api/v1/user",userRoute);
app.use("/api/v1/job",jobRoute);
app.use("/api/v1/application",applicationRoute);
//------ 

app.use(express.static(path.join(_dirname,"/frontend/dist")));
app.get('*',(req,res)=>{
    res.sendFile(path.resolve(_dirname,"frontend","dist","index.html"));
})


app.listen(PORT,()=>{
    connectDB(); 
    console.log(`server is running in port ${PORT}`); // use template literals
})