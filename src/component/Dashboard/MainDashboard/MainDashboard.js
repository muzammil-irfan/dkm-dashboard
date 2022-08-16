import React from "react";
import Chart from "../../Charts/Chart"
import Chart2 from "../../Charts/Chart2"

const MainDashboard = () => {
  return (
    <div className="flex flex-col justify-start">
      <div className="">
        <h1 className="text-xl text-black font-bold">Main Dashboard</h1>
        <p>Welcome Admin, everything back’s great.</p>
      </div>
      {/* FT x Location chart  */}
      <div className="bg-gray-200 my-16 p-5  shadow-md rounded-md">
        <div className="flex justify-between">
        <h1 className="text-xl text-black font-bold">Total FT x Location</h1>
        <div>
        <input
          type="text"
          placeholder="Start Location"
          class="input input-bordered w-40 mx-5 bg-slate-50"
        />
        <input
          type="text"
          placeholder="End Location"
          class="input input-bordered w-40 mx-5 bg-slate-50"
        />
        <button class="btn btn-warning">Search</button>
        </div>
        </div>
        <div className="my-10">
        <Chart/>
        </div>
      </div>
      {/* Customers x Orders chart  */}
      <div className="bg-gray-200 p-5  shadow-md rounded-md">
        <div className="flex justify-between">
        <h1 className="text-xl text-black font-bold">Customers x Orders</h1>
        <div>
        <input
          type="text"
          placeholder="Start Location"
          class="input input-bordered w-40 mx-5 bg-slate-50"
        />
        <input
          type="text"
          placeholder="End Location"
          class="input input-bordered w-40 mx-5 bg-slate-50"
        />
        <button class="btn btn-warning">Search</button>
        </div>
        </div>
        <div className="my-10">
        <Chart2/>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
