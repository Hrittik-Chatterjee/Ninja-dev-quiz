import React, { useContext } from 'react';
import { TopicContext } from '../Layout/Layout';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Statics = () => {
    const topics = useContext(TopicContext)
    const data = topics[0].data
    // const {name,logo,total} = topic

    console.log(data)
    return (
        <LineChart
        width={500}
        height={300}
        data={data}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={name} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey={name} stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey={total} stroke="#82ca9d" />
      </LineChart>
    );
};

export default Statics;