import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

// const data = [
//   {
//     name: "Yard 1",
//     uv: 4000
//   },
//   {
//     name: "Yard 2",
//     uv: 3000
//   },
//   {
//     name: "Yard 3",
//     uv: 2000
//   },
//   {
//     name: "Yard 4",
//     uv: 2780
//   },
//   {
//     name: "Yard 5",
//     uv: 1890
//   },
//   {
//     name: "Yard 6",
//     uv: 2390
//   },
//   {
//     name: "Yard 7",
//     uv: 2390
//   },
// ];



export default function App() {
  const [bars, setBars] = useState([]);
  useEffect(() => {
    fetch("https://dashboard-f.herokuapp.com/bar")
      .then((res) => res.json())
      .then((data) => setBars(data));
  }, [bars]);

  return (
    <BarChart
      width={930}
      height={400}
      data={bars}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar barSize={30} dataKey="uv" fill="#F6D136" />
    </BarChart>
  );
}