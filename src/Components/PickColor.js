import { useState } from 'react';
import ColorBox from './ColorBox';

function PickColor() {
  const [color, setColor] = useState('#000000');
  return (
    <>
      <div style={{ marginBottom: '20px' }}>
        <h1>Pick A Color</h1>
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
      </div>
      <ColorBox color={color} />
    </>
  );
}

export default PickColor;
