import React from 'react';
import { TextField } from '@mui/material';

import { Label } from '../Label/Label.tsx';

type TextInputProps = {
  labelId: string;
  error: boolean;
  helperText?: string;
};

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ labelId, error, helperText, ...props }, ref) => {
    return (
      <TextField
        variant="outlined"
        {...props}
        label={<Label textId={labelId} />}
        error={error}
        helperText={helperText}
        inputRef={ref}
      />
    );
  },
);
