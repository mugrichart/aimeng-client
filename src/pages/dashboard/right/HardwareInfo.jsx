import React, { useState } from 'react';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const initialHardW = [
  { name: 'hardware 1', state: true },
  { name: 'hardware 2', state: false },
  { name: 'hardware 3', state: true },
  { name: 'hardware 4', state: false },
  { name: 'hardware 5', state: true },
  { name: 'hardware 6', state: true },
  { name: 'hardware 7', state: false },
  { name: 'hardware 8', state: true },
];

const HardwareInfo = () => {
  const [hardware, setHardware] = useState(initialHardW);

  // Function to toggle the state of specific hardware
  const handleToggle = (index) => {
    // Create a new array with the updated hardware state
    const updatedHardware = hardware.map((hw, i) =>
      i === index ? { ...hw, state: !hw.state } : hw
    );
    
    setHardware(updatedHardware); // Set the new array as the updated state
  };

  return (
    <div className='hardwareInfo'>
      <h3>Hardware info</h3>
      <FormGroup className="form">
        {hardware.map((hw, index) => (
          <FormControlLabel
            key={index}
            control={
              <Switch
                checked={hw.state}
                onChange={() => handleToggle(index)} // Pass the index to toggle the correct hardware
              />
            }
            label={hw.name}
            labelPlacement="start"
          />
        ))}
      </FormGroup>
    </div>
  );
};

export default HardwareInfo;
