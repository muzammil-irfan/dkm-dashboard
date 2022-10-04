import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";


export default function CustomerChart({data}) {

  return (
    <BarChart
      width={930}
      height={400}
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="customer_name" />
      <YAxis />
      <Bar barSize={30} dataKey="total" fill="#F6D136" />
    </BarChart>
  );
}