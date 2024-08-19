

import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

function Plot() {
  return (
    <LineChart
      xAxis={[{ data: [0, 1, 2, 3, 4, 5] }]}
      series={[
        {
          data: [2, 4, 10, 16, 25, 50],
        },
      ]}
      width={500}
      height={300}
    />
  );
}

const PlantStats = () => {
  return (
    <div className='plant-stats'>
        <div>
            <Plot />
            <Composition />
        </div>
        <div>
            <Requirements />
            <Recipe />
        </div>
    </div>
  )
}

export default PlantStats


const Composition = () => {
    return (
        <div className='composition'>
            <img src="https://res.cloudinary.com/dtkxmg1yk/image/upload/v1724075376/aimeng/download_dkvq7l.png" alt="chemical formula" />
        </div>
    )
}

const Requirements = () => {
    return (
        <div className="requirements">
            <h3>Requirements</h3>
            <ul>
                <li>a humid soild</li>
                <li>a humid soild</li>
                <li>a humid soild</li>
                <li>a humid soild</li>
                <li>a humid soild</li>
                <li>a humid soild</li>
            </ul>
        </div>
    )
}

const Recipe = () => {
    return (
        <div className="recipe">
            <h3>Recipe</h3>
            <ul>
                <li>tomato salad</li>
                <li>tomato salad</li>
                <li>tomato salad</li>
                <li>tomato salad</li>
                <li>tomato salad</li>
                <li>tomato salad</li>
            </ul>
        </div>
    )
}

