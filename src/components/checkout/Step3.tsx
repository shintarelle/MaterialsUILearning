import React, { useContext } from 'react';

import { Box, Stack } from '@mui/material';

import Cart from './Cart';
import OrderSummary from './OrderSummary';
import DeliverySummary from './DeliverySummary';

interface Step1Props {
  handleNext: () => void;
  handleBack: () => void;
}

const Step3: React.FC<Step1Props> = ({ handleNext, handleBack }) => (
  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
    <Stack>
      <Cart />
    </Stack>
    <Stack>
      <DeliverySummary handleNext={handleNext} handleBack={handleBack} />
      <OrderSummary handleNext={handleNext} isStepBilling={false} isStepPayment />
    </Stack>
  </Box>
);

export default Step3;
