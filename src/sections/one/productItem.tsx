'use client'

import Box from '@mui/material/Box';
import React from 'react';
import GridProductInfo from 'src/components/product/GridProductInfo';
import ProductInfo from 'src/components/product/ProductInfo';
import ProductSlider from 'src/components/product/ProductSlider';
import TabsPanel from 'src/components/product/TabsPanel';

function ProductItem() {
  const [colors, setColors] = React.useState<string[]>([]);
  return (
    <Box>
      <Box sx={{ display: 'flex',  maxWidth: '1200px', flexDirection: { xs: 'column', md: 'row' }, }}>
        <ProductSlider />
        <ProductInfo colors={colors} setColors={setColors} />
      </Box>
      <GridProductInfo />
      <TabsPanel />
    </Box>
  );
}

export default ProductItem;
