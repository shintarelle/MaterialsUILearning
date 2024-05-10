import React from 'react'

import { Box, Button, Paper, Stack, Typography } from '@mui/material';

interface AddressPointProps {
  address: {
    name: string;
    place: string;
    address: string;
    phone: string;
    isDefault: boolean;
  };
  handleNext: () => void;
  setAddresses: React.Dispatch<
    React.SetStateAction<
      {
        name: string;
        place: string;
        address: string;
        // selectedCountry?: string;
        phone: string;
        isDefault: boolean;
      }[]
    >
  >;
}

const AddressPoint: React.FC<AddressPointProps> = ({ address, handleNext, setAddresses }) => {
  const handleDeleteAddress = () => {
    setAddresses((prevAddresses) => prevAddresses.filter((a) => a !== address));
  };
  return (
    <Paper
      elevation={3}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        p: '24px',
        mb: '24px',
        flexWrap: 'wrap',
        gap: '16px',
      }}
    >
      <Stack gap="8px">
        <Stack direction="row" alignItems="center">
          <Typography variant="subtitle2">{address.name}</Typography>
          <Typography
            component="span"
            sx={{ fontSize: '0.875rem', marginLeft: '4px', color: 'rgb(99, 115, 129)' }}
          >
            {`(${address.place})`}
          </Typography>
          {address.isDefault && (
            <Box
              component="span"
              sx={{
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '24px',
                minWidth: '24px',
                backgroundColor: 'rgba(0, 184, 217, 0.16)',
                marginLeft: '8px',
                padding: '0px 6px',
                borderRadius: '6px',
                fontSize: '0.875rem',
                color: 'rgb(0, 108, 156)',
                fontWeight: 600,
              }}
            >
              Default
            </Box>
          )}
        </Stack>
        <Typography variant="body2" sx={{ color: 'rgb(99, 115, 129)' }}>
          {address.address}
        </Typography>
        <Typography variant="body2" sx={{ color: 'rgb(99, 115, 129)' }}>
          {address.phone}
        </Typography>
      </Stack>
      <Stack direction="row" alignItems="flex-end">
        <Button variant="text" color="error" size="small" onClick={handleDeleteAddress}>
          Delete
        </Button>
        <Button variant="outlined" size="small" onClick={handleNext} sx={{ minWidth: '64px' }}>
          Deliver to this Address
        </Button>
      </Stack>
    </Paper>
  );
};

export default AddressPoint
