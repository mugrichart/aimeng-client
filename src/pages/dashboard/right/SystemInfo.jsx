

import React from 'react'

const SystemInfo = ({ selectedSystem }) => {
  return (
    <div className='systemInfo'>
        <h3>System info</h3>
        <ul className="form">
            {
                selectedSystem.info.map((info, i) => <li key={i}>{info}</li>)
            }
        </ul>
      
    </div>
  )
}

export default SystemInfo
