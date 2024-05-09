import { Box, Button, Card, CardContent, CardHeader, Stack, Typography } from '@mui/material'
import { Span } from 'next/dist/trace';
import React from 'react'
import OrderTable from './OrderTable';

function Cart() {

  return (
    <Box sx={{ flexGrow: 1, p: '12px' }}>
      <Card elevation={3} sx={{ width: '100%', mb: '24px' }}>
        <CardHeader
          title={
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Cart{' '}
              <Typography variant="body1" component='span' sx={{ color: 'rgb(99, 115, 129)' }}>
                (1 item)
              </Typography>
            </Typography>
          }
          sx={{ padding: '24px' }}
        />

        <CardContent sx={{p: 0}}>
          <OrderTable />
        </CardContent>
      </Card>

    </Box>
  );
}

export default Cart
