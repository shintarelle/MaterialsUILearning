'use client'

import React, { useState } from 'react';

import { TextField, Button, InputAdornment } from '@mui/material';

const DiscountForm: React.FC = () => {
  const [discountCode, setDiscountCode] = useState<string>('');

  const handleApply = () => {
    // Обработка применения скидочного кода
    console.log('Applying discount code:', discountCode);
  };

  return (
    <div>
      <TextField
        label="Discount codes / Gifts"
        variant="outlined"
        fullWidth
        value={discountCode}
        onChange={(e) => setDiscountCode(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button variant="text" color="primary" size="medium" onClick={handleApply}>
                Apply
              </Button>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default DiscountForm;
