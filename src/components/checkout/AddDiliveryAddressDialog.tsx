'use client';

import * as React from 'react';
import { useState, FC } from 'react';

import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import OpenIcon from '@mui/icons-material/OpenInNew';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { Stack, Rating, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Autocomplete, IconButton, Checkbox } from '@mui/material';

const countries = ['USA', 'Canada', 'Germany', 'France', 'UK', 'Japan'];

interface AddDeliveryAddressDialogProps {
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

const AddDeliveryAddressDialog:FC<AddDeliveryAddressDialogProps> = ({ setAddresses }) =>  {
  const [open, setOpen] = useState<boolean>(false);
  const [place, setPlace] = useState<string>('Home');
  const [phone, setPhone] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [zipCode, setZipCode] = useState<string>('');
  // const [selectedCountry, setSelectedCountry] = useState<string | undefined>(undefined);

  const [isDefault, setIsDefault] = useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangePlace = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlace(event.target.value);
  };
  const handleChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };
  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleChangeAddress = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };
  const handleChangeCity = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };
  const handleChangeState = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
  };
  const handleChangeZipCode = (event: React.ChangeEvent<HTMLInputElement>) => {
    setZipCode(event.target.value);
  };
  const handleCheckboxChange = () => {
    setIsDefault(!isDefault);
  };


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const fullAddress = `${address} - ${city}, ${state} / ${zipCode}`;

    const formJson: {
      name: string;
      place: string;
      address: string;
      // selectedCountry?: string;
      phone: string;
      isDefault: boolean;
    } = {
      place,
      name,
      phone,
      address: fullAddress,
      // selectedCountry: selectedCountry || '',
      isDefault,
    };
    setAddresses((prevAddresses) => [...prevAddresses, formJson]);

    // const formData = new FormData(event.currentTarget);
    // console.log(formData);

    // // Преобразуем FormData в объект JavaScript
    // const formJson: Record<string, string> = {};
    // formData.forEach((value, key) => {
    //   formJson[key] = value.toString();
    // });

    // Выводим объект в консоль
    console.log(formJson);
    clearForm();
    handleClose();
  };
  const handleCancel = () => {
    clearForm();
    setOpen(false);
  };
  const clearForm = () => {
    setName('');
    setPhone('');
    setPlace('Home');
    setAddress('');
    setCity('');
    setState('');
    setZipCode('');
    // setSelectedCountry(undefined);

  };

  return (
    <>
      <Button
        variant="text"
        color="primary"
        size="small"
        startIcon={<AddIcon />}
        onClick={handleClickOpen}
        sx={{ textTransform: 'none' }} // чтобы текст не был заглавным
      >
        New Address
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle>New Address</DialogTitle>
        <DialogContent>
          <FormControl>
            <FormLabel id="place" sx={{ display: 'none' }}>
              Place
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="place"
              name="place"
              value={place}
              onChange={handleChangePlace}
            >
              <FormControlLabel value="Home" control={<Radio />} label="Home" />
              <FormControlLabel value="Office" control={<Radio />} label="Office" />
            </RadioGroup>
          </FormControl>

          <Stack direction="row" gap={2}>
            <TextField
              label="Full Name"
              required
              margin="dense"
              id="name"
              name="name"
              type="text"
              fullWidth
              variant="outlined"
              value={name}
              onChange={handleChangeName}
              sx={{ mt: '24px' }}
            />
            <TextField
              label="Phone"
              required
              margin="dense"
              id="name"
              name="phone"
              type="phone"
              fullWidth
              variant="outlined"
              value={phone}
              onChange={handleChangePhone}
              sx={{ mt: '24px' }}
            />
          </Stack>

          <TextField
            label="Address"
            required
            margin="dense"
            id="address"
            name="address"
            type="text"
            fullWidth
            variant="outlined"
            value={address}
            onChange={handleChangeAddress}
            sx={{ mt: '24px' }}
          />

          <Stack direction="row" gap={2}>
            <TextField
              label="Town/City"
              required
              margin="dense"
              id="city"
              name="city"
              type="text"
              fullWidth
              variant="outlined"
              value={city}
              onChange={handleChangeCity}
              sx={{ mt: '24px' }}
            />
            <TextField
              label="State"
              required
              margin="dense"
              id="state"
              name="state"
              type="phone"
              fullWidth
              variant="outlined"
              value={state}
              onChange={handleChangeState}
              sx={{ mt: '24px' }}
            />
            <TextField
              label="Zip/Code"
              required
              margin="dense"
              id="zipCode"
              name="zipCode"
              type="phone"
              fullWidth
              variant="outlined"
              value={zipCode}
              onChange={handleChangeZipCode}
              sx={{ mt: '24px' }}
            />
          </Stack>

          <Autocomplete
            id="autocomplete-country"
            options={countries}
            // value={selectedCountry}
            // onChange={(event, newValue) => {
            //   setSelectedCountry(newValue || undefined);
            // }}
            sx={{ mt: '24px' }}
            getOptionLabel={(option) => option}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Country"
                placeholder="Choose a country"
                variant="outlined"
                fullWidth
                // error // добавлено для отображения ошибки в поле
                required
                helperText="This is a required field" // текст помощи для отображения ошибки
                InputProps={{
                  ...params.InputProps,
                }}
              />
            )}
          />

          <FormControlLabel
            control={<Checkbox />}
            label="Use this address as default."
            checked={isDefault}
            onChange={handleCheckboxChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button type="submit">Deliver to this Address</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
export default AddDeliveryAddressDialog;
