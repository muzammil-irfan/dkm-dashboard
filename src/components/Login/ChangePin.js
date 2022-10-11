import React from "react";
import loginIllustration from "../../asset/WhatsApp Image 2022-08-24 at 3.54.08 PM.jpeg";
import { useForm } from "react-hook-form";
import axios from "axios";
import backendHost from "../../utils/backendHost";
import { toast } from "react-toastify";
import CommonToast, { errorHandler } from "../common/CommonToast";


const ChangePin = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();


  const onSubmit = async (data) => {
    const userEmail = localStorage.getItem("user");
    const obj = {
      email:userEmail,
      oldPin:Number(data.oldPin),
      newPin:Number(data.newPin)
    };
    axios.post(`${backendHost}/admin/updatepin`,obj)
    .then(res=>{
      reset();
      toast.success(res.data.message);
    })
    .catch(err=>{
      errorHandler(err);
    })
  };

  return (
    <div className=" py-32 p-20">
      <CommonToast />
      <div className=" shadow-md rounded-xl relative z-10">
        <div className="bg-white px-10 mx-20 grid grid-cols-2 Z-50 rounded-3xl">
          <div className="p-20 flex items-center">
            <img src={loginIllustration} alt="" />
          </div>
          <div className=" border-l-2 p-20 flex flex-col mx auto">
            <h1 className="text-2xl font-bold	text-black">Change Pin:</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="password"
                placeholder="Old Pin"
                className="input input-bordered w-96 bg-white mt-5 rounded-full"
                {...register("oldPin", {
                  required: {
                    value: true,
                    message: "Pin is required",
                  },
                  minLength: {
                    value: 4,
                    message: "Minimum 4 characters required",
                  },
                })}
              />
              <label className="label">
                {errors.oldPin && (
                  <span className="label-text-alt text-red-500">
                    {errors.oldPin.message}
                  </span>
                )}
              </label>
              <input
                type="password"
                placeholder="New Pin"
                className="input input-bordered w-96 bg-white my-5 rounded-full"
                {...register("newPin", {
                  required: {
                    value: true,
                    message: "Pin is required",
                  },
                  minLength: {
                    value: 4,
                    message: "Minimum 4 characters required",
                  },
                })}
              />
              <label className="label">
                {errors.newPin && (
                  <span className="label-text-alt text-red-500">
                    {errors.newPin.message}
                  </span>
                )}
              </label>
              <input
                type="submit"
                value="Sign in"
                className="btn text-white w-96 mt-10 rounded-full"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePin;
