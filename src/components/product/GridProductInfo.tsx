import React from 'react'

import { Box, Grid, Stack, SvgIcon, Typography } from '@mui/material'
import ShieldIcon from '@mui/icons-material/Shield';
import CheckIcon from '@mui/icons-material/Check';

function GridProductInfo() {
  return (
    <Stack direction="row" sx={{ my: '80px', gap: '40px' }}>
      <Box
        sx={{
          px: '40px',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <SvgIcon sx={{ width: '32px', height: '32px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path
              fill="#02a66f"
              d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm94-278 226-226-56-58-170 170-86-84-56 56 142 142Z"
            />
          </svg>
        </SvgIcon>
        <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1rem', mt: '16px', mb: '8px' }}>
          100% Original
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontWeight: 400,
            fontSize: '0.875rem',
            mt: '16px',
            mb: '8px',
            color: 'rgb(99, 115, 129)',
            textAlign: 'center',
          }}
        >
          Chocolate bar candy canes ice cream toffee cookie halvah.
        </Typography>
      </Box>

      <Box
        sx={{
          px: '40px',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <SvgIcon sx={{ width: '32px', height: '32px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path
              fill="#02a66f"
              d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"
            />
          </svg>
        </SvgIcon>

        <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1rem', mt: '16px', mb: '8px' }}>
          10 Day Replacement
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontWeight: 400,
            fontSize: '0.875rem',
            mt: '16px',
            mb: '8px',
            color: 'rgb(99, 115, 129)',
            textAlign: 'center',
          }}
        >
          Marshmallow biscuit donut dragée fruitcake wafer.
        </Typography>
      </Box>

      <Box
        sx={{
          px: '40px',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <SvgIcon sx={{ width: '32px', height: '32px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path
              fill="#02a66f"
              d="m438-338 226-226-57-57-169 169-84-84-57 57 141 141Zm42 258q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Z"
            />
          </svg>
        </SvgIcon>
        <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1rem', mt: '16px', mb: '8px' }}>
          Year Warranty
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontWeight: 400,
            fontSize: '0.875rem',
            mt: '16px',
            mb: '8px',
            color: 'rgb(99, 115, 129)',
            textAlign: 'center',
          }}
        >
          Cotton candy gingerbread cake I love sugar sweet.
        </Typography>
      </Box>
    </Stack>
  );
}

export default GridProductInfo
