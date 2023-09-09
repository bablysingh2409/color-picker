import React from 'react';
import ColorText from './ColorText';
function ColorBox({ color }) {
  return (
    <div
      style={{
        width: '300px',
        height: '200px',
        border: `10px solid ${color}`,
        margin: 'auto',
      }}
    >
      <ColorText color={color} />
    </div>
  );
}

export default ColorBox;
