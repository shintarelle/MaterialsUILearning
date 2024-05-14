import React from 'react'

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Box, Button, Card, CardContent, CardHeader, SvgIcon, Typography } from '@mui/material'

import OrderTable from './OrderTable';


function Cart() {

  return (
    <Box sx={{ flexGrow: 1, p: '12px' }}>
      <Card elevation={3} sx={{ width: '100%', mb: '24px' }}>
        <CardHeader
          title={
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Cart{' '}
              <Typography variant="body1" component="span" sx={{ color: 'rgb(99, 115, 129)' }}>
                (1 item)
              </Typography>
            </Typography>
          }
          sx={{ padding: '24px' }}
        />

        <CardContent sx={{ p: 0 }}>
          <OrderTable />
        </CardContent>
      </Card>
      <Button
        href="/dashboard/one"
        startIcon={<SvgIcon component={ChevronLeftIcon} />}
        size="medium"
        sx={{ textTransform: 'none' }} // чтобы текст не был заглавным
      >
        Continue Shopping
      </Button>
    </Box>
  );
}

export default Cart
