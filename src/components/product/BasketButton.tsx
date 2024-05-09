import React, { useContext } from 'react'

import { Link, Badge, IconButton, Box } from '@mui/material'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { BasketContext } from 'src/app/BasketContext';

function BasketButton() {
  const { cartItems } = useContext(BasketContext);

  return (
    <Link href="/dashboard/one/checkout">
      <Box
        sx={{
          right: '0px',
          top: '112px',
          zIndex: '999',
          display: 'flex',
          cursor: 'pointer',
          position: 'fixed',
          color: 'rgb(33, 43, 54)',
          borderTopLeftRadius: '16px',
          borderBottomLeftRadius: '16px',
          backgroundColor: 'rgb(255, 255, 255)',
          padding: '8px 24px 8px 16px',
          boxShadow:
            'rgba(145, 158, 171, 0.24) 0px 0px 2px 0px, rgba(145, 158, 171, 0.24) -20px 20px 40px -4px',
          transition: 'opacity 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        }}
      >
        <IconButton>
          <Badge badgeContent={cartItems.length} color="error">
            <ShoppingBasketIcon />
          </Badge>
        </IconButton>
      </Box>
    </Link>
  );
}

export default BasketButton
