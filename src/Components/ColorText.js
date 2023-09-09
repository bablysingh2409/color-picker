import { useContext } from 'react';
import { colorContext } from '../Context';

function ColorText() {
  const color = useContext(colorContext);
  return <h2 style={{ color: `${color}` }}>color : {color}</h2>;
}

export default ColorText;
