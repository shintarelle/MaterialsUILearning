import React from 'react'

import { Box } from '@mui/material';
import Cart from './Cart';
import OrderSummary from './OrderSummary';

function Step1() {
  return <Box sx={{display: 'flex'}}>
    <Cart />
    <OrderSummary />
  </Box>;
}

export default Step1
