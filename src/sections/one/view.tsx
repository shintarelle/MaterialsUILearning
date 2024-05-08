'use client';

import React, { useState } from 'react';

import { Grid } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import CardSmall from 'src/components/cards/CardSmall';
import SortPanel2 from 'src/components/sort/SortPanel2';
import { useSettingsContext } from 'src/components/settings';
import BasketButton from 'src/components/product/BasketButton';
import BasicPagination from 'src/components/pagination/BasicPagination';

import { products } from '../../_mock/assets'



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
  ? products.filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
  : [...products];

  if (sortBy === 'newest' || sortBy === 'featured') {
    filteredProducts = filteredProducts.filter((item) => item.collection === sortBy);
  } else if (sortBy === 'priceLowToHigh') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'priceHighToLow') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }
  if (genders.length > 0) {
    filteredProducts = filteredProducts.filter((item) => genders.includes(item.gender));
  }
  if (category !== '') {
    filteredProducts = filteredProducts.filter((item) => item.category === category.toLocaleLowerCase());
  }
  if (colors.length > 0) {
    filteredProducts = filteredProducts.filter((item) =>
      colors.some((color) => item.color.includes(color))
    );
  }
  if (price[0] !== 0 || price[1] !== 200) {
    filteredProducts = filteredProducts.filter(
      (item) => item.price >= price[0] && item.price <= price[1]
    );
  }
  if (rating !== 0) {
    filteredProducts = filteredProducts.filter((item) => item.rating >= rating);
  }

const visibleProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

const handleSearch = (value: string) => {
  setPage(1);
  setSearchQuery(value);
};

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        {' '}
        Shop{' '}
      </Typography>
      <BasketButton />
      <SortPanel2
        onSearch={handleSearch}
        sortBy={sortBy}
        setSortBy={setSortBy}
        genders={genders}
        setGenders={setGenders}
        category={category}
        setCategory={setCategory}
        colors={colors}
        setColors={setColors}
        price={price}
        setPrice={setPrice}
        rating={rating}
        setRating={setRating}
        filteredProducts={filteredProducts}
      />
      <Grid container rowSpacing={1} columnSpacing={3} sx={{ mb: 4 }}>
        {visibleProducts.map((item) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={item.id}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
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
