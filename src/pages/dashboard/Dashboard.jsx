

import React from 'react';
import './Dashboard.css';

import Left from './left/Left';
import Right from './right/Right';
import Center from './center/Center';

const Dashboard = () => {
  return (
    <div className='Dashboard'>
      <Left />
      <Center />
      <Right />
    </div>
  )
}

export default Dashboard
