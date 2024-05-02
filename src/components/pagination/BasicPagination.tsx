'use client'

import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

interface BasicPaginationProps {
  count: number;
  page: number;
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const BasicPagination: React.FC<BasicPaginationProps> = ({ count, page, onChange }) =>
  (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Stack spacing={2}>
        <Pagination count={count} page={page} onChange={onChange} />
      </Stack>
    </Box>
  );


export default BasicPagination;
