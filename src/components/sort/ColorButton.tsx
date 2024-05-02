import React, { FC, useState } from 'react';
import Button from '@mui/material/Button';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Check } from '@mui/icons-material';

interface ColorButtonProps {
  color: string;
  selected: boolean;
  onClick: () => void;
}

const ColorButton: FC<ColorButtonProps> = ({ color, selected, onClick }) => {
  const [isPressed, setIsPressed] = useState(selected);

  const hexToRgb = (hex: string): string | null => {
    // Преобразуем 3-значные hex-цвета в 6-значные
    hex = hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => r + r + g + g + b + b);

    // Разбиваем HEX на составляющие (R, G, B)
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) {
      return null;
    }

    const r = parseInt(result[1], 16);
    const g = parseInt(result[2], 16);
    const b = parseInt(result[3], 16);

    // Возвращаем RGB строку
    return `rgb(${r}, ${g}, ${b})`;
  };

  const getIconColor = (buttonColor: string) => {
    const luminanceThreshold = 0.5;
    const rgbString = hexToRgb(buttonColor);
    if (rgbString === null) {
      return 'white'; // Или другое значение по умолчанию
    }

    const rgb = rgbString
      .substring(rgbString.indexOf('(') + 1, rgbString.lastIndexOf(')'))
      .split(',')
      .map((colorItem) => parseInt(colorItem.trim(), 10));

    const luminance = (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255;
    return luminance > luminanceThreshold ? 'black' : 'white';
  };



  const iconColor = getIconColor(color);

  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: color,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        border: '2px solid #CCCCCC',
        borderRadius: '50%',
        minWidth: 0,
        width: isPressed ? 26 : 24,
        minHeight: 0,
        height: isPressed ? 26 : 24,
        padding: 0,
        boxShadow: isPressed ? `0 0 5px ${color}` : 'none',
        '& .MuiSvgIcon-root': {
          fontSize: 12,
          color: iconColor,
          opacity: isPressed ? 1 : 0,
          transition: 'opacity 0.3s',
        },
        '&:hover': {
          backgroundColor: color,
        },
      }}
      onClick={() => {
        setIsPressed(!isPressed);
        onClick();
      }}
    >
      <Check />
    </Button>
  );
};

export default ColorButton;
