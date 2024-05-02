import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

interface SelectRatingProps {
  rating: number;
  setRating: React.Dispatch<React.SetStateAction<number>>;
}

export default function SelectRating({ rating, setRating }: SelectRatingProps) {
  // const [value, setValue] = React.useState<number | null>(4);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, '& > legend': { mt: 2 } }}>
      <Button
        sx={{
          backgroundColor: 'transparent',
          width: 'max-content',
          padding: '3px 5px',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
            opacity: 0.6,
          },
          '&:active': {
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
            opacity: 0.6,
          },
        }}
        onClick={() => setRating(4)}
      >
        <Rating name="read-only" value={4} readOnly />
        <Typography component="legend">& Up</Typography>
      </Button>
      <Button
        sx={{
          backgroundColor: 'transparent',
          width: 'max-content',
          padding: '3px 5px',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
            opacity: 0.6,
          },
          '&:active': {
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
            opacity: 0.6,
          },
        }}
        onClick={() => setRating(3)}
      >
        <Rating name="read-only" value={3} readOnly />
        <Typography component="legend">& Up</Typography>
      </Button>

      <Button
        sx={{
          backgroundColor: 'transparent',
          width: 'max-content',
          padding: '3px 5px',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
            opacity: 0.6,
          },
          '&:active': {
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
            opacity: 0.6,
          },
        }}
        onClick={() => setRating(2)}
      >
        <Rating name="read-only" value={2} readOnly />
        <Typography component="legend">& Up</Typography>
      </Button>

      <Button
        sx={{
          backgroundColor: 'transparent',
          width: 'max-content',
          padding: '3px 5px',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
            opacity: 0.6,
          },
          '&:active': {
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
            opacity: 0.6,
          },
        }}
        onClick={() => setRating(1)}
      >
        <Rating name="read-only" value={1} readOnly />
        <Typography component="legend">& Up</Typography>
      </Button>
    </Box>
  );
}
