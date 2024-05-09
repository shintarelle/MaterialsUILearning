'use client'

import React from 'react'

import { Container, Typography } from '@mui/material'

import Step from 'src/components/checkout/CheckoutStepper';
import { useSettingsContext } from 'src/components/settings';


function Checkout() {
  const settings = useSettingsContext();
  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Typography variant="h4" sx={{ my: 4 }}>
        {' '}
        Checkout{' '}
      </Typography>

      <Step />
      </Container>
  )
}

export default Checkout
