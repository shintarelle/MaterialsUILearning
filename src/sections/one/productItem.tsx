'use client'

import Box from '@mui/material/Box';
import React from 'react';
import ProductInfo from 'src/components/producSlider/ProductInfo';
import ProductSlider from 'src/components/producSlider/ProductSlider';

function ProductItem() {
  const [colors, setColors] = React.useState<string[]>([]);
  return (
    <Box sx={{ display: 'flex', maxWidth: '1200px' }}>
      <ProductSlider />
      <ProductInfo colors={colors} setColors={setColors} />
    </Box>
  );
}

export default ProductItem;
