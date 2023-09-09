import React from 'react';

function ColorText({ color }) {
  return <h2 style={{ color: `${color}` }}>color : {color}</h2>;
}

export default ColorText;
