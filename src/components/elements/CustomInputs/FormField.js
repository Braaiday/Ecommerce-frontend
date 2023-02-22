import { InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React from 'react'
import { Controller } from 'react-hook-form';

export default function FormField({ name, control, label, type = "text", items = [], rules = { required: true }, autoComplete = "" }) {

    // Text Inputs
    if (type === "text") return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field }) =>
                <TextField
                    argin="normal"
                    fullWidth
                    required
                    id={name}
                    type={type}
                    label={label}
                    autoComplete={autoComplete}
                    autoFocus
                    {...field}
                />}
        />
    )
    if (type === "password") return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field }) =>
                <TextField
                    argin="normal"
                    fullWidth
                    required
                    id={name}
                    type={type}
                    label={label}
                    autoComplete={autoComplete}
                    autoFocus
                    {...field}
                />}
        />
    )
    // Number Inputs
    if (type === "number") return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field }) =>
                <TextField
                    argin="normal"
                    fullWidth
                    required
                    id={name}
                    type={type}
                    label={label}
                    autoFocus
                    autoComplete={autoComplete}
                    {...field}
                />}
        />
    )
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
    return null;

}