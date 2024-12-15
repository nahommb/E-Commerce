import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deliveredAndNotDelivered } from '../../context/redux/analytics/analyticsAction';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export const DeliveryStatusChart = () => {
  // const data = [
  //   { period: 'Week 1', delivered: 20, notDelivered: 30 },
  //   { period: 'Week 2', delivered: 150, notDelivered: 20 },
  //   { period: 'Week 3', delivered: 20, notDelivered: 50 },
  //   { period: 'Week 4', delivered: 250, notDelivered: 100 },
  // ];

  const dispatch = useDispatch();
  useEffect(() => {
   dispatch(deliveredAndNotDelivered())
    // Fetch data from the API or any other source
  }, []);

  const data = useSelector((state)=>state.analyticsReducer.deliveredAndNotDelivered)

  console.log(data)

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="period" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="delivered" stroke="#8E05C2" fill="#8E05C2" />
        <Area type="monotone" dataKey="notDelivered" stroke="black" fill="black" />
      </AreaChart>
    </ResponsiveContainer>
  );
};


