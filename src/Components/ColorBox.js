import React from 'react';
import ColorText from './ColorText';
function ColorBox() {
  return (
    <div
      style={{
        width: '300px',
        height: '200px',
        border: `10px solid black`,
        margin: 'auto',
      }}
    >
      <ColorText />
    </div>
  );
}

export default ColorBox;
