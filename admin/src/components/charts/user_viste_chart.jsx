import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useDispatch, useSelector } from 'react-redux';
import { numberOfUsers } from '../../context/redux/analytics/analyticsAction';
import { useEffect } from 'react';

export const UserVisitedChart = () => {
  const data = [
    { month: 'Sep', users: 120 },
    { month: 'Oct', users: 2020 },
    { month: 'Nov', users: 700 },
    { month: 'Dec', users: 2580 },
    { month: 'Jan', users: 4000 },
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(numberOfUsers());
  }, []);

 const userData =  data ; //useSelector((state)=>state.analyticsReducer.numberOfUsers)
  
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={userData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="users" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};


