import React from "react";
import bgImg from "../../asset/Union 76.png";
import loginIllustration from "../../asset/WhatsApp Image 2022-08-24 at 3.54.08 PM.jpeg";
import { useForm } from "react-hook-form";
import auth from "../../Firebase/firebase.init";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from "react-router-dom";

const ChangePassword = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const onSubmit = async (data) => {
    console.log(data);
    await signInWithEmailAndPassword(data.email, data.password);
    reset();
  };

  return (
    <div className=" py-32 p-20">
      <div className=" shadow-md rounded-xl relative z-10">
        <div className="bg-white px-10 mx-20 grid grid-cols-2 Z-50 rounded-3xl">
          <div className="p-20 flex items-center">
            <img src={loginIllustration} alt="" />
          </div>
          <div className=" border-l-2 p-20 flex flex-col mx-auto">
            <h1 className="text-2xl font-bold	text-black ">Change Password:</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="Old-Password"
                placeholder="Old Password"
                class="input input-bordered w-96 bg-white mt-5 rounded-full"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: /^(\d{4}|\d{6})$/,
                    message: "Minimum 6 characters required",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
              <input
                type="New-Password"
                placeholder="New Password"
                class="input input-bordered w-96 bg-white my-5 rounded-full"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: /^(\d{4}|\d{6})$/,
                    message: "Minimum 6 characters required",
                  },
                })}
              />
              <input
                type="Confirm-Password"
                placeholder="Confirm Password"
                class="input input-bordered w-96 bg-white my-5 rounded-full"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: /^(\d{4}|\d{6})$/,
                    message: "Minimum 6 characters required",
                  },
                })}
              />
              <Link to="/dashboard">
              <input
                type="submit"
                value="Sign in"
                className="btn text-white w-full mt-10 rounded-full"
              />
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
