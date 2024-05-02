import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

interface CategoryChipsProps {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

export default function CategoryChips({ category, setCategory }: CategoryChipsProps) {
  const handleDelete = () => {
    setCategory('')
  };

  return (
    <Stack direction="row" spacing={1} sx={{ p: '9px' }}>
      <Chip label={category} onDelete={handleDelete} size="small" />
    </Stack>
  );
}
