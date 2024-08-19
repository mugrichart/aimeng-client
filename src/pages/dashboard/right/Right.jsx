

import React from 'react';
import './Right.css';

import HardwareInfo from './HardwareInfo';
import SystemInfo from './SystemInfo';

const Right = () => {
  return (
    <div className='right'>
      <HardwareInfo />
      <SystemInfo />
    </div>
  )
}

export default Right
