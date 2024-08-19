

import React from 'react';

import { BarChart } from '@mui/x-charts/BarChart';

import Gauge from './Gauge';

const seriesA = {
  data: [2, 3, 1, 4, 5],
  label: 'Ph',
};
const seriesB = {
  data: [3, 1, 4, 2, 1],
  label: 'Humidity',
};
const seriesC = {
  data: [3, 2, 4, 5, 1],
  label: 'Moisture',
};
const seriesD = {
  data: [3, 2, 4, 5, 1],
  label: 'Temperature',
};
const seriesE = {
  data: [3, 2, 4, 5, 1],
  label: 'Nutrients',
};

const Graph = () => {
  return (
    <div className='graph'>
      <BarChart
        width={600}
        height={300}
        series={[
          { ...seriesA, stack: 'total', color: '#761b0b' },
          { ...seriesB, stack: 'total', color: '#bcd541' },
          { ...seriesC, stack: 'total', color: '#093f1b' },
          { ...seriesD, stack: 'total', color: '#ffde59' },
          { ...seriesE, stack: 'total', color: '#d57f41' },
        ]}
      />
      <div className='gauges'>
        <Gauge quantity={50} arcColor = '#761b0b'/>
        <Gauge quantity={30} arcColor = '#bcd541'/>
        <Gauge quantity={70} arcColor = '#093f1b'/>
        <Gauge quantity={10} arcColor = '#ffde59'/>
        <Gauge quantity={20} arcColor = '#d57f41'/>
      </div>
    </div>
  )
}

export default Graph
