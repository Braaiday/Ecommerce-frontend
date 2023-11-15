import React from 'react'
import { Box, InputLabel, MenuItem, Select } from '@mui/material';
import { Controller } from 'react-hook-form';

const FormSelect = ({
    name = "noname",
    label = "Please pass name and label",
    variant = 'outlined',
    size = 'small',
    color = 'primary',
    fullWidth,
    rules = { required: true },
    required = true,
    items = [],
    error = false,
    helperText,
    disable,
    control,
    SelectProps
}) => {
    return (
        <Box>
            <InputLabel id={name}>{label}</InputLabel>
            <Controller
                name={name}
                control={control}
                rules={rules}
                render={({ field }) =>
                    <Select
                        fullWidth={fullWidth}
                        size={size}
                        color={color}
                        error={error}
                        helperText={helperText}
                        disable={disable}
                        SelectProps={SelectProps}
                        required={required}
                        labelId={name}
                        id={name}
                        variant={variant}
                        {...field}
                    >
                        {items.map(item => <MenuItem value={item}>{item}</MenuItem>)}
                    </Select>
                }
            />
        </Box>
    )
}

export default FormSelect;