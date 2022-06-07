import { LineChart, Line, CartesianGrid, YAxis, XAxis } from 'recharts';
import React, { useEffect, useState } from 'react';
const LineChartComponent = () => {
    const { width,  } = useWindowDimensions();
    const data = [{name: "1", pv: 100}, 
        {name: "2", pv: 130},
        {name: "3", pv: 180},
        {name: "4", pv: 200},
        {name: "5", pv: 120},
        {name: "6", pv: 110},
    ];

    return (
        <LineChart data={data} width={width * 0.85} height={width * 0.85} style={{margin: "0 auto"}}>
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