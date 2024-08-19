

import React from 'react';
import { useNavigate } from 'react-router-dom'

const initialLogs = [
    'Today at 12:45 hardware 1 was initiated successfully',
    'Today at 03:45 admin 3 attempted multiple failed logins'
]
const Logs = () => {
  const navigate = useNavigate()
  return (
    <div className='logs' onClick={() => navigate('info')}>
      <h3>Event Logs</h3>
      <ul>
        {
            initialLogs.map((log, i) => <li key={i} className='log'>{log}</li>)
        }
      </ul>
    </div>
  )
}

export default Logs
