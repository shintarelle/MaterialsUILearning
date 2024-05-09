import { Box, Button, Card, CardContent, CardHeader, Stack, Typography } from '@mui/material'
import React from 'react'
import DiscountForm from './DiscountForm';

function OrederSummary() {
  return (
    <Box sx={{ flexGrow: 1, maxWidth: '392px', p: '12px' }}>
      <Card elevation={3} sx={{ width: '100%', mb: '24px' }}>
        <CardHeader title="Order Summary" sx={{ padding: '24px 24px 0px', color: '#000' }} />

        <CardContent>
          <Stack gap="16px">
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="body2">Sub Total</Typography>
              <Typography variant="h6">$25.18</Typography>
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
                  $25.18
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
      <Button variant="contained" size="large" sx={{ width: '100%' }}>
        Check Out
      </Button>
    </Box>
  );
}

export default OrederSummary
