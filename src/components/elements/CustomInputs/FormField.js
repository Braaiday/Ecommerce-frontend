import React from 'react'
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

const FormField = ({
    name = "noname",
    label = "Please pass name and label",
    type = "text",
    variant = 'outlined',
    size = 'small',
    color = 'primary',
    autoComplete,
    fullWidth,
    rules = { required: true },
    required = true,
    error = false,
    InputProps,
    helperText,
    disable,
    control,
}) => {
    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field }) =>
                <TextField
                    size={size}
                    color={color}
                    fullWidth={fullWidth}
                    required={required}
                    id={name}
                    type={type}
                    label={label}
                    InputProps={InputProps}
                    autoComplete={autoComplete}
                    variant={variant}
                    helperText={helperText}
                    disable={disable}
                    error={error}
                    autoFocus
                    {...field}
                />}
        />);

}

export default FormField