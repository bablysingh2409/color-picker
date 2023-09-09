import { useState } from 'react';
import ColorBox from './ColorBox';
import { colorContext } from '../Context';

function PickColor() {
  const [color, setColor] = useState('#000000');
  console.log(colorContext);
  return (
    <>
      <div style={{ marginBottom: '20px' }}>
        <h1>Pick A Color</h1>
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
      </div>
      <colorContext.Provider value={color}>
        <ColorBox />
      </colorContext.Provider>
    </>
  );
}

export default PickColor;
