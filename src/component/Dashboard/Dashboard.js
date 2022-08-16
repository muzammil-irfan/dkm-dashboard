import React from "react";
import { FaChartPie } from "react-icons/fa";
import { BsClipboardCheck } from "react-icons/bs";
import { HiUserGroup, HiUsers } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";
import { AiOutlineSetting } from "react-icons/ai";
import { Link, Outlet  } from "react-router-dom";
import MainDashboard from "./MainDashboard/MainDashboard";
import TallySheet from "./TallySheet/TallySheet";

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col p-5 bg-white">
        
        <Outlet/>

        <label
          for="my-drawer-2"
          class="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div class="drawer-side ">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu py-4 overflow-y-auto w-80 bg-[#313131] text-base-content">
          <p className="font-bold text-center mt-5 mb-10 text-white">Admin Dashboard</p>
          <p className="bg-red-500 m-0 p-5 text-white border-1">
            <FaChartPie className="text-white inline-block relative bottom-[2px] mr-1" />
            <Link to="/dashboard">  Main Dashboard </Link>
          </p>
          <p className="bg-red-500 m-0 p-5 text-white border-1">
            <BsClipboardCheck className="text-white inline-block relative bottom-[2px] mr-1" />
            <Link to="/dashboard/tally-sheet">  Tally Sheet </Link>
          </p>
          <p className="bg-red-500 m-0 p-5 text-white border-1">
            <HiUserGroup className="text-white inline-block relative bottom-[2px] mr-1" />
            <Link to="/"> Users </Link>
          </p>
          <p className="bg-red-500 m-0 p-5 text-white border-1">
            <GrLocation className="text-white inline-block relative bottom-[2px] mr-1" />
            <Link to="/"> Locations </Link>
          </p>
          <p className="bg-red-500 m-0 p-5 text-white border-1">
            <HiUsers className="text-white inline-block relative bottom-[2px] mr-1" />
            <Link to="/dashboard/customers"> Customer </Link>
          </p>
          <div class="dropdown bg-red-500 m-0 p-5 text-white">
            <label tabindex="0" class=" m-1">
              <AiOutlineSetting className="text-white inline-block relative bottom-[2px] mr-1" />
              Click
            </label>
            <ul
              tabindex="0"
              className="dropdown-content menu p-2 shadow bg-gray-500 rounded-box w-52"
            >
              <li>
                <Link to="/changePass">Change Password</Link>
              </li>
              <li>
                <Link to="/changePin">Change Pin</Link>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
