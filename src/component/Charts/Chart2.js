import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const data = [
  {
    name: "Yard 1",
    uv: 4000
  },
  {
    name: "Yard 2",
    uv: 3000
  },
  {
    name: "Yard 3",
    uv: 2000
  },
  {
    name: "Yard 4",
    uv: 2780
  },
  {
    name: "Yard 5",
    uv: 1890
  },
  {
    name: "Yard 6",
    uv: 2390
  },
  {
    name: "Yard 7",
    uv: 2390
  },
];

export default function App() {
  return (
    <BarChart
      width={890}
      height={400}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar barSize={20} dataKey="uv" fill="#F6D136" />
    </BarChart>
  );
}