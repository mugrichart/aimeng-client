

import React, { useEffect, useState } from 'react';
import './Info.css';

import { fromUnixTime, formatDistanceToNowStrict, startOfMonth, endOfMonth } from 'date-fns';

import Filters from './Filters';

import WarningIcon from '@mui/icons-material/Report';
import DangerIcon from '@mui/icons-material/Warning';
import SuccessIcon from '@mui/icons-material/Check';
import InfoIcon from '@mui/icons-material/Notifications';

const icons = {
  '1': <SuccessIcon /> ,
  '0': <InfoIcon />,
  '-1': <WarningIcon />,
  '-2' : <DangerIcon />
}


// Get the current date
const currentDate = new Date();

// Get the start and end of the current month in milliseconds (current year)
const startOfCurrentMonth = Math.floor(startOfMonth(currentDate).getTime() / 1000); // Epoch seconds
const endOfCurrentMonth = Math.floor(endOfMonth(currentDate).getTime() / 1000); // Epoch seconds

// Function to generate random epoch time between start and end of the current month
function getRandomEpochTimeWithinMonth() {
  return Math.floor(Math.random() * (endOfCurrentMonth - startOfCurrentMonth + 1)) + startOfCurrentMonth;
}

// Function to generate a random hardware number between 1 and 5
function getRandomHardwareNumber() {
  return Math.floor(Math.random() * 5) + 1; // Random number between 1 and 5
}

// Populate `initialLogs` with valid random epoch times and hardware numbers
const initialLogs = Array.from({ length: 12 }, () => ({
  msg: `hardware ${getRandomHardwareNumber()} was initiated successfully`, // Randomize hardware number
  time: getRandomEpochTimeWithinMonth(), // Valid epoch time within the current month and year
  status: [0, 1, -1, -2][Math.floor(Math.random() * 4)] // Randomly assign a status value
}));



// const initialLogs = [
//   {
//     msg: 'hardware 1 was initiated successfully',
//     time: 1691826001,
//     status: 0
//   },
//   {
//     msg: 'hardware 1 was initiated successfully',
//     time: 1691537812,
//     status: -1
//   },
//   {
//     msg: 'hardware 1 was initiated successfully',
//     time: 1691749823,
//     status: 1
//   },
//   {
//     msg: 'hardware 1 was initiated successfully',
//     time: 1691897621,
//     status: -2
//   },
//   {
//     msg: 'hardware 1 was initiated successfully',
//     time: 1691644820,
//     status: 0
//   },
//   {
//     msg: 'hardware 1 was initiated successfully',
//     time: 1691775129,
//     status: 1
//   },
//   {
//     msg: 'hardware 1 was initiated successfully',
//     time: 1691961220,
//     status: 0
//   },
//   {
//     msg: 'hardware 1 was initiated successfully',
//     time: 1691883920,
//     status: 1
//   },
//   {
//     msg: 'hardware 1 was initiated successfully',
//     time: 1691697621,
//     status: 1
//   },
//   {
//     msg: 'hardware 1 was initiated successfully',
//     time: 1691605121,
//     status: 0
//   },
//   {
//     msg: 'hardware 1 was initiated successfully',
//     time: 1691810421,
//     status: -1
//   },
//   {
//     msg: 'hardware 1 was initiated successfully',
//     time: 1691783521,
//     status: -2
//   }
// ];


const colors = {
  '1' :  { color: '#1e991e', background: '#acc8ba'},
  '0' : { color: '#4989b7', background: '#acc8ba'},
  '-1': { color: 'yellow', background: '#acc8ba'},
  '-2': { color: 'red', background: '#acc8ba'},
}

const initialFilter = {sort: 'status', order: 'descending'}

const sorter =  (filter, array) => {
  const sortedArray = [...array];
  sortedArray.sort((a, b) => a[filter.sort] - b[filter.sort]);
  if (filter.order === 'descending') sortedArray.reverse();
  return sortedArray;
}


const Info = () => {
  const [logs, setLogs] = useState(sorter(initialFilter, initialLogs))
  const [sort, setSort] = useState(initialFilter.sort);
  const [order, setOrder] = useState(initialFilter.order)

  useEffect(() => {
    setLogs( prev => {
      const newArr = sorter({sort, order}, prev) 
      console.log(newArr);
      return newArr }) 
  }, [order, sort])

  return (
    <div className='info'>
      <header>
        <h1>Event logs</h1>
        <div className="filters">
          <Filters setSort={setSort} setOrder={setOrder} order={order} sort={sort}/>
        </div>
      </header>
      <ul>
        {
          logs.map((log, i) => 
            <li key={i} style={{ color: colors[log.status].color, background: colors[log.status].background}}>
              {formatDistanceToNowStrict(fromUnixTime(log.time), { addSuffix: true})}, 
              {log.msg} 
              {icons[log.status]}
            </li>)
        }
      </ul>
      
    </div>
  )
}

export default Info
