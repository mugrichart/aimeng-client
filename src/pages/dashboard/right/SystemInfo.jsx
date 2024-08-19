

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
    <div>
        <h3>System info</h3>
        <div className="form">
            {
                system.map(sys => <span>{sys.name} -- {sys.data}</span>)
            }
        </div>
      
    </div>
  )
}

export default SystemInfo
