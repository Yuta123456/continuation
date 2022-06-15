import React, { useContext, useEffect, useState } from 'react'
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from 'recharts'
import { userInfoContext } from '../userHooks'
import contData2AllData from '../util/contData2AllData'
import contData2MonthData, { ChartData } from '../util/contData2MonthData'
import contData2YearData from '../util/contData2YearData'
type ChartProp = {
  type: string | undefined
}
const Chart: React.FC<ChartProp> = (prop) => {
  const { width, height } = useWindowDimensions()
  const ctx = useContext(userInfoContext)
  let chartData: ChartData[]
  switch (prop.type) {
    case 'month':
      chartData = contData2MonthData(ctx.userInfo?.contributionData)
      break
    case 'year':
      chartData = contData2YearData(ctx.userInfo?.contributionData)
      break
    case 'all':
      chartData = contData2AllData(ctx.userInfo?.contributionData)
      break
    default:
      chartData = []
  }
  return (
    <BarChart
      width={width * 0.9}
      height={height * 0.65}
      data={chartData}
      style={{ margin: '30px 20px 0px 10px' }}
      maxBarSize={width * 0.05}
      // onClick={(v, i)=>{console.log(v, i)}}
      // onMouseEnter={(v, i)=>{console.log(v, i)}}
    >
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#8884d8" />
    </BarChart>
  )
}
export const useWindowDimensions = () => {
  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window
    return {
      width,
      height,
    }
  }

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())
  useEffect(() => {
    const onResize = () => {
      setWindowDimensions(getWindowDimensions())
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return windowDimensions
}
export default Chart
