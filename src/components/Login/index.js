import React, { useState } from "react";
import bgImg from "../../asset/Union 76.png";
import loginIllustration from "../../asset/WhatsApp Image 2022-08-24 at 3.54.08 PM.jpeg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import backendHost from "../../utils/backendHost";
import { toast } from "react-toastify";
import CommonToast, { errorHandler } from "../common/CommonToast";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
    pin: "",
    code:""
  };
  const [values, setValues] = useState(initialValues);
  const [loginForm,setLoginForm] = useState(true)// If true then show login form otherwise show verification code screen
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(loginForm){
      const loginObj = {
        email: values.email,
        password: values.password,
        pin: Number(values.pin),
      };
  
      axios
        .post(`${backendHost}/admin/login`, loginObj)
        .then((res) => {
          toast.success("Please verify code to login");
          setLoginForm(false);
        })
        .catch((err) => {
          errorHandler(err);
          console.log(err);
        }); 
    } else {
      const codeObj = {
        email: values.email,
        code: values.code//code will be string
      };
      axios.post(`${backendHost}/admin/login/verify`,codeObj)
      .then(res=>{
        toast.success("Login Successfully");
        localStorage.setItem("user",values.email);
        navigate("/");
      })
      .catch(err=>{
        errorHandler(err);
      });
    };

  };
  return (
    <div className="bg-yellow-400 py-32 p-20">
      <CommonToast />
      <div className="relative z-10">
        <img
          src={bgImg}
          className="absolute top-[-7rem] left-[-27px] w-[121px] h-[126px]"
          alt=""
          style={{ zIndex: "-99" }}
        />
        <div className="bg-white px-10 mx-20 grid grid-cols-2 Z-50 rounded-3xl">
          <div className="p-20 flex items-center">
            <img src={loginIllustration} alt="" />
          </div>
          <div className=" border-l-2 p-20 flex flex-col items-center">
            <h1 className="text-2xl font-bold	text-black">{loginForm ? "Sign in" : "Code verification"}</h1>
            <p>Login to your account</p>
              {
                loginForm ?
            <form onSubmit={handleSubmit}>
              <input
                placeholder="Email"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                className="input input-bordered w-96 bg-white my-5 rounded-full"
              />
              <input
                placeholder="Password"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                className="input input-bordered w-96 bg-white my-5 rounded-full"
              />
              <input
                type="password"
                placeholder="Pin"
                name="pin"
                value={values.pin}
                onChange={handleChange}
                className="input input-bordered w-96 bg-white my-5 rounded-full"
              />
              {/* <Link to="/dashboard"> */}
              <input
                type="submit"
                value="Sign in"
                className="btn text-white w-full mt-10 rounded-full"
                />
              {/* </Link> */}
            </form> :
            <form onSubmit={handleSubmit}>
              <input
                type="number"
                placeholder="Enter verification code"
                name="code"
                value={values.code}
                onChange={handleChange}
                className="input input-bordered w-96 bg-white my-5 rounded-full"
              />
              {/* <Link to="/dashboard"> */}
              <input
                type="submit"
                value="Veirfy code"
                className="btn text-white w-full mt-10 rounded-full"
                />
            </form>
        }
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
