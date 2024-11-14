import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getAdminJobs,  getAllJob, getJobById, postJob } from "../controllers/job.controller.js";
import { singleUpload } from "../middlewares/multers.js";
const router = express.Router();

router.route("/post").post(isAuthenticated,singleUpload,postJob);
router.route("/get").get(isAuthenticated, getAllJob);
router.route("/getadminjobs").get(isAuthenticated, getAdminJobs);
router.route("/get/:id").get(isAuthenticated, getJobById);
 export default router;