import React from "react";
import bgImg from "../../asset/Union 76.png";
import loginIllustration from "../../asset/Group 69986.png";
import { useForm } from "react-hook-form";
import auth from "../../Firebase/firebase.init";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from "react-router-dom";

const Login = () => {
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
    <div className="bg-yellow-400 py-32 p-20">
      <div className="relative z-10">
        <img
          src={bgImg}
          className="absolute top-[-7rem] left-[-27px] w-[121px] h-[126px]"
          alt=""
          style={{ zIndex: "-99" }}
        />
        <div className="bg-white px-10 mx-20 grid grid-cols-2 Z-50 rounded-3xl">
          <div className="p-20">
            <img src={loginIllustration} alt="" />
          </div>
          <div className=" border-l-2 p-20 flex flex-col items-center">
            <h1 className="text-2xl font-bold	text-black">Sign in</h1>
            <p>Login to your account</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="email"
                placeholder="Email"
                class="input input-bordered w-96 bg-white mt-5 rounded-full"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid email",
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
                type="Password"
                placeholder="Password"
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
                type="Pin"
                placeholder="Pin"
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
                className="btn text-white w-full mt-10 rounded-full"
              />
              </Link>
            </form>
          </div>
        </div>
        <img
          src={bgImg}
          className="absolute bottom-[-115px] right-[-26px] z-[-10] w-[121px] h-[126px]"
          alt=""
        />
      </div>
    </div>
  );
};

export default Login;
