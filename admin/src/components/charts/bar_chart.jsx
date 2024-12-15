import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { numberOfProductsSold } from '../../context/redux/analytics/analyticsAction';

export const ProductsSoldChart = () => {
  // const salesData = [
  //   { month: 'January', productsSold: 150 },
  //   { month: 'February', productsSold: 200 },
  //   { month: 'March', productsSold: 300 },
  //   { month: 'April', productsSold: 250 },
  //   { month: 'May', productsSold: 400 },
  // ];

const dispatch = useDispatch()
 useEffect(()=>{
 dispatch(numberOfProductsSold())
 },[])
const salesData = useSelector((state)=>state.analyticsReducer.numberOfProductsSold)
console.log(salesData)

  return (
    <ResponsiveContainer width="100%" height={300} >
      <BarChart data={salesData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" fill='#8E05C2' />
        <YAxis fill='#8E05C2' />
        <Tooltip />
        <Legend />
        <Bar dataKey="sold" fill="#8E05C2" />
      </BarChart>
    </ResponsiveContainer>
  );
};


