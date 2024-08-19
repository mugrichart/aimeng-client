
import React from 'react';
import './Left.css'

const Left = () => {
    console.log('left')
  return (
    <div className='left'>
        <div className="avatar"></div>
        <ul className="system-list">
            { [0, 1, 2, 3, 4, 5].map(i => <li>system {i}</li>) }
        </ul>
        <div className="clock">11:00</div>
    </div>
  )
}

export default Left
