'use client'

import React, { useState } from 'react';
import {
  Box,
  Button,
  SvgIcon,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import AddressPoint from './AddressPoint';
import AddDeliveryAddressDialog from './AddDiliveryAddressDialog';


interface BillingAndAddressesProps {
  handleNext: () => void;
  handleBack: () => void;
}
const BillingAndAddresses: React.FC<BillingAndAddressesProps> = ({ handleNext, handleBack }) => {
  const [addresses, setAddresses] = useState<
    Array<{
      name: string;
      place: string;
      address: string;
      // selectedCountry?: string;
      phone: string;
      isDefault: boolean;
    }>
  >([
    {
      name: 'Jayvion Simon',
      place: 'Home',
      address: '19034 Verna Unions Apt. 164 - Honolulu, RI / 87535',
      phone: '365-374-4961',
      isDefault: true,
    },
    {
      name: 'Lucian Obrien',
      place: 'Office',
      address: '1147 Rohan Drive Suite 819 - Burlington, VT / 82021',
      phone: '904-966-2836',
      isDefault: false,
    },
    {
      name: 'Deja Brady',
      place: 'Office',
      address: '18605 Thompson Circle Apt. 086 - Idaho Falls, WV / 50337',
      phone: '399-757-9909',
      isDefault: false,
    },
    {
      name: 'Harrison Stein',
      place: 'Office',
      address: '110 Lamar Station Apt. 730 - Hagerstown, OK / 49808',
      phone: '692-767-2903',
      isDefault: false,
    },
  ]);

  return (
    <Box sx={{ flexGrow: 1, p: '12px' }}>
      {addresses.map((address) => (
        <AddressPoint
          key={address.name}
          address={address}
          handleNext={handleNext}
          setAddresses={setAddresses}
        />
      ))}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          pt: 2,
        }}
      >
        <Button
          onClick={handleBack}
          startIcon={<SvgIcon component={ChevronLeftIcon} />}
          size="medium"
          sx={{ textTransform: 'none' }} // чтобы текст не был заглавным
        >
          Back
        </Button>
        <AddDeliveryAddressDialog setAddresses={setAddresses} />
      </Box>
    </Box>
  );
};

export default BillingAndAddresses;
