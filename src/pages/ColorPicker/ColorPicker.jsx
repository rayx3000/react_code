const { useState } = React;
import './ColorPicker.css';

export const ColorPicker = () => {
  const [color, setColor] = useState("#ffffff")

  return (
    <div id="color-picker-container" style={{ backgroundColor: color }}>
      <h3>Choose a color using the color input below:</h3>
      <input type="color" id="color-input" value={color} onChange={e => setColor(e.target.value)} />
    </div>
  );
};