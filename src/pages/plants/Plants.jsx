

import React from 'react';
import './Plants.css'
import PlantStats from './PlantStats';

const base = 'https://res.cloudinary.com/dtkxmg1yk/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/'

const plants = [
    {
      id: '0',
      url: 'v1724072338/aimeng/images_zkz6f1.jpg',
    },
    {
      id: '1',
      url: 'v1724072305/aimeng/images_gudgkz.jpg',
    },
    {
      id: '2',
      url: 'v1724072295/aimeng/images_jluyg6.jpg',
    },
    {
      id: '3',
      url: 'v1724072276/aimeng/download_cmerfs.jpg',
    },
    {
      id: '4',
      url: 'v1724072250/aimeng/download_qiedmd.jpg'
    }
]


const Plants = () => {
  return (
    <div className='plants'>
        <div className="plants--container">
          {plants.map(plant => <img className='plant' src={`${base+plant.url}`} alt='plant image'/>)}
        </div>
        <PlantStats />
    </div>
  )
}

export default Plants
