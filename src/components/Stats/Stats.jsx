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
    ResponsiveContainer,
    LineChart,
    Line
  } from "recharts";


// declare an array of object for makeing a line chart
const assignments = [
    {
      assignment: 'Assignment 1',
      marks: 60
    },
    {
      assignment: 'Assignment 2',
      marks: 60
    },
    {
      assignment: 'Assignment 3',
      marks: 60
    },
    {
      assignment: 'Assignment 4',
      marks: 60
    },
    {
      assignment: 'Assignment 5',
      marks: 60
    },
    {
      assignment: 'Assignment 6',
      marks: 60
    },
    {
      assignment: 'Assignment 7',
      marks: 60
    },
    {
      assignment: 'Assignment 8',
      marks: 60
    }
];

const Stats = () => {
    const data = useContext(QuizContext);

    return (
        <div className='w-11/12 flex flex-col items-center md:w-9/12 mx-auto my-10 text-gray-800'>
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

            <div className='mt-32 mb-6 text-2xl text-white'>
                <h3>Assignments Marks</h3>
            </div>
            
            <ResponsiveContainer width="95%" height={400}>
                <LineChart
                width={500}
                height={300}
                data={assignments}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="assignment" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="marks" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Stats;