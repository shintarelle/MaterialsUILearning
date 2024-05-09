'use client'

import * as React from 'react';
import { useState } from 'react';

import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import DeleteIcon from '@mui/icons-material/Delete';
import TableContainer from '@mui/material/TableContainer';
import { Avatar, Box, Divider, Stack, Typography } from '@mui/material';

import QuantitySelect from '../product/QuantitySelect';

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
  const [quantity, setQuantity] = useState(1);
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
          {rows.map((row) => (
            <TableRow key={row.product}>
              <TableCell component="th" scope="row" sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://api-prod-minimal-v510.vercel.app/assets/images/m_product/product_10.jpg"
                  sx={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '12px',
                    mr: '16px',
                  }}
                />
                <Stack>
                  <Typography variant="subtitle2">Nike Air Force 1 NDESTRUKT</Typography>
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
                      9
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
                          backgroundColor: 'green',
                        }}
                      />
                    </Stack>
                  </Stack>
                </Stack>
              </TableCell>
              <TableCell align="right">{`$${row.price}`}</TableCell>
              <TableCell >
                <QuantitySelect quantity={quantity} setQuantity={setQuantity} />
              </TableCell>
              <TableCell align="right">{`$${row.totalPrice}`}</TableCell>
              <TableCell align="right">{row.icon}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
