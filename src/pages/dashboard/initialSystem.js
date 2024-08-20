function generateRandomData(length, min, max) {
    return Array.from({ length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
  }
  
  function generateRandomAngle(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function generateRandomState() {
    return Math.random() >= 0.5;
  }
  
  function generateRandomInfo() {
    const infos = [
      'Water level is optimal',
      'PH level requires adjustment',
      'Temperature is stable',
      'Nutrient levels are low',
      'Pump running smoothly',
      'Fish tank is clean',
      'Light levels are sufficient'
    ];
    return Array.from({ length: 5 }, () => infos[Math.floor(Math.random() * infos.length)]);
  }
  
  function generateRandomHardware() {
    const hardwareNames = [
      'Water Pump',
      'Air Pump',
      'Heater',
      'Grow Light',
      'PH Sensor',
      'Temperature Sensor',
      'Fish Feeder'
    ];
    return hardwareNames.map(name => ({ name, state: generateRandomState() }));
  }
  
  const initialSystem = {
    system0: {
      series: [
        {
          data: [2, 3, 1, 4, 5],
          label: 'Ph',
          color: '#761b0b',
          stack: 'total',
          angle: generateRandomAngle(0, 100)
        },
        {
          data: [3, 1, 4, 2, 1],
          label: 'Humidity',
          color: '#bcd541',
          stack: 'total',
          angle: generateRandomAngle(0, 100)
        },
        {
          data: [3, 2, 4, 5, 1],
          label: 'Moisture',
          color: '#093f1b',
          stack: 'total',
          angle: generateRandomAngle(0, 100)
        },
        {
          data: [3, 2, 4, 5, 1],
          label: 'Temperature',
          color: '#ffde59',
          stack: 'total',
          angle: generateRandomAngle(0, 100)
        },
        {
          data: [3, 2, 4, 5, 1],
          label: 'Nutrients',
          color: '#d57f41',
          stack: 'total',
          angle: generateRandomAngle(0, 100)
        }
      ],
      hardware: generateRandomHardware(),
      info: generateRandomInfo()
    },
    system1: {
      series: [
        {
          data: generateRandomData(5, 1, 5),
          label: 'Ph',
          color: '#761b0b',
          stack: 'total',
          angle: generateRandomAngle(0, 100)
        },
        {
          data: generateRandomData(5, 1, 5),
          label: 'Humidity',
          color: '#bcd541',
          stack: 'total',
          angle: generateRandomAngle(0, 100)
        },
        {
          data: generateRandomData(5, 1, 5),
          label: 'Moisture',
          color: '#093f1b',
          stack: 'total',
          angle: generateRandomAngle(0, 100)
        },
        {
          data: generateRandomData(5, 1, 5),
          label: 'Temperature',
          color: '#ffde59',
          stack: 'total',
          angle: generateRandomAngle(0, 100)
        },
        {
          data: generateRandomData(5, 1, 5),
          label: 'Nutrients',
          color: '#d57f41',
          stack: 'total',
          angle: generateRandomAngle(0, 100)
        }
      ],
      hardware: generateRandomHardware(),
      info: generateRandomInfo()
    },
    system2: {
      series: [
        {
          data: generateRandomData(5, 1, 5),
          label: 'Ph',
          color: '#761b0b',
          stack: 'total',
          angle: generateRandomAngle(0, 100)
        },
        {
          data: generateRandomData(5, 1, 5),
          label: 'Humidity',
          color: '#bcd541',
          stack: 'total',
          angle: generateRandomAngle(0, 100)
        },
        {
          data: generateRandomData(5, 1, 5),
          label: 'Moisture',
          color: '#093f1b',
          stack: 'total',
          angle: generateRandomAngle(0, 100)
        },
        {
          data: generateRandomData(5, 1, 5),
          label: 'Temperature',
          color: '#ffde59',
          stack: 'total',
          angle: generateRandomAngle(0, 100)
        },
        {
          data: generateRandomData(5, 1, 5),
          label: 'Nutrients',
          color: '#d57f41',
          stack: 'total',
          angle: generateRandomAngle(0, 100)
        }
      ],
      hardware: generateRandomHardware(),
      info: generateRandomInfo()
    },
    system3: {
      series: [
        {
          data: generateRandomData(5, 1, 5),
          label: 'Ph',
          color: '#761b0b',
          stack: 'total',
          angle: generateRandomAngle(0, 100)
        },
        {
          data: generateRandomData(5, 1, 5),
          label: 'Humidity',
          color: '#bcd541',
          stack: 'total',
          angle: generateRandomAngle(0, 100)
        },
        {
          data: generateRandomData(5, 1, 5),
          label: 'Moisture',
          color: '#093f1b',
          stack: 'total',
          angle: generateRandomAngle(0, 100)
        },
        {
          data: generateRandomData(5, 1, 5),
          label: 'Temperature',
          color: '#ffde59',
          stack: 'total',
          angle: generateRandomAngle(0, 100)
        },
        {
          data: generateRandomData(5, 1, 5),
          label: 'Nutrients',
          color: '#d57f41',
          stack: 'total',
          angle: generateRandomAngle(0, 100)
        }
      ],
      hardware: generateRandomHardware(),
      info: generateRandomInfo()
    },
    system4: {
      series: [
        {
          data: generateRandomData(5, 1, 5),
          label: 'Ph',
          color: '#761b0b',
          stack: 'total',
          angle: generateRandomAngle(0, 100)
        },
        {
          data: generateRandomData(5, 1, 5),
          label: 'Humidity',
          color: '#bcd541',
          stack: 'total',
          angle: generateRandomAngle(0, 100)
        },
        {
          data: generateRandomData(5, 1, 5),
          label: 'Moisture',
          color: '#093f1b',
          stack: 'total',
          angle: generateRandomAngle(0, 100)
        },
        {
          data: generateRandomData(5, 1, 5),
          label: 'Temperature',
          color: '#ffde59',
          stack: 'total',
          angle: generateRandomAngle(0, 100)
        },
        {
          data: generateRandomData(5, 1, 5),
          label: 'Nutrients',
          color: '#d57f41',
          stack: 'total',
          angle: generateRandomAngle(0, 100)
        }
      ],
      hardware: generateRandomHardware(),
      info: generateRandomInfo()
    },
    system5: {
      series: [
        {
          data: generateRandomData(5, 1, 5),
          label: 'Ph',
          color: '#761b0b',
          stack: 'total',
          angle: generateRandomAngle(0, 100)
        },
        {
          data: generateRandomData(5, 1, 5),
          label: 'Humidity',
          color: '#bcd541',
          stack: 'total',
          angle: generateRandomAngle(0, 100)
        },
        {
          data: generateRandomData(5, 1, 5),
          label: 'Moisture',
          color: '#093f1b',
          stack: 'total',
          angle: generateRandomAngle(0, 100)
        },
        {
          data: generateRandomData(5, 1, 5),
          label: 'Temperature',
          color: '#ffde59',
          stack: 'total',
          angle: generateRandomAngle(0, 100)
        },
        {
          data: generateRandomData(5, 1, 5),
          label: 'Nutrients',
          color: '#d57f41',
          stack: 'total',
          angle: generateRandomAngle(0, 100)
        }
      ],
      hardware: generateRandomHardware(),
      info: generateRandomInfo()
    }
  };
  
//   console.log(initialSystem);
export default initialSystem  