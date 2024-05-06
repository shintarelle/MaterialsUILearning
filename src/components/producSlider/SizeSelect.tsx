import React, { useState } from 'react';

import { Select, MenuItem, SelectChangeEvent } from '@mui/material';

const SizeSelect: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>('9');

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Select value={selectedValue} onChange={handleChange} size="small">
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
