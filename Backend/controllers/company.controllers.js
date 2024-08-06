import { Company } from "../models/company.model.js";

export const registerCompany = async (req, res) => {
  try {
    const { companyName } = req.body;
    if (!companyName) {
      return res.status(400).json({
        message: "Comapny Name is required",
        success: false,
      });
    }
    let company = await Company.findOne({ name: companyName });
    if (company) {
      return res.status(400).json({
        message: "You cannot create the same Comapny",
        success: false,
      });
    }
    company = await Company.create({
      name: companyName,
      userId: req.id,
    });
    return res.status(201).json({
      message: "Company Created Sucessfully",
      success: true,
      company,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCompany = async (req, res) => {
  try {
    const userId = req.id;
    const companies = await Company.find({ userId });
    if (!companies) {
      return res.status(404).json({
        message: "Companies Not Found",
        success: true,
      });
    }
    return res.status(201).json({
      message: "Companies Found",
      companies,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCompanyById = async (req, res) => {
  try {
    const { id } = req.params;
    const company = await Company.findById(id);
    if (!company) {
      return res.status(404).json({
        message: "Company not found",
        success: false,
      });
    }
    return res.status(200).json({
      message: "Comapnay  Found",
      company,
    });
  } catch (error) {}
};

export const updateCompany = async (req, res) => {
  try {
    const { name, location, website, description } = req.body;
    const file = req.file;

    const updateData = { name, location, website, description };
    const company = await Company.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });
    if (!company) {
      return res.status(404).json({
        message: "Company Not found",
        success: false,
      });
    }
    return res.status(200).json({
      message: "Comapny Updated Suceessfully",
      company,
    });
  } catch (error) {
    console.log(error);
  }
};
