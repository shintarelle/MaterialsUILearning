import React, { useState, ChangeEvent } from 'react';
import { Box, TextField } from '@mui/material';
// eslint-disable-next-line import/no-extraneous-dependencies
import SearchIcon from '@mui/icons-material/Search';

interface SearchSortFilterProps {
  onSearch: (value: string) => void;
}

const SearchSortFilter: React.FC<SearchSortFilterProps> = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchValue(value);
    onSearch(value); // Вызываем функцию onSearch с текущим значением
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center'}}>
      <TextField
        id="search-input"
        variant="outlined"
        value={searchValue}
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <Box sx={{ display: 'flex', alignItems: 'center', paddingLeft: 1 }}>
              <SearchIcon />
            </Box>
          ),
        }}
      />
    </Box>
  );
};

export default SearchSortFilter;
