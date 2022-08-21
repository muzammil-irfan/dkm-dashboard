import React from "react";
import loginIllustration from "../../asset/Group 69986.png";
import { useForm } from "react-hook-form";
import auth from "../../Firebase/firebase.init";
import { useSignInWithEmailAndPin } from 'react-firebase-hooks/auth';
import { Link } from "react-router-dom";

const ChangePin = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

//   const [
//     signInWithEmailAndPin,
//   ] = useSignInWithEmailAndPin(auth);

  const onSubmit = async (data) => {
    console.log(data);
    // await signInWithEmailAndPin(data.oldPin, data.newPin);
    reset();
  };

  return (
    <div className=" py-32 p-20">
      <div className=" shadow-md rounded-xl relative z-10">
        <div className="bg-white px-10 mx-20 grid grid-cols-2 Z-50 rounded-3xl">
          <div className="p-20">
            <img src={loginIllustration} alt="" />
          </div>
          <div className=" border-l-2 p-20 flex flex-col mx auto">
            <h1 className="text-2xl font-bold	text-black">Change Pin:</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="oldPin"
                placeholder="Old Pin"
                class="input input-bordered w-96 bg-white mt-5 rounded-full"
                {...register("Pin", {
                  required: {
                    value: true,
                    message: "Pin is required",
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
                type="newPin"
                placeholder="New Pin"
                class="input input-bordered w-96 bg-white my-5 rounded-full"
                {...register("Pin", {
                  required: {
                    value: true,
                    message: "Pin is required",
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
                className="btn text-white w-96 mt-10 rounded-full"
              />
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePin;
