import React from 'react'
import { InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

const FormField = ({
    name = "noname",
    control,
    label = "Please pass name and label",
    type = "text",
    items = [],
    rules = { required: true },
    autoComplete = "",
    required = true
}) => {

    // Drop Down Inputs
    if (type === "dropdown") return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field }) =>
                <>
                    <InputLabel id={name}>{label}</InputLabel>
                    <Select
                        margin="normal"
                        fullWidth
                        required
                        labelId={name}
                        id={name}
                        {...field}
                    >
                        {items.map(item => <MenuItem value={item}>{item}</MenuItem>)}
                    </Select>
                </>

            }
        />
    )
    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field }) =>
                <TextField
                    argin="normal"
                    fullWidth
                    required={required}
                    id={name}
                    type={type}
                    label={label}
                    autoFocus
                    autoComplete={autoComplete}
                    {...field}
                />}
        />);

}

export default FormField