import React from 'react';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';


const HardwareInfo = ({ selectedSystem, setSelectedSystem }) => {

  const handleToggle = (index) => {
    const updatedHardware = selectedSystem.hardware.map((hw, i) =>
      i === index ? { ...hw, state: !hw.state } : hw
    );

    setSelectedSystem( {...selectedSystem, hardware: updatedHardware } ); 
  };

  return (
    <div className='hardwareInfo'>
      <h3>Hardware info</h3>
      <FormGroup className="form">
        {selectedSystem.hardware.map((hw, index) => (
          <FormControlLabel
            key={index}
            control={
              <Switch
                checked={hw.state}
                onChange={() => handleToggle(index)} 
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
