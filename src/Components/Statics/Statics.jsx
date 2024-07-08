import React, { useContext } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { TopicContext } from "../Layout/Layout";

const Statics = () => {
  const topics = useContext(TopicContext);
  const dataOfChart = topics;

  return (
    <div className="flex justify-center">
      <div>
        <p className="text-slate-500 font-bold my-12 text-4xl">
          This Chart shows the number of quizes each topic has
        </p>
        <ResponsiveContainer width="99%" aspect={3}>
          <LineChart width={300} height={200} data={dataOfChart}>
            <Line type="monotone" dataKey="total" stroke="#82ca9d" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip></Tooltip>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statics;
