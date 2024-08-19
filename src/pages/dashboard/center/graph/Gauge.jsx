import React from 'react';
import {
  GaugeContainer,
  GaugeValueArc,
  GaugeReferenceArc,
  useGaugeState,
} from '@mui/x-charts/Gauge';

function GaugePointer() {
  const { valueAngle, outerRadius, cx, cy } = useGaugeState();

  if (valueAngle === null) {
    // No value to display
    return null;
  }

  const target = {
    x: cx + outerRadius * Math.sin(valueAngle),
    y: cy - outerRadius * Math.cos(valueAngle),
  };
  return (
    <g>
      <circle cx={cx} cy={cy} r={5} fill="black" />
      <path
        d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
        stroke="black"
        strokeWidth={5}
      />
    </g>
  );
}

const Gauge = ({ quantity, arcColor }) => {
  return (
    <GaugeContainer
      width={100}
      height={100}
      startAngle={-90}
      endAngle={90}
      value={quantity}
    >
      <GaugeReferenceArc />
      <GaugeValueArc sx={{ fill: arcColor }}/>
      <GaugePointer />
    </GaugeContainer>
  );
}

export default Gauge
