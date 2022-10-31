import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

export default function LocationChart({ data,handleFilter }) {
  const [values, setValues] = useState({ start: "", end: "", data: [] });
  useEffect(()=>{
    setValues({...values,data: data});
  },[data]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleSearch = () => {
    let { start, end } = values;
    start = Number(start);//useState values are in string so converting them in number for calculation purposes
    end = Number(end);
    if (start <= end) { 
      const newLocationData = data.filter((item) => {
        if (item.total_ft >= start && item.total_ft <= end) {
          return item;
        }
      });
      if (newLocationData.length === 0) {
        toast.error("No result found");
        setValues({...values, data});
      } else {
        setValues({ ...values, data: newLocationData });
      }
    } else {
      toast.error("Invalid search");
      setValues({...values, data});
    }
  };

  return (
    <>
      <div className="bg-gray-200 my-16 p-5  shadow-md rounded-md">
        <div className="flex justify-between">
          <h1 className="text-xl text-black font-bold">Total FT x Location</h1>
          <div>
            <button className="btn btn-warning" onClick={handleFilter}>
              Filter
            </button>
          </div>
        </div>
        <div className="my-10">
          <BarChart
            width={930}
            height={400}
            data={values.data}
            margin={{
              top: 5,
              right: 0,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="location_name" domain={[0, "dataMax + 100"]} />
            <YAxis type="number" />
            <Bar barSize={30} dataKey="total_ft" fill="#8AA67F" />
          </BarChart>
        </div>
      </div>
    </>
  );
}
