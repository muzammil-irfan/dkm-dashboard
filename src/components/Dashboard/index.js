import React, { useState, useEffect } from "react";
import axios from "axios";
import backendHost from "../../utils/backendHost";
import LocationChart from "./LocationChart";
import CommonToast from "../common/CommonToast";
import CustomerChart from "./CustomerChart";
import FilterModal from "./FilterModal";

const Dashboard = () => {
  const [data, setData] = useState({ customer: [], location: [] });
  const [modal, setModal] = useState(false);
  const [type,setType] = useState("")
  useEffect(() => {
    axios
      .get(`${backendHost}/total_ft/`)
      .then((res) => {
        const newData =
          res.data.length > 0
            ? res.data.map((item) => {
                item["checked"] = true;
                return item;
              })
            : [];

        setData({ ...data, location: newData });
        // setFilteredData({ ...filteredData, location: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`${backendHost}/customer_order/`)
      .then((res) => {
        const newData =
          res.data.length > 0
            ? res.data.map((item) => {
                item["checked"] = true;
                return item;
              })
            : [];
        setData((prevState) => ({ ...prevState, customer: newData }));
        // setCustomerTotal(data);
        // setFilteredData({...filteredData,customer:res.data});
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleFilter = (filter) => {
    setType(filter);
    setModal(true);
  };
  return (
    <div className="flex flex-col justify-start">
      <CommonToast />
      <FilterModal
        modal={modal}
        setModal={setModal}
        data={data}
        setData={setData}
        filterType={type}
      />
      <div className="">
        <h1 className="text-xl text-black font-bold">Main Dashboard</h1>
        <p>Welcome Admin, everything back&apos;s great.</p>
      </div>
      {/* FT x Location chart  */}

      <LocationChart
        data={data.location.filter((item) => item.checked)}
        handleFilter={()=>handleFilter("location")}
      />

      {/* Customers x Orders chart  */}

      <CustomerChart
        data={data.customer.filter((item) => item.checked)}
        handleFilter={()=>handleFilter("customer")}
      />
    </div>
  );
};

export default Dashboard;
