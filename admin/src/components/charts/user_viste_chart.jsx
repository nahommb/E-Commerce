import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useDispatch, useSelector } from 'react-redux';
import { numberOfUsers ,userVisted} from '../../context/redux/analytics/analyticsAction';
import { useEffect } from 'react';

export const UserVisitedChart = () => { 
    
    const vistorsData = useSelector((state)=>state.analyticsReducer.vistors)
  const data = [
    { week: 'Week 4', vistors:  vistorsData.threeWeeksAgo},
    { week: 'Week 3', vistors: vistorsData.twoWeeksAgo },
    { week: 'Week 2', vistors: vistorsData.previousWeek},
    { week: 'Week 1', vistors: vistorsData.thisWeek},
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userVisted());
  }, []);

 
   
 const userData =  data ; //useSelector((state)=>state.analyticsReducer.numberOfUsers)
  
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={userData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="week" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="vistors" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};


