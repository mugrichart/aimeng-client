

import React, { useEffect, useState } from 'react';
import './Dashboard.css';

import Left from './left/Left';

import Right from './right/Right'
import HardwareInfo from './right/HardwareInfo'
import SystemInfo from './right/SystemInfo'

import Center from './center/Center';
import Graph from './center/graph/Graph';
import Logs from './center/event-logs/Logs';

import initialSystem from './initialSystem';


const Dashboard = () => {
  const [system, setSystem] = useState(0);
  const [selectedSystem, setSelectedSystem] = useState(initialSystem['system0'])

  useEffect(() => {
    setSelectedSystem(initialSystem[`system${system}`])
  }, [system])

  return (
    <div className='Dashboard'>
      <Left system={system} setSystem={setSystem} />
      <Center>
          <Graph series={selectedSystem.series} system={system} />
          <Logs />
      </Center>
      <Right>
          <HardwareInfo selectedSystem={selectedSystem} setSelectedSystem={setSelectedSystem} />
          <SystemInfo selectedSystem={selectedSystem} />
      </Right>
    </div>
  )
}

export default Dashboard
