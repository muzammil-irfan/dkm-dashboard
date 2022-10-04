import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

export default function LocationChart({data}) {
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
      <XAxis dataKey="location_name" domain={[0, 'dataMax + 100']}/>
      <YAxis type="number"  />
      <Bar barSize={30} dataKey="total_ft" fill="#8AA67F" />
    </BarChart>
  );
}