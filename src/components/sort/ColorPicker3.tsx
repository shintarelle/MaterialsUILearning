import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import CheckIcon from '@mui/icons-material/Check';

const CircleCheckbox = styled('div')(({ theme }) => ({
  display: 'inline-block',
  width: 34,
  height: 34,
  borderRadius: '50%',
  border: `1px solid ${theme.palette.divider}`,
  // backgroundColor: green[500], // Зеленый цвет фона
  overflow: 'hidden',
  cursor: 'pointer',
  position: 'relative',
  '&:hover': {
    // backgroundColor: green[500],
  },
  '& .MuiIconButton-root': {
    display: 'none', // Скрываем иконку по умолчанию
  },
  '&.Mui-checked .MuiIconButton-root': {
    display: 'block', // Показываем иконку при нажатии
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: theme.palette.getContrastText(green[500]), // Цвет иконки
  },
}));

export default function ColorCheckbox() {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    // <CircleCheckbox onClick={handleChange} className={checked ? 'Mui-checked' : ''} sx={{display: 'flex', justifyContent: 'center', alignItems:'center'}}>
      <Checkbox checked={checked} onChange={handleChange} sx={{backgroundColor: '#000'}} />
      // {/* <CheckIcon sx={{width: '12px', position: 'absolute'}}/> */}
    // </CircleCheckbox>
  );
}
