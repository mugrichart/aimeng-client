

import React from 'react'

const initialLogs = [
    'Today at 12:45 hardware 1 was initiated successfully',
    'Today at 03:45 admin 3 attempted multiple failed logins'
]
const Logs = () => {
  return (
    <div className='logs'>
      <h3>Event Logs</h3>
      <div>
        {
            initialLogs.map(log => <div className='log'>{log}</div>)
        }
      </div>
    </div>
  )
}

export default Logs
