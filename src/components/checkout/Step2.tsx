import React from 'react';

import { Box } from '@mui/material';

import Cart from './Cart';
import OrderSummary from './OrderSummary';
import BillingAndAddresses from './BillingAndAddresses';

interface Step1Props {
  handleNext: () => void;
  handleBack: () => void;
}

const Step1: React.FC<Step1Props> = ({ handleNext, handleBack }) => (
  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
    <BillingAndAddresses handleNext={handleNext} handleBack={handleBack} />
    <OrderSummary handleNext={handleNext} isStepBilling isStepPayment={false} />
  </Box>
);

export default Step1;
