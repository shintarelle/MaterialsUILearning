// import Input from '@mui/joy/Input';
import React, { FC } from 'react'

import AddIcon from '@mui/icons-material/Add';
import FormLabel from '@mui/material/FormLabel';
import ShareIcon from '@mui/icons-material/Share';
import FormControl from '@mui/material/FormControl';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box, Divider, Rating, Stack, Typography, FormHelperText, Link, Button } from '@mui/material';

import SizeSelect from './SizeSelect';
import ColorPicker from '../sort/ColorPicker';
import QuantitySelect from './QuantitySelect';


interface ProductInfoProps {
  colors: string[];
  setColors: React.Dispatch<React.SetStateAction<string[]>>;
}

const ProductInfo: FC<ProductInfoProps> = ({ colors, setColors }) => {
  console.log();
  return (
    <Box sx={{ p: '32px' }}>
      <FormControl>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <Box sx={{ pt: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Box
              sx={{
                width: 'max-content',
                height: '24px',
                display: 'inline-flex',
                alignItems: 'center',
                background: 'rgba(255, 86, 48, 0.16)',
                color: 'rgb(183, 29, 24)',
                padding: '0px 6px',
                borderRadius: '6px',
              }}
            >
              <Typography component="span" variant="overline">
                sale
              </Typography>
            </Box>

            <Typography component="span" variant="overline" sx={{ color: 'rgb(34, 197, 94)' }}>
              in stock
            </Typography>

            <Typography variant="h5" sx={{ fontWeight: 700, fontSize: '1.25rem' }}>
              Zoom Freak 2
            </Typography>

            <Stack direction="row">
              <Rating name="read-only" value={3} readOnly />
              <Typography component="legend">(3.36k reviews)</Typography>
            </Stack>

            <Typography variant="body1" sx={{ fontWeight: 700, fontSize: '1.25rem' }}>
              $25.18
            </Typography>

            <Typography variant="body1" sx={{ color: 'rgb(99, 115, 129)' }}>
              Featuring the original ripple design inspired by Japanese bullet trains, the Nike Air
              Max 97 lets you push your style full-speed ahead.
            </Typography>
          </Box>

          <Divider />

          <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
            <Typography variant="body1" sx={{ fontWeight: 600, fontSize: '0.875rem' }}>
              Color
            </Typography>
            <Box sx={{ maxWidth: '150px' }}>
              <ColorPicker colors={colors} setColors={setColors} />
            </Box>
          </Stack>

          <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
            <Typography variant="body1" sx={{ fontWeight: 600, fontSize: '0.875rem' }}>
              Size
            </Typography>
            <FormControl>
              <FormLabel sx={{ display: 'none' }}>Label</FormLabel>
              <SizeSelect />
              <FormHelperText sx={{ textDecoration: 'underline' }}>
                <Link color="neutral">Size Chart</Link>
              </FormHelperText>
            </FormControl>
          </Stack>

          <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
            <Typography variant="body1" sx={{ fontWeight: 600, fontSize: '0.875rem' }}>
              Quantity
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <QuantitySelect />
              <Typography variant="caption" sx={{ opacity: 0.7 }}>
                Available: 7
              </Typography>
            </Box>
          </Stack>

          <Divider />

          <Stack direction="row" justifyContent="space-between" sx={{ gap: '24px' }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<ShoppingCartIcon />}
              sx={{
                backgroundColor: '#ffaa00',
                color: 'black',
                width: 'calc(50% - 12px)',
                // flexGrow: 1,
                '&:hover': {
                  color: '#ffffff',
                },
                '.MuiButton-startIcon': {
                  maxWidth: '24px',
                },
              }}
            >
              Add to Cart
            </Button>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: '#ffaa00',
                color: 'black',
                width: 'calc(50% - 12px)',
                // flexGrow: 1,
                '&:hover': {
                  color: '#ffffff',
                },
              }}
            >
              Buy Now
            </Button>
          </Stack>

          <Stack direction="row" justifyContent="center" alignItems="center" sx={{ gap: '24px' }}>
            <Link
              color="neutral"
              sx={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: '0.875rem' }}
            >
              <AddIcon sx={{ width: '18px', height: '18px', opacity: 0.7 }} />
              Compare
            </Link>
            <Link
              color="neutral"
              sx={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: '0.875rem' }}
            >
              <FavoriteIcon sx={{ width: '16px', height: '16px', opacity: 0.7 }} />
              Favorite
            </Link>
            <Link
              color="neutral"
              sx={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: '0.875rem' }}
            >
              <ShareIcon sx={{ width: '16px', height: '16px', opacity: 0.7 }} />
              Share
            </Link>
          </Stack>
        </Box>
      </FormControl>
    </Box>
  );
};


export default ProductInfo
