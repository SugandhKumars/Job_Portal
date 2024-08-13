import React, { useState } from "react";
import { GiCancel } from "react-icons/gi";
import { Button } from "./ui/button";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_ENDPOINT } from "@/utils/constanst";
import { toast } from "sonner";
import { setUser } from "@/redux/userSlice";
function UpdateProfileDialog({ isOpen, setIsOpen }) {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  console.log(user);
  const [input, setInput] = useState({
    fullName: user?.fullName,
    email: user?.email,
    phoneNumber: user?.phoneNumber,
    bio: user?.profile?.bio || " ",
    resume: user?.profile?.resume || " ",
    skills: user?.profile?.skills.map((skill) => skill) || " ",
  });

  const changeValue = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const changeFile = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setInput({ ...input, file });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("fullName", input.fullName);
    data.append("email", input.email);
    data.append("phoneNumber", input.phoneNumber);
    data.append("bio", input.bio);
    data.append("skills", input.skills);
    if (input.file) {
      data.append("file", input.file);
    }
    try {
      setLoading(true);
      const res = await axios.put(`${USER_API_ENDPOINT}/profile/update`, data, {
        headers: {
          "Content-Type": "multiplepart/form-data",
        },
        withCredentials: true,
      });

      if (res.data.success) {
        toast.success(res.data.message);
        dispatch(setUser(res.data.user));
        console.log(res.data);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
    setIsOpen(false);
    console.log(input);
  };
  return (
    <div className="border h-[70vh] rounded-lg p-5 relative bg-white shadow-lg">
      <div>
        <h3 className="font-bold text-lg w-32 ml-14 ">Update Profile</h3>
        <form onSubmit={handleSubmit} className="w-1/2 mx-auto ">
          <div className="flex gap-4 items-center mb-2">
            <label htmlFor="" className="text-lg font-medium w-[20%]">
              Name
            </label>
            <input
              type="text"
              name="fullName"
              className="w-[80%] border rounded-lg p-2"
              value={input.fullName}
              onChange={changeValue}
            />
          </div>
          <div className="flex gap-4 items-center mb-2">
            <label htmlFor="" className="text-lg font-medium w-[20%]">
              Email
            </label>
            <input
              type="text"
              className="w-[80%] border rounded-lg p-2"
              name="email"
              value={input.email}
              onChange={changeValue}
            />
          </div>
          <div className="flex gap-4 items-center mb-2">
            <label htmlFor="" className="text-lg font-medium w-[20%]">
              Number
            </label>
            <input
              type="text"
              className="w-[80%] border rounded-lg p-2"
              name="phoneNumber"
              value={input.phoneNumber}
              onChange={changeValue}
            />
          </div>
          <div className="flex gap-4 items-center mb-2">
            <label htmlFor="" className="text-lg font-medium w-[20%]">
              Bio
            </label>
            <input
              type="text"
              name="bio"
              className="w-[80%] border rounded-lg p-2"
              value={input.bio}
              onChange={changeValue}
            />
          </div>
          <div className="flex gap-4 items-center mb-2">
            <label htmlFor="" className="text-lg font-medium w-[20%]">
              Skills
            </label>
            <input
              type="text"
              className="w-[80%] border rounded-lg p-2"
              name="skills"
              value={input.skills}
              onChange={changeValue}
            />
          </div>
          <div className="flex gap-4 items-center mb-2">
            <label htmlFor="" className="text-lg font-medium w-[20%]">
              Resume
            </label>
            <input
              type="file"
              accept="application/pdf"
              className="w-[80%] border rounded-lg p-2"
              name="file"
              onChange={changeFile}
            />
          </div>
          <Button type="submit" onClick={handleSubmit} className="w-full my-4">
            {loading ? "Please Wait" : "Update"}
          </Button>
        </form>
      </div>
      <GiCancel
        className="absolute top-3 right-4 text-4xl cursor-pointer"
        onClick={() => setIsOpen(false)}
      />
    </div>
  );
}

export default UpdateProfileDialog;
