import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

interface PriceChipsProps {
  price: number[];
  setPrice: React.Dispatch<React.SetStateAction<number[]>>;
}
export default function PriceChips({ price, setPrice }: PriceChipsProps) {
  const handleDelete = () => {
    setPrice([0,200]);
  };

  return (
    <Stack direction="row" spacing={1} sx={{ p: '9px' }}>
      <Chip label={`$${price[0]} - ${price[1]}`} onDelete={handleDelete} size="small" />
    </Stack>
  );
}
