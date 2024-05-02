import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';

export default function SortButton() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [sortBy, setSortBy] = useState<string>('');

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSortBy = (sortByValue: string) => {
    setSortBy(sortByValue);
    setAnchorEl(null);
    // Здесь можно добавить логику сортировки
  };

  return (
    <>
      <Button aria-controls="sort-menu" aria-haspopup="true" onClick={handleClick}>
        Sort by: {sortBy || 'None'}
      </Button>
      <Menu id="sort-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={() => handleSortBy('Featured')}>Featured</MenuItem>
        <MenuItem onClick={() => handleSortBy('Newest')}>Newest</MenuItem>
        <MenuItem onClick={() => handleSortBy('Price: High - Low')}>Price: High - Low</MenuItem>
        <MenuItem onClick={() => handleSortBy('Price: Low - High')}>Price: Low - High</MenuItem>
      </Menu>
    </>
  );
}
