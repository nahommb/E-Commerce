import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export const ProductsSoldChart = () => {
  const salesData = [
    { month: 'January', productsSold: 150 },
    { month: 'February', productsSold: 200 },
    { month: 'March', productsSold: 300 },
    { month: 'April', productsSold: 250 },
    { month: 'May', productsSold: 400 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300} >
      <BarChart data={salesData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" fill='#8E05C2' />
        <YAxis fill='#8E05C2' />
        <Tooltip />
        <Legend />
        <Bar dataKey="productsSold" fill="#8E05C2" />
      </BarChart>
    </ResponsiveContainer>
  );
};


