import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_ENDPOINT } from "@/utils/constanst";
import { toast } from "sonner";

function Signup() {
  const [input, setInput] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    passward: "",
    role: "",
    file: "",
  });
  const navigate = useNavigate();
  const changedValue = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const fileChangeValue = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("fullName", input.fullName);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("passward", input.passward);
    formData.append("role", input.role);
    if (input.file) {
      formData.append("file", input.file);
    }
    try {
      const res = await axios.post(`${USER_API_ENDPOINT}/register`, formData, {
        headers: {
          "Content-Type": "multiplepart/form-data",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  return (
    <div>
      <Navbar />
      <div className=" flex items-center justify-center max-w-7xl mx-auto  ">
        <form
          action=""
          onSubmit={handleSubmit}
          className="w-1/2 p-4 border rounded-sm"
        >
          <h3 className="text-2xl font-bold">Sign Up</h3>
          <div className="my-2 flex flex-col">
            <label className="font-medium">Full Name</label>
            <input
              className="p-2 outline-none border-[1px] rounded-md"
              type="text"
              name="fullName"
              value={input.fullName}
              onChange={changedValue}
              placeholder="Sugandh"
            />
          </div>
          <div className="my-2 flex flex-col">
            <label className="font-medium">Email</label>
            <input
              className="p-2 outline-none border-[1px] rounded-md"
              name="email"
              type="email"
              value={input.email}
              onChange={changedValue}
              placeholder="Sugandh@gmail.com"
            />
          </div>
          <div className="my-2 flex flex-col">
            <label className="font-medium">Phone Number</label>
            <input
              className="p-2 outline-none border-[1px] rounded-md"
              type="text"
              name="phoneNumber"
              value={input.phoneNumber}
              onChange={changedValue}
              placeholder="9789881234"
            />
          </div>
          <div className="my-2 flex flex-col">
            <label className="font-medium">Passward</label>
            <input
              className="p-2 outline-none border-[1px] rounded-md"
              type="password"
              name="passward"
              value={input.passward}
              onChange={changedValue}
              placeholder="hwllo@1234"
            />
          </div>
          <div className="flex justify-between my-4 ">
            <div>
              <input
                type="radio"
                name="role"
                value="student"
                checked={input.role === "student"}
                onChange={changedValue}
              />
              <label className="font-medium px-2">Student</label>
              <input
                type="radio"
                name="role"
                value="recruiter"
                checked={input.role === "recruiter"}
                onChange={changedValue}
              />
              <label className="font-medium px-2">Recruiter</label>
            </div>
            <div className="flex gap-2">
              <label className="font-medium">Profile</label>
              <input
                accept="image/*"
                type="file"
                id=""
                onChange={fileChangeValue}
                className="cursor-pointer"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-black text-white font-bold w-full py-2 rounded-md"
          >
            Sign Up
          </button>
          <p>
            Already has an account ?
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
