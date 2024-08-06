import express from "express";
import {
  getCompany,
  getCompanyById,
  registerCompany,
  updateCompany,
} from "../controllers/company.controllers.js";
import isAutheticated from "../middlewares/isAutheticated.js";

const router = express.Router();

router.route("/register").post(isAutheticated, registerCompany);
router.route("/getCompanies").get(isAutheticated, getCompany);
router.route("/getCompany/:id").get(isAutheticated, getCompanyById);
router.route("/updateCompany/:id").put(isAutheticated, updateCompany);

export default router;
