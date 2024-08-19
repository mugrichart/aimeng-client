
import React from 'react';
import './Left.css'

const Left = () => {
  return (
    <div className='left'>
        <div className="avatar-container">
          <img src="https://res.cloudinary.com/dtkxmg1yk/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1724072371/aimeng/download_fjayoa.png" alt="user avatar" />
          <p>Vernet</p>
        </div>
        <ul className="system-list">
            { [0, 1, 2, 3, 4, 5].map((i, index) => <li key={index}>system {i}</li>) }
        </ul>
        <div className="clock">11:00</div>
    </div>
  )
}

export default Left
