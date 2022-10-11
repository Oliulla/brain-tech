import React, { useContext } from 'react';
import { QuizContext } from '../Root/Root';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
  } from "recharts";


const Stats = () => {
    const data = useContext(QuizContext);

    return (
        <div className='w-11/12 flex justify-center md:w-9/12 mx-auto my-10'>
            <ResponsiveContainer width="95%" height={400}>
                <BarChart
                    width={500}
                    height={300}

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
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="total" fill="#82ca9d" />
                </BarChart>
                
            </ResponsiveContainer>
        </div>

    );
};

export default Stats;