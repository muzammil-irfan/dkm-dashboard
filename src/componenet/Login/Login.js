import React from "react";
import bgImg from "../../asset/Union 76.png";
import loginIllustration from "../../asset/Group 69986.png";

const Login = () => {
  return (
    <div className="bg-yellow-400 py-32 p-20">
      <div className="relative z-10">
        <img
          src={bgImg}
          className="absolute top-[-7rem] left-[-27px] Z-[-10] w-[121px] h-[126px]"
          alt=""
        />
        <div className="bg-white px-10 mx-20 grid grid-cols-2 Z-50 rounded-3xl">
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
            <button class="btn btn-wide my-5 bg-[#313131] rounded-full">
              Sign in
            </button>
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
