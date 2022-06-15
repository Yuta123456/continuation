import { YAxis, XAxis, BarChart, Bar } from 'recharts'
import React, { useContext, useEffect, useState } from 'react'
import contData2YearData from '../util/contData2YearData'
import { userInfoContext } from '../userHooks'
const LineChartComponent = () => {
  const { width, height } = useWindowDimensions()
  const ctx = useContext(userInfoContext)

  const chartData = contData2YearData(ctx.userInfo?.contributionData)

  return (
    <BarChart width={width * 0.85} height={height * 0.65} data={chartData} style={{ margin: '0 auto' }}>
      <XAxis dataKey="name" />
      <YAxis />
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

export default LineChartComponent
