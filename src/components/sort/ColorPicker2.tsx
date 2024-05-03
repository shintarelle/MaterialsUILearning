import React, { FC, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import ColorButton from './ColorButton';
// eslint-disable-next-line import/no-extraneous-dependencies
import CheckIcon from '@mui/icons-material/Check';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import styled from '@emotion/styled';
import Fab from '@mui/material/Fab';

const RoundedCheckbox = styled(Checkbox)(({ theme }) => ({
  borderRadius: '50%',
  '& .MuiIconButton-root': {
    padding: 0, // Убираем внутренний отступ
  },
  '& .MuiSvgIcon-root': {
    borderRadius: '50%',
    width: '1em',
    height: '1em',
  },
}));

interface ColorPickerProps {
  colors: string[];
  setColors: React.Dispatch<React.SetStateAction<string[]>>;
}

const ColorPicker2: FC<ColorPickerProps> = ({ colors, setColors }) => {
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
    <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
      {/* <Fab size="small" color="secondary" aria-label="add">
        <CheckIcon />
      </Fab> */}
      <RoundedCheckbox
        color="primary"
        checked={selectedColor === '#4caf50'}
        onChange={() => handleColorClick('#4caf50')}
      />
      <RoundedCheckbox
        color="secondary"
        checked={selectedColor === '#2196f3'}
        onChange={() => handleColorClick('#2196f3')}
      />
      <RoundedCheckbox
        color="error"
        checked={selectedColor === '#f44336'}
        onChange={() => handleColorClick('#f44336')}
      />
    </Box>
  );
};

export default ColorPicker2;
