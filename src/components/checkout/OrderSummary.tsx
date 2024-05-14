import React, { useContext } from 'react'

import { Box, Button, Card, CardContent, CardHeader, Stack, Typography } from '@mui/material'

import { BasketContext } from 'src/app/BasketContext';
import { DeliveryContext } from 'src/app/DeliveryContex';

import DiscountForm from './DiscountForm';

interface OrederSummaryProps {
  handleNext: () => void;
  isStepBilling: boolean;
  isStepPayment: boolean;
}

const OrderSummary: React.FC<OrederSummaryProps> = ({ handleNext, isStepBilling, isStepPayment }) => {
  const { cartItems, clearAll } = useContext(BasketContext);
  const { address, clearAddress } = useContext(DeliveryContext);

  const summary = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCompleteOrder = () => {
    handleNext()
    clearAll()
    clearAddress()
  }
  return (
    <Box sx={{ flexGrow: 1, maxWidth: { xs: '100%', md: '392px' }, minWidth: '302px', p: '12px' }}>
      <Card elevation={3} sx={{ width: '100%', mb: '24px' }}>
        <CardHeader title="Order Summary" sx={{ padding: '24px 24px 0px', color: '#000' }} />

        <CardContent>
          <Stack gap="16px">
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="body2">Sub Total</Typography>
              <Typography variant="h6">{Math.round(summary * 100) / 100}</Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="body2">Discount</Typography>
              <Typography variant="h6">-</Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="body2">Shopping</Typography>
              <Typography variant="h6">Free</Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="h6">Total</Typography>
              <Stack alignItems="flex-end">
                <Typography variant="h6" color="error">
                  {Math.round(summary * 100) / 100}
                </Typography>
                <Typography variant="caption" sx={{ fontStyle: 'italic' }}>
                  (VAT included if applicable)
                </Typography>
              </Stack>
            </Stack>
            <DiscountForm />
          </Stack>
        </CardContent>
      </Card>
      {!isStepBilling &&
        !isStepPayment && (
          <Button variant="contained" size="large" sx={{ width: '100%' }} onClick={handleNext}>
            Check Out
          </Button>
        )}
      {isStepPayment && (
        <Button
          variant="contained"
          size="large"
          sx={{ width: '100%' }}
          onClick={handleCompleteOrder}
        >
          Complete Order
        </Button>
      )}
    </Box>
  );
};

export default OrderSummary
