import React from 'react';
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

 export const MostSoldCategoryPieChart = () => {
  const categoryData = [
    { name: 'International', value: 500 },
    { name: 'Club', value: 300 },
    { name: 'Retro', value: 400 },
    { name: 'Others', value: 250 },
    
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie data={categoryData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8E05C2" label/>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};


