import React, { FC, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ColorButton from './ColorButton';

interface ColorPickerProps {
  availableColors: string[];
  colors: string[];
  setColors: React.Dispatch<React.SetStateAction<string[]>>;
}

const ColorPicker: FC<ColorPickerProps> = ({ availableColors, colors, setColors }) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
    if (colors.includes(color)) {
      // Если цвет уже выбран, удаляем его из массива выбранных цветов
      setColors(colors.filter((c) => c !== color));
    } else {
      // Если цвет еще не выбран, добавляем его в массив выбранных цветов
      setColors([...colors, color]);
    }
  };


  return (
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
      {availableColors.map((color) =>
        <ColorButton
          key={color}
        color={color}
        selected={colors.includes(color)}
        onClick={() => handleColorClick(color)}
      />)}

      {/* <ColorButton
        color="#4caf50"
        selected={colors.includes('#4caf50')}
        onClick={() => handleColorClick('#4caf50')}
      />
      <ColorButton
        color="#2196f3"
        selected={colors.includes('#2196f3')}
        onClick={() => handleColorClick('#2196f3')}
      />
      <ColorButton
        color="#f44336"
        selected={colors.includes('#f44336')}
        onClick={() => handleColorClick('#f44336')}
      />
      <ColorButton
        color="#ffeb3b"
        selected={colors.includes('#ffeb3b')}
        onClick={() => handleColorClick('#ffeb3b')}
      />
      <ColorButton
        color="#000"
        selected={colors.includes('#000')}
        onClick={() => handleColorClick('#000')}
      />
      <ColorButton
        color="#fff"
        selected={colors.includes('#fff')}
        onClick={() => handleColorClick('#fff')}
      /> */}
    </Box>
  );
};

export default ColorPicker;
