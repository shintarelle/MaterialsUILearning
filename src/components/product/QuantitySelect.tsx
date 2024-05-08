import React, { useState } from 'react';

import { IconButton, Stack } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

interface QuantitySelectProps {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}
const QuantitySelect: React.FC<QuantitySelectProps> = ({ quantity, setQuantity }) => {
  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        p: '4px',
        width: '88px',
        border: '1px solid rgba(145, 158, 171, 0.2)',
        borderRadius: '8px',
      }}
    >
      <IconButton onClick={decrement} size="small" sx={{ p: '5px' }}>
        <RemoveIcon sx={{ width: '16px', height: '16px', opacity: 0.7 }} />
      </IconButton>
      <span>{quantity}</span>
      <IconButton onClick={increment} size="small" sx={{ p: '5px' }}>
        <AddIcon sx={{ width: '16px', height: '16px', opacity: 0.7 }} />
      </IconButton>
    </Stack>
  );
};

export default QuantitySelect;
