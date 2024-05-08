'use client'

import * as React from 'react';
import { useState } from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import EditIcon from '@mui/icons-material/Edit';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { Stack, Rating, Typography } from '@mui/material';

export default function AddReviewDialog() {
  const [open, setOpen] = useState<boolean>(false);
  const [rating, setRating] = useState<number | null>(0);
  const [review, setReview] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeReview = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReview(event.target.value);
  };
  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    console.log(formData);

    // Преобразуем FormData в объект JavaScript
    const formJson: Record<string, string> = {};
    formData.forEach((value, key) => {
      formJson[key] = value.toString();
    });

    // Выводим объект в консоль
    console.log(formJson);
    clearForm();
    handleClose();
  };
  const handleCancel = () => {
    clearForm()
    setOpen(false);
  };
  const clearForm = () => {
    setRating(0);
    setReview('');
    setName('');
    setEmail('');
  }


  return (
    <>
      <Button
        variant="contained"
        size="large"
        startIcon={<EditIcon />}
        onClick={handleClickOpen}
        sx={{ backgroundColor: '#f7f7f7', color: '#000000' }}
      >
        Write rewiew
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle>Add Review</DialogTitle>
        <DialogContent>
          <Stack direction="row" gap={2}>
            <Typography>Your review about this product:</Typography>
            <Rating
              name="rating"
              value={rating}
              onChange={(_event, newValue) => {
                setRating(newValue);
              }}
            />
          </Stack>

          <TextField
            label="Review"
            required
            multiline
            id="review"
            name="review"
            rows={3}
            variant="outlined"
            fullWidth
            value={review}
            onChange={handleChangeReview}
            sx={{ mt: '24px' }}
          />

          <TextField
            label="Name"
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
            label="Email"
            required
            margin="dense"
            id="name"
            name="email"
            type="email"
            fullWidth
            variant="outlined"
            value={email}
            onChange={handleChangeEmail}
            sx={{ mt: '24px' }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button type="submit">Post</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
