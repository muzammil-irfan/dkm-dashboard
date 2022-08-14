import React from "react";
import bgImg from "../../asset/Group 70120.png";
import loginIllustration from "../../asset/Group 69986.png";

const Login = () => {
  return (
    <div
      className="bg-yellow-200 bg-no-repeat bg-cover h-screen py-10 left-11 p-20"
    >
        <img src={bgImg} className="absolute top-4 w-[700px]" alt="" />
      <div className="bg-white z-50 px-10 mx-20 grid grid-cols-2 rounded-3xl">
        <div className="p-20">
          <img src={loginIllustration} alt="" />
        </div>
        <div className=" border-l-2 p-20 flex flex-col items-center">
          <h1 className="text-2xl font-bold	text-black">Sign in</h1>
          <p>Login to your account</p>
          <input
            type="text"
            placeholder="Email"
            class="input input-bordered w-full max-w-xs bg-white mt-5 rounded-full"
          />
          <input
            type="Password"
            placeholder="Password"
            class="input input-bordered w-full max-w-xs bg-white my-5 rounded-full"
          />
          <input
            type="text"
            placeholder="Pin"
            class="input input-bordered w-full max-w-xs bg-white rounded-full"
          />
          <button class="btn btn-wide my-5 bg-[#313131] rounded-full">Sign in</button>
        </div>
        {/* <img src={bgImg} className="absolute bottom-2 w-[700px]" alt="" /> */}
      </div>
    </div>
  );
};

export default Login;
