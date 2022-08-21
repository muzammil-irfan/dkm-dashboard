import React, { useState } from "react";
import bgImg from "../../asset/Union 76.png";
import loginIllustration from "../../asset/Group 69986.png";
// import { useForm } from "react-hook-form";
import auth from "../../Firebase/firebase.init";
import {  useNavigate } from 'react-router-dom';
import useToken from "../../Hooks/useToken"
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    createUserWithEmailAndPassword,
    user,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  
  

    const navigate = useNavigate();
    const [token] = useToken(user)

    console.log(error);

    if ( user) {
      navigate("/dashboard")
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    createUserWithEmailAndPassword(email, password)
  }
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
            <form onSubmit={handleSubmit}>
              <input
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                class="input input-bordered w-96 bg-white mt-5 rounded-full"
              />
              <input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                class="input input-bordered w-96 bg-white my-5 rounded-full"
              />
              {/* <input
                type="Pin"
                placeholder="Pin"
                class="input input-bordered w-96 bg-white my-5 rounded-full"
              /> */}
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
