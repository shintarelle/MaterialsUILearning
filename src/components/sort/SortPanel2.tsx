import React from 'react';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
// eslint-disable-next-line import/no-extraneous-dependencies
import CloseIcon from '@mui/icons-material/Close';
// eslint-disable-next-line import/no-extraneous-dependencies
import DeleteIcon from '@mui/icons-material/Delete';
// eslint-disable-next-line import/no-extraneous-dependencies
import RefreshIcon from '@mui/icons-material/Refresh';
// eslint-disable-next-line import/no-extraneous-dependencies
import FilterListIcon from '@mui/icons-material/FilterList';
import { Radio, Stack, Divider, Checkbox, FormGroup, FormLabel, RadioGroup, FormControl, FormControlLabel } from '@mui/material';

import PriceRange from './PriceRange';
import PriceChips from './PriceChips';
import ColorPicker from './ColorPicker';
import RatingChips from './RatingChips';
import SelectRating from './SelectRating';
import CategoryChips from './CategoryChips';
import SelectAutoWidth2 from './SelectAutoWith2';
import SearchSortFilter from './SearchSortFilter';
import GenderChipsArray from './GenderChipsArray';
import ColorsChipsArray from './ColorsChipsArray';


interface SearchPanelProps {
  onSearch: (value: string) => void;
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  genders: string[];
  setGenders: React.Dispatch<React.SetStateAction<string[]>>;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  colors: string[];
  setColors: React.Dispatch<React.SetStateAction<string[]>>;
  price: number[];
  setPrice: React.Dispatch<React.SetStateAction<number[]>>;
  rating: number;
  setRating: React.Dispatch<React.SetStateAction<number>>;
}

const SortPanel: React.FC<SearchPanelProps> = ({ onSearch, sortBy, setSortBy, genders, setGenders, category, setCategory, colors, setColors, price, setPrice, rating, setRating }) => {
  const [open, setOpen] = React.useState(false);

  // условие для отображения чипов и баджей
  const shouldShowBadge =
    genders.length > 0 ||
    category !== '' ||
    colors.length > 0 ||
    !(price[0] === 0 && price[1] === 200) ||
    !(rating === 0);

  const handleToggleDrawer = () => {
    setOpen(!open);
  };
  const handleResetFilter = () => {
    setGenders([]);
    setCategory('');
    setColors([]);
    setPrice([0, 200]);
    setRating(0);
  };
  const handleCheckboxChange = (value: string, checked: boolean) => {
    if (checked) {
      setGenders([...genders, value]);
    } else {
      setGenders(genders.filter((gender) => gender !== value));
    }
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
        <SearchSortFilter onSearch={onSearch} />
        <Drawer
          anchor="right"
          open={open}
          onClose={handleToggleDrawer}
          PaperProps={{
            sx: {
              width: 280,
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
            },
          }}
          ModalProps={{
            BackdropProps: {
              style: {
                backgroundColor: 'rgba(0, 0, 0, 0)', // Прозрачный фон заднего фона
              },
            },
          }}
        >
          <Box sx={{ p: 2 }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 2,
              }}
            >
              <Typography variant="h6">Filter</Typography>
              <Box sx={{ display: 'flex', gap: '10px' }}>
                <IconButton onClick={handleResetFilter}>
                  <Badge color="error" variant="dot" invisible={!shouldShowBadge}>
                    <RefreshIcon />
                  </Badge>
                </IconButton>
                <IconButton onClick={handleToggleDrawer}>
                  <CloseIcon />
                </IconButton>
              </Box>
            </Box>
            <Divider />

            <Box sx={{ py: 2 }}>
              <Typography variant="body1" sx={{ mb: 1 }}>
                Gender
              </Typography>
              <FormGroup sx={{ mb: 3 }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={genders.includes('men')}
                      onChange={(e) => handleCheckboxChange('men', e.target.checked)}
                    />
                  }
                  label="Men"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={genders.includes('women')}
                      onChange={(e) => handleCheckboxChange('women', e.target.checked)}
                    />
                  }
                  label="Women"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={genders.includes('kids')}
                      onChange={(e) => handleCheckboxChange('kids', e.target.checked)}
                    />
                  }
                  label="Kids"
                />
              </FormGroup>

              <Typography variant="body1" sx={{ mb: 1 }}>
                Category
              </Typography>
              <FormControl sx={{ mb: 3 }}>
                <FormLabel id="demo-radio-buttons-group-label" sx={{ display: 'none' }}>
                  Category
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  name="radio-buttons-group"
                >
                  <FormControlLabel value="" control={<Radio />} label="All" />
                  <FormControlLabel value="Shose" control={<Radio />} label="Shose" />
                  <FormControlLabel value="Apparel" control={<Radio />} label="Apparel" />
                  <FormControlLabel value="Accessories" control={<Radio />} label="Accessories" />
                </RadioGroup>
              </FormControl>

              <Typography variant="body1" sx={{ mb: 2 }}>
                Color
              </Typography>
              <ColorPicker colors={colors} setColors={setColors} />

              <Typography variant="body1" sx={{ mb: 2 }}>
                Price
              </Typography>
              <PriceRange price={price} setPrice={setPrice} />

              <Typography variant="body1" sx={{ mb: 2 }}>
                Rating
              </Typography>
              <SelectRating rating={rating} setRating={setRating} />
            </Box>
          </Box>
        </Drawer>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: '15px', overflowY: 'auto' }}>
          <Button
            color="inherit"
            variant="text"
            endIcon={
              <Badge color="error" variant="dot" invisible={!shouldShowBadge}>
                <FilterListIcon />
              </Badge>
            }
            onClick={handleToggleDrawer}
          >
            Filter
          </Button>
          <SelectAutoWidth2 sortBy={sortBy} setSortBy={setSortBy} />
        </Box>
      </Box>

      {(genders.length > 0 ||
        category !== '' ||
        colors.length > 0 ||
        !(price[0] === 0 && price[1] === 200) ||
        !(rating === 0)) && (
        <Box>
          <Typography variant="body1" sx={{ mb: 2 }}>
            4 resulds found
          </Typography>

          <Stack
            spacing={{ xs: 1, sm: 2 }}
            direction="row"
            useFlexGap
            flexWrap="wrap"
            sx={{
              alignItems: 'center',
              mb: 3,
            }}
          >
            {genders.length > 0 && (
              <Stack
                spacing={{ xs: 1 }}
                direction="row"
                useFlexGap
                flexWrap="wrap"
                sx={{
                  alignItems: 'center',
                  border: '1px solid #e6ebed',
                  borderRadius: '8px',
                  width: 'max-content',
                  pl: '10px',
                }}
              >
                <Typography variant="subtitle2">Gender:</Typography>
                <GenderChipsArray genders={genders} setGenders={setGenders} />
              </Stack>
            )}

            {category !== '' && (
              <Stack
                spacing={{ xs: 1 }}
                direction="row"
                flexWrap="wrap"
                sx={{
                  alignItems: 'center',
                  border: '1px solid #e6ebed',
                  borderRadius: '8px',
                  width: 'max-content',
                  pl: '10px',
                }}
              >
                <Typography variant="subtitle2">Category:</Typography>
                <CategoryChips category={category} setCategory={setCategory} />
              </Stack>
            )}

            {colors.length > 0 && (
              <Stack
                spacing={{ xs: 1 }}
                direction="row"
                useFlexGap
                flexWrap="wrap"
                sx={{
                  alignItems: 'center',
                  border: '1px solid #e6ebed',
                  borderRadius: '8px',
                  width: 'max-content',
                  pl: '10px',
                }}
              >
                <Typography variant="subtitle2">Color:</Typography>
                <ColorsChipsArray colors={colors} setColors={setColors} />
              </Stack>
            )}

            {!(price[0] === 0 && price[1] === 200) && (
              <Stack
                spacing={{ xs: 1 }}
                direction="row"
                flexWrap="wrap"
                sx={{
                  alignItems: 'center',
                  border: '1px solid #e6ebed',
                  borderRadius: '8px',
                  width: 'max-content',
                  pl: '10px',
                }}
              >
                <Typography variant="subtitle2">Price:</Typography>
                <PriceChips price={price} setPrice={setPrice} />
              </Stack>
            )}

            {!(rating === 0) && (
              <Stack
                spacing={{ xs: 1 }}
                direction="row"
                flexWrap="wrap"
                sx={{
                  alignItems: 'center',
                  border: '1px solid #e6ebed',
                  borderRadius: '8px',
                  width: 'max-content',
                  pl: '10px',
                }}
              >
                <Typography variant="subtitle2">Rating:</Typography>
                <RatingChips rating={rating} setRating={setRating} />
              </Stack>
            )}

            <Button
              variant="text"
              startIcon={<DeleteIcon sx={{ color: 'red' }} />}
              sx={{ color: 'red' }}
              onClick={handleResetFilter}
            >
              Clear
            </Button>
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default SortPanel;
