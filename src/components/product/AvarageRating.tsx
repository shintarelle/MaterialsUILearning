import React from 'react'

import EditIcon from '@mui/icons-material/Edit';
import { Box, Rating, Stack, Typography, LinearProgress, Button, Grid, useTheme, useMediaQuery } from '@mui/material';

function AvarageRating() {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid container sx={{ py: isMobile ? '40px' : null}}>
      <Grid
        item
        xs={12}
        md={4}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
          // flexGrow: 1,
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, lineHeight: '1.57143', fontSize: '0.875rem' }}
        >
          Avarage Rating
        </Typography>
        <Typography
          variant="h2"
          sx={{ fontWeight: 600, lineHeight: '1.57143', fontSize: '2.75rem' }}
        >
          3/5
        </Typography>
        <Rating name="read-only" value={3} readOnly />
        <Typography variant="caption">(3.36k rewiews)</Typography>
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
          px: '40px',
          py: '24px',
          borderLeft: '1px dashed rgba(145, 158, 171, 0.2)',
          borderRight: '1px dashed rgba(145, 158, 171, 0.2)',
          // flexGrow: 1,
        }}
      >
        <Stack direction="row" alignItems="center" gap="10px" sx={{ width: '100%' }}>
          <Typography variant="subtitle2">5 star</Typography>
          <LinearProgress
            variant="determinate"
            color="inherit"
            value={30}
            sx={{ flexGrow: 1, minWidth: '100px' }}
          />
          <Typography variant="body2">2.03k</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" gap="10px" sx={{ width: '100%' }}>
          <Typography variant="subtitle2">4 star</Typography>
          <LinearProgress
            variant="determinate"
            color="inherit"
            value={15}
            sx={{ flexGrow: 1, minWidth: '100px' }}
          />
          <Typography variant="body2">8.49k</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" gap="10px" sx={{ width: '100%' }}>
          <Typography variant="subtitle2">3 star</Typography>
          <LinearProgress
            variant="determinate"
            color="inherit"
            value={30}
            sx={{ flexGrow: 1, minWidth: '100px' }}
          />
          <Typography variant="body2">6.98k</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" gap="10px" sx={{ width: '100%' }}>
          <Typography variant="subtitle2">2 star</Typography>
          <LinearProgress
            variant="determinate"
            color="inherit"
            value={7}
            sx={{ flexGrow: 1, minWidth: '100px' }}
          />
          <Typography variant="body2">9.12k</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" gap="10px" sx={{ width: '100%' }}>
          <Typography variant="subtitle2">1 star</Typography>
          <LinearProgress
            variant="determinate"
            color="inherit"
            value={30}
            sx={{ flexGrow: 1, minWidth: '100px' }}
          />
          <Typography variant="body2">1.95k</Typography>
        </Stack>
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
          flexGrow: 1,
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Button
            variant="contained"
            size="large"
            startIcon={<EditIcon />}
            sx={{ backgroundColor: '#f7f7f7', color: '#000000' }}
          >
            Write rewiew
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default AvarageRating
