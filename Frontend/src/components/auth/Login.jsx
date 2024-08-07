import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_ENDPOINT } from "@/utils/constanst";
import { toast } from "sonner";

function Login() {
  const [input, setInput] = useState({ email: "", passward: "", role: "" });
  const navigate = useNavigate();
  const changedValue = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${USER_API_ENDPOINT}/login`,
        {
          email: input.email,
          passward: input.passward,
          role: input.role,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data?.message);
    }
  };

  return (
    <div>
      <Navbar />
      <div className=" flex items-center justify-center max-w-7xl mx-auto  ">
        <form onSubmit={handleSubmit} className="w-1/2 p-4 border rounded-sm">
          <h3 className="text-2xl font-bold">Login </h3>
          <div className="my-2 flex flex-col">
            <label className="font-medium">Email</label>
            <input
              className="p-2 outline-none border-[1px] rounded-md"
              type="email"
              name="email"
              onChange={changedValue}
              placeholder="Sugandh@gmail.com"
            />
          </div>

          <div className="my-2 flex flex-col">
            <label className="font-medium">Passward</label>
            <input
              className="p-2 outline-none border-[1px] rounded-md"
              type="password"
              name="passward"
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
          </div>
          <button
            type="submit"
            className="bg-black text-white font-bold w-full py-2 rounded-md"
          >
            Login
          </button>
          <p>
            Do not have any account ?
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
