import React,{useState,useEffect} from "react";
import { toast } from "react-toastify";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

export default function CustomerChart({ data,handleFilter }) {
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
    start = Number(start);//useState values are in string so converting them in number for calculation
    end = Number(end);
    if (start <= end) { 
      const newCustomerData = data.filter((item) => {
        if (item.total >= start && item.total <= end) {
          return item;
        }
      });
      if (newCustomerData.length === 0) {
        toast.error("No result found");
        setValues({...values, data});
      } else {
        setValues({ ...values, data: newCustomerData });
      }
    } else {
      toast.error("Invalid search");
      setValues({...values, data});
    }
  };
  return (
    <>
      <div className="bg-gray-200 p-5  shadow-md rounded-md">
        <div className="flex justify-between">
          <h1 className="text-xl text-black font-bold">Customers x Orders</h1>
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
            <XAxis dataKey="customer_name" />
            <YAxis />
            <Bar barSize={30} dataKey="total" fill="#F6D136" />
          </BarChart>
        </div>
      </div>
    </>
  );
}
