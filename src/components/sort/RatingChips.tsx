import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

interface RatingChipsProps {
  rating: number;
  setRating: React.Dispatch<React.SetStateAction<number>>;
}
export default function RatingChips({ rating, setRating }: RatingChipsProps) {
  const handleDelete = () => {
    setRating(0)
  };

  return (
    <Stack direction="row" spacing={1} sx={{ p: '9px' }}>
      <Chip label={`up${rating}Star`} onDelete={handleDelete} size="small" />
    </Stack>
  );
}
