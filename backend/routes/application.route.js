import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { applyJob, getApplicants, getappliedJobs, updateStatus } from "../controllers/application.controller.js";
const router = express.Router();

router.route("/apply/:id").get(isAuthenticated, applyJob);
router.route("/get").get(isAuthenticated,getappliedJobs);
router.route("/:id/applicants").get(isAuthenticated, getApplicants);
router.route("/satus/:id/update").post(isAuthenticated,updateStatus);
 export default router; 