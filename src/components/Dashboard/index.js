import React, { useState, useEffect } from "react";
import axios from "axios";
import backendHost from "../../utils/backendHost";
import LocationChart from "./LocationChart";
import CommonToast from "../common/CommonToast";
import CustomerChart from "./CustomerChart";

const Dashboard = () => {
  const [locationTotal, setLocationTotal] = useState([]);
  const [customerTotal, setCustomerTotal] = useState([]);

  useEffect(() => {
    axios
      .get(`${backendHost}/total_ft/`)
      .then((res) => {
        setLocationTotal(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`${backendHost}/customer_order/`)
      .then((res) => {
        setCustomerTotal(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex flex-col justify-start">
      <CommonToast />
      <div className="">
        <h1 className="text-xl text-black font-bold">Main Dashboard</h1>
        <p>Welcome Admin, everything back&apos;s great.</p>
      </div>
      {/* FT x Location chart  */}

      <LocationChart data={locationTotal} />

      {/* Customers x Orders chart  */}

      <CustomerChart data={customerTotal} />
    </div>
  );
};

export default Dashboard;
