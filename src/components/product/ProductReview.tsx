import React from 'react'

import { Divider } from '@mui/material';

import Review from './Review';
import AvarageRating from './AvarageRating'

function ProductRewiew() {
  return (
    <>
      <AvarageRating />
      <Divider />
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) =>
        <Review key={ item} />
      )}
    </>
  )
}

export default ProductRewiew
