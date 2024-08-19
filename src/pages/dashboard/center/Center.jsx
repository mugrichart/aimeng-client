

import React from 'react';
import './Center.css'

import Logs from './logs/Logs';
import Graph from './graph/Graph';

const Center = () => {
  return (
    <div className='center'>
      <Graph />
      <Logs />
    </div>
  )
}

export default Center
