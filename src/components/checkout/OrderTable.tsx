'use client'

import * as React from 'react';
import { useContext, useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import DeleteIcon from '@mui/icons-material/Delete';
import TableContainer from '@mui/material/TableContainer';
import { Avatar, Box, Button, Divider, IconButton, Stack, Typography } from '@mui/material';

import { BasketContext } from 'src/app/BasketContext';

function createData(
  product: string,
  price: number,
  quantity: number,
  totalPrice: number,
  icon: React.ReactNode
) {
  return { product, price, quantity, totalPrice, icon };
}

const rows = [
  createData('Frozen yoghurt', 25.18, 1, 25.18, <DeleteIcon />),
  createData('Ice cream sandwich', 25.18, 1, 25.18, <DeleteIcon />),
  createData('Eclair', 25.18, 1, 25.18, <DeleteIcon />),
];

export default function OrderTable() {
  const { cartItems, updateItem, deleteItemById } = useContext(BasketContext);

  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        {/* <caption>A basic table example with a caption</caption> */}
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Total Price</TableCell>
            <TableCell align="right"> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartItems.map((item) => (
            <TableRow key={`${item.title}${item.size}${item.quantity}`}>
              <TableCell component="th" scope="row" sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar
                  alt="Remy Sharp"
                  src={item.image}
                  sx={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '12px',
                    mr: '16px',
                  }}
                />
                <Stack>
                  <Typography variant="subtitle2" sx={{maxWidth: '240px', overflow: 'hidden'}}>{item.title}</Typography>
                  <Stack direction="row" alignItems="center">
                    size:
                    <Stack
                      justifyContent="center"
                      alignItems="center"
                      sx={{
                        height: '24px',
                        minWidth: '24px',
                        borderRadius: '6px',
                        padding: '0px 6px',
                        fontSize: '0.75rem',
                        backgroundColor: 'rgba(145, 158, 171, 0.16)',
                        ml: '4px',
                      }}
                    >
                      {item.size}
                    </Stack>
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{ marginLeft: '4px', marginRight: '4px' }}
                    />
                    <Stack
                      spacing={2}
                      direction="row"
                      alignItems="center"
                      className="MuiStack-root css-udwogp"
                    >
                      <Box
                        sx={{
                          width: '16px',
                          height: '16px',
                          borderRadius: '50%',
                          backgroundColor: item.color,
                        }}
                      />
                    </Stack>
                  </Stack>
                </Stack>
              </TableCell>
              <TableCell align="right">{`$${item.price}`}</TableCell>
              <TableCell>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    alignItems: 'flex-end',
                  }}
                >
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{
                      p: '4px',
                      width: '88px',
                      border: '1px solid rgba(145, 158, 171, 0.2)',
                      borderRadius: '8px',
                    }}
                  >
                    <IconButton
                      onClick={() => updateItem(item, item.quantity - 1)}
                      size="small"
                      sx={{ p: '5px' }}
                    >
                      <RemoveIcon sx={{ width: '16px', height: '16px', opacity: 0.7 }} />
                    </IconButton>
                    <span>{item.quantity}</span>
                    <IconButton
                      onClick={() => updateItem(item, item.quantity + 1)}
                      size="small"
                      sx={{ p: '5px' }}
                    >
                      <AddIcon sx={{ width: '16px', height: '16px', opacity: 0.7 }} />
                    </IconButton>
                  </Stack>
                  <Typography variant="caption" sx={{ opacity: 0.7 }}>
                    Available: 7
                  </Typography>
                </Box>
              </TableCell>
              <TableCell align="right">{`$${
                Math.round(item.price * item.quantity * 100) / 100
              }`}</TableCell>
              <TableCell align="right">
                <Button onClick={() => deleteItemById(item.id)}>
                  <DeleteIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
