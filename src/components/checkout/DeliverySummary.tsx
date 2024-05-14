import React, { useContext } from 'react';

import EditIcon from '@mui/icons-material/Edit';
import { Box, Card, CardContent, CardHeader, IconButton, Stack, Typography } from '@mui/material';

import { DeliveryContext } from 'src/app/DeliveryContex';


interface DeliverySummaryProps {
  handleNext: () => void;
  handleBack: () => void;
}

const DeliverySummary: React.FC<DeliverySummaryProps> = ({ handleNext, handleBack }) => {
  const { address, setAddress } = useContext(DeliveryContext);

  const handleEdit = () => {
    handleBack()

  };
  return (
    <Box sx={{ flexGrow: 1, maxWidth: { xs: '100%', md: '392px' }, minWidth: '302px', p: '12px' }}>
      <Card elevation={3} sx={{ width: '100%', mb: '24px' }}>
        <CardHeader
          title="Address"
          sx={{ padding: '24px 24px 0px', color: '#000' }}
          action={
            <IconButton aria-label="settings" onClick={handleEdit} sx={{ color: '#000' }}>
              <EditIcon />
              <Typography variant="body1" sx={{ fontSize: '1rem', fontWeight: 'bold', ml: '4px' }}>
                Edit
              </Typography>
            </IconButton>
          }
        />

        <CardContent>
          <Stack gap="8px">
            <Stack direction="row" alignItems="center">
              <Typography variant="subtitle2">{address.name}</Typography>
              <Typography
                component="span"
                sx={{ fontSize: '0.875rem', marginLeft: '4px', color: 'rgb(99, 115, 129)' }}
              >
                {`(${address.place})`}
              </Typography>
            </Stack>
            <Typography variant="body2" sx={{ color: 'rgb(99, 115, 129)' }}>
              {address.address}
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgb(99, 115, 129)' }}>
              {address.phone}
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DeliverySummary;
