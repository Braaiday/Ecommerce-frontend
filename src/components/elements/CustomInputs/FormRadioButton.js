import { Box, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from '@mui/material'
import React from 'react'
import { Controller } from 'react-hook-form'

export const FormRadioButton =
    ({
        name = 'Please supply a name',
        rules = { required: true },
        label = 'please supply label',
        radioGroupOptions = [],
        row,
        size = 'medium',
        color = 'primary',
        error,
        control,
        helperText,
    }) => {
        if (!control) return <p>Please pass control from react-hook-form</p>
        return (
            <Box>
                <FormControl error={error}>
                    <FormLabel>
                        {label}
                    </FormLabel>
                    <Controller
                        name={name}
                        control={control}
                        rules={rules}
                        render={({ field }) =>
                            <RadioGroup
                                name={name}
                                row={row}
                                size={size}
                                color={color}
                                {...field}
                            >
                                {radioGroupOptions.map(option =>
                                    <FormControlLabel
                                        control={<Radio />}
                                        label={option.label}
                                        value={option.value}
                                    />
                                )}
                            </RadioGroup>
                        }
                    />
                    {helperText && <FormHelperText>{helperText}</FormHelperText>}
                </FormControl>
            </Box>

        )
    }
