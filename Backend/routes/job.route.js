import express from "express";
import {
  getAllJobs,
  jobById,
  jobCreatedByAdmin,
  postJob,
} from "../controllers/job.controllers.js";
import isAutheticated from "../middlewares/isAutheticated.js";

const router = express.Router();

router.route("/postJob").post(isAutheticated, postJob);
router.route("/getAllJob").get(isAutheticated, getAllJobs);
router.route("/jobBy/:id").get(isAutheticated, jobById);
router.route("/adminPost").get(isAutheticated, jobCreatedByAdmin);

export default router;
