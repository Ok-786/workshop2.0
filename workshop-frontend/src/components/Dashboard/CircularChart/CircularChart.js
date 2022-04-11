import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
    { name: 'Group A', value: 700 },
    { name: 'Group B', value: 300 },
];
const COLORS = ['#6792ef', '#203c82', '#519cff', '#04c5e8'];

export default function CircularChart() {
    return (
        <ResponsiveContainer width='30%' height='10%'>
            <PieChart width='20%' height='20%'  >
                <Pie
                    data={data}
                    innerRadius={30}
                    outerRadius={50}
                    fill="#6792ef"
                    paddingAngle={5}
                    dataKey="value"
                >
                    
                    <Tooltip />
                    <Legend />
                    {data.map((entry, index) => (
                        <Cell dataKey="name" key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>

            </PieChart>

        </ResponsiveContainer>
    );

}