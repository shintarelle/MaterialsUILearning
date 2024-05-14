import React from 'react'

import { Box } from '@mui/material';

import Cart from './Cart';
import OrderSummary from './OrderSummary';

interface Step1Props {
  handleNext: () => void;
}

const Step1: React.FC<Step1Props> = ({ handleNext }) => (
  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }  }}>
    <Cart />
    <OrderSummary handleNext={handleNext} isStepBilling={false} />
  </Box>
);

export default Step1
