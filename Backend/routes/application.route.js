import express from "express";
import {
  appliedJob,
  applyJob,
  getApplicants,
  updateStatus,
} from "../controllers/application.controllers.js";
import isAutheticated from "../middlewares/isAutheticated.js";

const router = express.Router();

router.route("/job/:id").post(isAutheticated, applyJob);
router.route("/job/appliedJob").get(isAutheticated, appliedJob);
router.route("/job/applicants/:id").get(isAutheticated, getApplicants);
router.route("/job/status/:id").post(isAutheticated, updateStatus);

export default router;
