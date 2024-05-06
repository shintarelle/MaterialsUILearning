import Box from '@mui/material/Box';
import React from 'react';
import ProductInfo from 'src/components/producSlider/ProductInfo';
import ProductSlider from 'src/components/producSlider/ProductSlider';

function ProductItem() {
  return (
    <Box sx={{display: 'flex'}}>

      <ProductSlider />
      <ProductInfo />
    </Box>
  );
}

export default ProductItem;
