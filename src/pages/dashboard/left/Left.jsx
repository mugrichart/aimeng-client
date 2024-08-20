
import React, { useState, useEffect } from 'react';
import './Left.css'

const Left = ( { system, setSystem }) => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setTime(`${hours}:${minutes}`);
    };

    updateTime(); // Set initial time
    const interval = setInterval(updateTime, 10000); // Update time every second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className='left'>
        <div className="avatar-container">
          <img src="https://res.cloudinary.com/dtkxmg1yk/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1724072371/aimeng/download_fjayoa.png" alt="user avatar" />
          <p>Vernet</p>
        </div>
        <ul className="system-list">
            { [0, 1, 2, 3, 4, 5].map((i, index) => 
            <li style={{background: index === system && 'orange'}} key={index}
              onClick={() => setSystem(index)}
            >
              system {i}
            </li>) }
        </ul>
        <div className="clock">{time}</div>
    </div>
  )
}

export default Left
