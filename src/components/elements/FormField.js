import { TextField } from '@mui/material';
import React from 'react'
import { Controller } from 'react-hook-form';

export default function FormField({ name, control, label, type = "text" }) {
    return (
        <Controller
            name={name}
            control={control}
            rules={{ required: true }}
            render={({ field }) =>
                <TextField
                    sx={{ mt: 3, mb: 2 }}
                    argin="normal"
                    fullWidth
                    required
                    id={name}
                    type={type}
                    label={label}
                    autoFocus
                    {...field}
                />}
        />
    )
}
