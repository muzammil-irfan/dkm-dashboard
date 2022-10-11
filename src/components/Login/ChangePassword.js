import React from "react";
// import bgImg from "../../asset/Union 76.png";
import loginIllustration from "../../asset/WhatsApp Image 2022-08-24 at 3.54.08 PM.jpeg";
import { useForm } from "react-hook-form";
import axios from "axios";
import backendHost from "../../utils/backendHost";
import { toast } from 'react-toastify';
import CommonToast,{errorHandler} from "../common/CommonToast";
import { Navigate } from "react-router-dom";

const ChangePassword = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    watch
  } = useForm();
  const onSubmit = (data) => {
    const userEmail = localStorage.getItem("user");
    if(userEmail){
      const obj = {
        email:userEmail,
        oldPassword:data.oldPassword,
        newPassword:data.newPassword
      }
      axios.post(`${backendHost}/admin/updatepassword`,obj)
      .then(res=>{
        reset();
        toast.success(res.data.message);
      })
      .catch(err=>{
        console.log(err)
        errorHandler(err);
      })
    } else {
      toast.error("You are not logged in");
    }
  }  
  return (
    <div className=" py-32 p-20">
      <CommonToast />
      <div className=" shadow-md rounded-xl relative z-10">
        <div className="bg-white px-10 mx-20 grid grid-cols-2 Z-50 rounded-3xl">
          <div className="p-20 flex items-center">
            <img src={loginIllustration} alt="" />
          </div>
          <div className=" border-l-2 p-20 flex flex-col mx-auto">
            <h1 className="text-2xl font-bold	text-black ">Change Password:</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="password"
                placeholder="Old Password"
                className="input input-bordered w-96 bg-white mt-5 rounded-full"
                {...register("oldPassword", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value:6,
                    message: "Minimum 6 characters required",
                  },
                })}
              />
              <label className="label">
                {errors.oldPassword && (
                  <span className="label-text-alt text-red-500">
                    {errors.oldPassword.message}
                  </span>
                )}
              </label>
              <input
                type="password"
                placeholder="New Password"
                className="input input-bordered w-96 bg-white mt-5 rounded-full"
                {...register("newPassword", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters required",
                  },
                })}
              />
              <label className="label">
                {errors.newPassword && (
                  <span className="label-text-alt text-red-500">
                    {errors.newPassword.message}
                  </span>
                )}
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="input input-bordered w-96 bg-white mt-5 rounded-full"
                {...register("newPassword2", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  validate: (val) => {
                    if (watch('newPassword') != val) {
                      return "Your passwords do no match";
                    }
                  },
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters required",
                  },
                })}
              />
              <label className="label">
                {errors.newPassword2 && (
                  <span className="label-text-alt text-red-500">
                    {errors.newPassword2.message}
                  </span>
                )}
              </label>
              {/* <Link to="/dashboard"> */}
              <input
                type="submit"
                value="Sign in"
                className="btn text-white w-full mt-10 rounded-full"
              />
              {/* </Link> */}
            </form>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ChangePassword;
