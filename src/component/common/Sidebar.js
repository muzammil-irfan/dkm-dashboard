import React, {useEffect} from "react";
import { FaChartPie } from "react-icons/fa";
import { BsClipboardCheck } from "react-icons/bs";
import { HiUserGroup, HiUsers } from "react-icons/hi";
import { GoLocation } from "react-icons/go";
import { AiOutlineSetting } from "react-icons/ai";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Sidebar = ({children}) => {
  const navigate = useNavigate();
  const pN = window.location.pathname;
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if(!token){
      navigate('/login');
    };
  }, [pN]);

  if(pN.includes('login')){
    return children;
  };
  return (
    <div className={`drawer drawer-mobile `} >
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col p-5 bg-white">
        {/* <Outlet />
         */}
        {children}
        <label
          for="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side ">
        <label for="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu py-4 overflow-y-auto w-80 bg-[#313131] text-base-content">
          <p className="font-bold text-center mt-5 mb-10 text-white">
            Admin Dashboard
          </p>

          <NavLink
            to="/"
            style={({ isActive }) =>
            isActive || pN === "/" ? { backgroundColor: "gray" } : { backgroundColor: "#313131" }
            }
          >
            <p className=" m-0 p-5 text-white border-1">
              <FaChartPie className="text-white inline-block relative bottom-[2px] mr-1" />
              Main Dashboard
            </p>
          </NavLink>
          <NavLink
            to="tally-sheet"
            style={({ isActive }) =>
              isActive ? { backgroundColor: "gray" } : { backgroundColor: "#313131" }
            }
          >
            <p className=" m-0 p-5 text-white border-1 ">
              <BsClipboardCheck className="text-white inline-block relative bottom-[2px] mr-1" />
              Tally Sheet
            </p>
            </NavLink>
            <NavLink
            to="tally-sheet"
            style={({ isActive }) =>
              isActive ? { backgroundColor: "gray" } : { backgroundColor: "#313131" }
            }
          ></NavLink>
          <NavLink
            to="users"
            style={({ isActive }) =>
              isActive ? { backgroundColor: "gray" } : { backgroundColor: "#313131" }
            }
          >
          <p className=" m-0 p-5 text-white border-1">
            <HiUserGroup className="text-white inline-block relative bottom-[2px] mr-1" />
            Users 
          </p>
          </NavLink>
          <NavLink
            to="location"
            style={({ isActive }) =>
              isActive ? { backgroundColor: "gray" } : { backgroundColor: "#313131" }
            }
          >
          <p className=" m-0 p-5 text-white border-1">
            <GoLocation className="text-white inline-block relative bottom-[2px] mr-1" />
            Locations 
          </p>
          </NavLink>
          <NavLink
            to="customers"
            style={({ isActive }) =>
              isActive ? { backgroundColor: "gray" } : { backgroundColor: "#313131" }
            }
          >
          <p className=" m-0 p-5 text-white border-1">
            <HiUsers className="text-white inline-block relative bottom-[2px] mr-1" />
             Customer 
          </p>
          </NavLink>
          <div className="dropdown  m-0 p-5 text-white">
            <label tabindex="0" className=" m-1">
              <AiOutlineSetting className="text-white inline-block relative bottom-[2px] mr-1" />
              Settings
            </label>
            <ul
              tabindex="0"
              className="dropdown-content menu p-2 shadow bg-gray-500 rounded-box w-52"
            >
              <li>
                <Link to="/changepassword">Change Password</Link>
              </li>
              <li>
                <Link to="/changepin">Change Pin</Link>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
