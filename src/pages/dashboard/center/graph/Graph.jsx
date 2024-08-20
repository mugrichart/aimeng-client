

import React from 'react';

import { BarChart } from '@mui/x-charts/BarChart';

import Gauge from './Gauge';

const Graph = ({ series, system }) => {
  return (
    <div className='graph'>
      <h2>System {system}</h2>
      <BarChart
        width={600}
        height={300}
        series={series}
      />
      <div className='gauges'>
        <Gauge quantity={series[0].angle} arcColor = '#761b0b'/>
        <Gauge quantity={series[1].angle} arcColor = '#bcd541'/>
        <Gauge quantity={series[2].angle} arcColor = '#093f1b'/>
        <Gauge quantity={series[3].angle} arcColor = '#ffde59'/>
        <Gauge quantity={series[4].angle} arcColor = '#d57f41'/>
      </div>
    </div>
  )
}

export default Graph
