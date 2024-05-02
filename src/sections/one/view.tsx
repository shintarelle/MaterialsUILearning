'use client';

import React, { useState } from 'react';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import BasicPagination from 'src/components/pagination/BasicPagination';
import CardSmall from 'src/components/cards/CardSmall';
import { useSettingsContext } from 'src/components/settings';
import SortPanel2 from 'src/components/sort/SortPanel2';

const product = [
  {
    id: 1,
    title: 'Nike Air Force 1 NDESTRUKT',
    price: 83.74,
    image: 'https://api-prod-minimal-v510.vercel.app/assets/images/m_product/product_10.jpg',
    collection: 'newest',
  },
  {
    id: 2,
    title: 'Foundations Matte Flip Flop',
    price: 59.74,
    image: 'https:api-prod-minimal-v510.vercel.app/assets/images/m_product/product_1.jpg',
    collection: 'featured',
  },
  {
    id: 3,
    title: 'Nike Air Zoom Pegasus 37 A.I.R. Chaz Bear',
    price: 67.74,
    image: 'https://api-prod-minimal-v510.vercel.app/assets/images/m_product/product_10.jpg',
  },
  {
    id: 4,
    title: 'Arizona Soft Footbed Sandal',
    price: 78.74,
    image: 'https:api-prod-minimal-v510.vercel.app/assets/images/m_product/product_1.jpg',
    collection: 'newest',
  },
  {
    id: 5,
    title: 'Nike Air Force 1 NDESTRUKT',
    price: 83.74,
    image: 'https://api-prod-minimal-v510.vercel.app/assets/images/m_product/product_10.jpg',
  },
  {
    id: 6,
    title: 'Foundations Matte Flip Flop',
    price: 59.74,
    image: 'https:api-prod-minimal-v510.vercel.app/assets/images/m_product/product_1.jpg',
    collection: 'featured',
  },
  {
    id: 7,
    title: 'Nike Air Zoom Pegasus 37 A.I.R. Chaz Bear',
    price: 67.74,
    image: 'https://api-prod-minimal-v510.vercel.app/assets/images/m_product/product_20.jpg',
  },
  {
    id: 8,
    title: 'Arizona Soft Footbed Sandal',
    price: 78.74,
    image: 'https:api-prod-minimal-v510.vercel.app/assets/images/m_product/product_1.jpg',
    collection: 'featured',
  },
  {
    id: 9,
    title: 'Nike Air Force 1 NDESTRUKT',
    price: 83.74,
    image: 'https://api-prod-minimal-v510.vercel.app/assets/images/m_product/product_20.jpg',
  },
  {
    id: 10,
    title: 'Foundations Matte Flip Flop',
    price: 59.74,
    image: 'https:api-prod-minimal-v510.vercel.app/assets/images/m_product/product_1.jpg',
    collection: 'newest',
  },
  {
    id: 11,
    title: 'Nike Air Zoom Pegasus 37 A.I.R. Chaz Bear',
    price: 67.74,
    image: 'https://api-prod-minimal-v510.vercel.app/assets/images/m_product/product_20.jpg',
  },
  {
    id: 12,
    title: 'Arizona Soft Footbed Sandal',
    price: 78.74,
    image: 'https:api-prod-minimal-v510.vercel.app/assets/images/m_product/product_1.jpg',
    collection: 'newest',
  },
];

// ----------------------------------------------------------------------

export default function OneView() {
  const settings = useSettingsContext();
  const itemsPerPage = 4;
  const [page, setPage] = React.useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = React.useState('');
  const [genders, setGenders] = React.useState<string[]>([]);
  const [category, setCategory] = React.useState('');
  const [colors, setColors] = React.useState<string[]>([]);
  const [price, setPrice] = React.useState<number[]>([0, 200]);
  const [rating, setRating] = React.useState(0);

const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
  setPage(value);
};

const startIndex = (page - 1) * itemsPerPage;
let filteredProducts = searchQuery
  ? product.filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
  : [...product];

  if (sortBy === 'newest' || sortBy === 'featured') {
    filteredProducts = filteredProducts.filter((item) => item.collection === sortBy);
  } else if (sortBy === 'priceLowToHigh') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'priceHighToLow') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

const visibleProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

const handleSearch = (value: string) => {
  setPage(1);
  setSearchQuery(value);
};

  console.log('price', price)
  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        {' '}
        Shop{' '}
      </Typography>
      <SortPanel2 onSearch={handleSearch} sortBy={sortBy} setSortBy={setSortBy} genders={genders} setGenders={setGenders} category={category} setCategory={setCategory} colors={colors} setColors={setColors} price={price} setPrice={setPrice} rating={rating} setRating={setRating} />
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {visibleProducts.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <CardSmall item={item} />
          </Grid>
        ))}
      </Grid>
      <BasicPagination
        count={Math.ceil(filteredProducts.length / itemsPerPage)}
        page={page}
        onChange={handleChangePage}
      />
    </Container>
  );
}
