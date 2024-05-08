'use client'


import Box from '@mui/material/Box';
import { useParams } from 'next/navigation';
import React from 'react';
import BreadCrumbs from 'src/components/breadcrumbs/BreadCrumbs';
import AddReviewDialog from 'src/components/product/AddReviewDialog';
import GridProductInfo from 'src/components/product/GridProductInfo';
import ProductInfo from 'src/components/product/ProductInfo';
import ProductSlider from 'src/components/product/ProductSlider';
import TabsPanel from 'src/components/product/TabsPanel';
import { products } from '../../_mock/assets'


function ProductItem() {
  const params = useParams<{ id: string; item: string }>();
  const [colors, setColors] = React.useState<string[]>([]);
  const productCurrent = products.find(p => p.id === Number(params.id))

  const links = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/dashboard' }, // добавленный путь
    // { label: `${productCurrent?.title}`, href: `/dashboard/one/${productCurrent?.title}` },
  ];

  return (
    <Box>
      <BreadCrumbs links={links} productName={productCurrent?.title} />
      <Box sx={{ display: 'flex', maxWidth: '1200px', flexDirection: { xs: 'column', lg: 'row' } }}>
        <ProductSlider productCurrent={productCurrent} />
        {productCurrent && (
          <ProductInfo colors={colors} setColors={setColors} productCurrent={productCurrent} />
        )}
      </Box>
      <GridProductInfo />
      <TabsPanel />
    </Box>
  );
}

export default ProductItem;
