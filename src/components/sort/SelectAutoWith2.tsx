import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface SelectAutoWidthProps {
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
}

export default function SelectAutoWidth({ sortBy, setSortBy }: SelectAutoWidthProps) {
  // const [sortBy, setSortBy] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSortBy(event.target.value);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography component="span" variant="body1">
        Sort by:
      </Typography>
      <FormControl sx={{ m: 1, minWidth: 120, minHeight: 24 }} size="small">
        <InputLabel id="demo-simple-select-autowidth-label" style={{ display: 'none' }}>
          Sort by:
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={sortBy}
          onChange={handleChange}
          autoWidth
          // label="Sort by:"
          inputProps={{ 'aria-label': 'Sort by' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="featured">Featured</MenuItem>
          <MenuItem value="newest">Newest</MenuItem>
          <MenuItem value="priceLowToHigh">Price: Low to High</MenuItem>
          <MenuItem value="priceHighToLow">Price: High to Low</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
