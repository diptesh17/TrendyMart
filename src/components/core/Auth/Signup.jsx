import React from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { signUp } from "../../../services/operations/authAPI";

export default function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    UserName: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
  });

  const [isPassVisible, setIsPassVisible] = useState(false);
  const [isConfVisible, setIsConfVisible] = useState(false);

  const { UserName, Email, Password, ConfirmPassword } = formData;

  // Handle input fields, when some value changes
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (Password !== ConfirmPassword) {
      toast.error("Passwords do not match!");
    } else if (Password.length < 6) {
      toast.error("Password must be at least 6 characters");
    } else {
      // Dispatch your data here
      dispatch(signUp(UserName, Email, Password, ConfirmPassword, navigate));
    }
  };

  return (
    <div>
      <form
        onSubmit={handleOnSubmit}
        className="flex items-center justify-center w-full px-5"
      >
        <div className="w-[450px] p-5 mt-5 rounded-md shadoww">
          <div className="pb-3">
            <h3 className="text-[#008080] font-bold text-2xl">Register</h3>
          </div>
          <label htmlFor="username">
            <p className="flex mb-1 text-sm text-[#008080]">
              User Name <span className="text-pink-200 ">*</span>
            </p>
            <input
              required
              type="text"
              name="UserName"
              id="UserName"
              placeholder="UserName"
              value={UserName}
              onChange={handleOnChange}
              className="w-full rounded-md bg-slate-50 p-[12px] text-black border  border-[#a855f7] mb-1 hover:border-[#7e22ce] focus:border-[#008080] select-none"
            />
          </label>

          <label htmlFor="email">
            <p className="flex mb-1 text-sm text-[#008080]">
              Email <span className="flex text-pink-200">*</span>
            </p>
            <input
              required
              type="text"
              name="Email"
              id="Email"
              placeholder="Email"
              value={Email}
              onChange={handleOnChange}
              className="w-full rounded-md bg-slate-50 p-[12px] text-black border  border-[#a855f7] mb-1 hover:border-[#7e22ce] focus:border-[#008080] select-none"
            />
          </label>

          <label htmlFor="password" className="relative">
            <p className="flex mb-1 text-sm text-[#008080]">
              Password <span className="flex text-pink-200">*</span>
            </p>
            <input
              required
              type={isPassVisible ? "text" : "password"}
              name="Password"
              id="Password"
              placeholder="Password"
              value={Password}
              onChange={handleOnChange}
              className="w-full  rounded-md bg-slate-50 p-[12px] text-black border  border-[#a855f7]  hover:border-[#7e22ce] focus:border-[#008080] select-none"
            />
            <p className="text-[12px] text-slate-600">
              Password must be atleast 6 characters length
            </p>
            <span
              className="absolute mt-[-55px] cursor-pointer right-2"
              onClick={() => setIsPassVisible((prev) => !prev)}
            >
              {isPassVisible ? (
                <AiFillEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiFillEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>

          <label htmlFor="confirmpassword" className="relative">
            <p className="flex mb-1 text-sm text-[#008080]">
              Confirm Password <span className="flex text-pink-200">*</span>
            </p>
            <input
              required
              type={isConfVisible ? "text" : "password"}
              name="ConfirmPassword"
              id="ConfirmPassword"
              placeholder="ConfirmPassword"
              value={ConfirmPassword}
              onChange={handleOnChange}
              className="w-full rounded-md bg-slate-50 p-[12px] text-black border  border-[#a855f7] mb-1 hover:border-[#7e22ce] focus:border-[#008080] select-none"
            />

            <span
              className="absolute mt-4 cursor-pointer right-2"
              onClick={() => setIsConfVisible((prev) => !prev)}
            >
              {isConfVisible ? (
                <AiFillEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiFillEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
          <button
            type="submit"
            className="px-5 py-2 mt-3 rounded-sm bg-[#008080] text-white text-sm hover:bg-[#7e22ce] 
            duration-200 ease-in-out hover:drop-shadow-xl"
          >
            REGISTER NOW
          </button>

          <div className="mt-2">
            <p>
              Already have an account?
              <Link to="/login">
                <span className="text-[#008080] font-bold ml-1">
                  Login here
                </span>
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
