import React from 'react'

import { Avatar, Box, Rating, Stack, SvgIcon, Typography, useMediaQuery, useTheme } from '@mui/material'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';


import { images } from '../../_mock/assets';

function Review() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Stack direction={isMobile ? 'column' : 'row'} gap="16px" sx={{ mt: '40px' }}>
      <Stack
        direction={isMobile ? 'row' : 'column'}
        sx={{
          justifyContent: isMobile ? 'flex-start' : 'center',
          alignItems: 'center',
          gap: '16px',
          width: '240px',
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src="https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_6.jpg"
          sx={{ width: 64, height: 64 }}
        />
        <Stack sx={{ justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant="subtitle1" sx={{ textAlign: 'center' }}>
            Lainey Davidson
          </Typography>
          <Typography variant="caption" sx={{ textAlign: 'center' }}>
            02 May 2024
          </Typography>
        </Stack>
      </Stack>

      <Stack gap="8px" sx={{flexGrow: 1}}>
        <Rating name="read-only" value={3} readOnly />
        <Stack direction="row" sx={{ alignItems: 'center', color: 'rgb(34, 197, 94)' }}>
          <SvgIcon sx={{ width: '16px', height: '16px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
              <path
                fill="#02a66f"
                d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm94-278 226-226-56-58-170 170-86-84-56 56 142 142Z"
              />
            </svg>
          </SvgIcon>
          <Typography variant="caption">Verified purchase</Typography>
        </Stack>
        <Typography variant="body2">
          He carefully crafted a beautiful sculpture out of clay, his hands skillfully shaping the
          intricate details.
        </Typography>
        <Stack direction="row" gap="8px" flexWrap='wrap'>
          {images.map((item, index) => (
            <Box key={index} sx={{ width: '64px' }}>
              <Avatar
                alt="Remy Sharp"
                src={item}
                sx={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '12px',
                }}
              />
            </Box>
          ))}
        </Stack>
        <Stack direction="row" gap="20px">
          <Stack direction="row" gap="5px" alignItems="center">
            <ThumbUpIcon
              sx={{
                fill: 'none',
                stroke: 'currentColor',
                strokeWidth: 1,
                width: '16px',
                height: '16px',
              }}
            />
            <Typography variant="body2">34</Typography>
          </Stack>
          <Stack direction="row" gap="5px" alignItems="center">
            <ThumbDownIcon
              sx={{
                fill: 'none',
                stroke: 'currentColor',
                strokeWidth: 1,
                width: '16px',
                height: '16px',
              }}
            />
            <Typography variant="body2">13</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Review
