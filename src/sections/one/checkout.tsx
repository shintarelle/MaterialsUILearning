'use client'

import React from 'react'

import { Container, Typography } from '@mui/material'

import { useSettingsContext } from 'src/components/settings';
import CheckoutStepper from 'src/components/checkout/CheckoutStepper';

function Checkout() {
  const settings = useSettingsContext();
  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        {' '}
        Checkout{' '}
      </Typography>
      <CheckoutStepper />
      </Container>
  )
}

export default Checkout
