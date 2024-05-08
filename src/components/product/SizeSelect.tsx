import React, { useState } from 'react';

import { Select, MenuItem, SelectChangeEvent } from '@mui/material';

  interface SizeSelectProps {
    selectedSize: string;
    setSelectedSize: React.Dispatch<React.SetStateAction<string>>;
  }

const SizeSelect: React.FC<SizeSelectProps> = ({ selectedSize, setSelectedSize }) => {
  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedSize(event.target.value);
  };

  return (
    <Select value={selectedSize} onChange={handleChange} size="small">
      <MenuItem value="6">6</MenuItem>
      <MenuItem value="7">7</MenuItem>
      <MenuItem value="8">8</MenuItem>
      <MenuItem value="9">9</MenuItem>
      <MenuItem value="10">10</MenuItem>
      <MenuItem value="11">11</MenuItem>
    </Select>
  );
};

export default SizeSelect;
