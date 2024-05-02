import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

function valuetext(value: number) {
  return `${value}°C`;
}
interface PriceRangeProps {
  price: number[];
  setPrice: React.Dispatch<React.SetStateAction<number[]>>;
}

export default function PriceRange({ price, setPrice }: PriceRangeProps) {

  const handleChange = (event: Event, newValue: number | number[]) => {
    setPrice(newValue as number[]);
  };

  const handleInputChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    if (!Number.isNaN(newValue)) {
      const newValues = [...price];
      newValues[index] = newValue;
      setPrice(newValues);
    }
  };

  return (
    <Box sx={{ width: 240, mb: 4 }}>
      <Box sx={{ width: 240, display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body1" sx={{ mr: 1 }}>
            Min($)
          </Typography>
          <TextField
            size="small"
            value={price[0]}
            onChange={handleInputChange(0)}
            sx={{
              width: 60,
              backgroundColor: '#f4f4f4',
            }}
          />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body1" sx={{ mr: 1 }}>
            Max($)
          </Typography>
          <TextField
            size="small"
            value={price[1]}
            onChange={handleInputChange(1)}
            sx={{ width: 60, backgroundColor: '#f4f4f4' }}
          />
        </Box>
      </Box>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={price}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        max={200}
        step={10}
        marks={[
          {
            value: 0,
            label: '0',
          },
          {
            value: 10,
          },
          {
            value: 20,
          },
          {
            value: 30,
          },
          {
            value: 40,
            label: '40',
          },
          {
            value: 50,
          },
          {
            value: 60,
          },
          {
            value: 70,
          },
          {
            value: 80,
            label: '80',
          },
          {
            value: 90,
          },
          {
            value: 100,
          },
          {
            value: 110,
          },
          {
            value: 120,
            label: '120',
          },
          {
            value: 130,
          },
          {
            value: 140,
          },
          {
            value: 150,
          },
          {
            value: 160,
            label: '160',
          },
          {
            value: 170,
          },
          {
            value: 180,
          },
          {
            value: 190,
          },
          {
            value: 200,
            label: '200',
          },
        ]}
      />
    </Box>
  );
}
