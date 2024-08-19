

import React from 'react'

const system = [
    {name: 'Info 1', data: 'Data 1'},
    {name: 'Info 2', data: 'Data 1'},
    {name: 'Info 1', data: 'Data 2'},
    {name: 'Info 1', data: 'Data 1'},
    {name: 'Info 5', data: 'Data 5'},
    {name: 'Info 1', data: 'Data 1'},
    {name: 'Info 1', data: 'Data 1'},
    {name: 'Info 7', data: 'Data 1'},
    {name: 'Info 1', data: 'Data 1'},
    {name: 'Info 1', data: 'Data 1'},
]

const SystemInfo = () => {
  return (
    <div className='systemInfo'>
        <h3>System info</h3>
        <ul className="form">
            {
                system.map((sys, i) => <li key={i}>{sys.name} -- {sys.data}</li>)
            }
        </ul>
      
    </div>
  )
}

export default SystemInfo
