import { LineChart, Line, CartesianGrid, YAxis, XAxis } from 'recharts';
import React, { useContext, useEffect, useState } from 'react';
import contData2ChartData from '../util/contData2ChartData';
import { userInfoContext } from '../userHooks';
const LineChartComponent = () => {
    const { width,  height} = useWindowDimensions();
    const ctx = useContext(userInfoContext);

    const chartData = contData2ChartData(ctx.userInfo?.contributionData);

    return (
        <LineChart data={chartData} width={width * 0.65} height={height * 0.65} style={{margin: "0 auto"}}>
            <XAxis dataKey="name"/>
            <YAxis/>
            <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
            {/* <Line type="monotone" dataKey="uv" stroke="#8884d8" /> */}
            <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
        </LineChart>
    );
}
export const useWindowDimensions = () => {
 
    const getWindowDimensions = () => {
      const { innerWidth: width, innerHeight: height } = window;
      return {
        width,
        height
      };
    }
   
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    useEffect(() => {
      const onResize = () => {
        setWindowDimensions(getWindowDimensions());
      }
      window.addEventListener('resize', onResize);
      return () => window.removeEventListener('resize', onResize);
    }, []);
    
    return windowDimensions;
}

export default LineChartComponent;