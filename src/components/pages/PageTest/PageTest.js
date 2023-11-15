import { Box, Button, ButtonGroup, InputAdornment, Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormField from '../../elements/CustomInputs/FormField';
import FormSelect from '../../elements/CustomInputs/FormSelect';
import { useForm } from 'react-hook-form';
import { FormRadioButton } from '../../elements/CustomInputs/FormRadioButton';

export const PageTest = () => {
    const [formats, setFormats] = useState([]);
    const { handleSubmit, control } = useForm({});

    const handleFormatChanges = (change, updatedFormats) => {
        setFormats(updatedFormats);
    }

    return (
        <Box>
            {/* Typography */}
            <Typography variant='h1' gutterBottom>This is Typography of variant h1</Typography>
            <Typography variant='h2' gutterBottom>This is Typography of variant h2</Typography>
            <Typography variant='h3' gutterBottom>This is Typography of variant h3</Typography>
            <Typography variant='h4' gutterBottom>This is Typography of variant h4</Typography>
            <Typography variant='h5' gutterBottom>This is Typography of variant h5</Typography>
            <Typography variant='h6' gutterBottom>This is Typography of variant h6</Typography>

            {/* Buttons */}
            <Stack spacing={2} direction='row' marginBottom={2}>
                <Button variant='text'>Primary</Button>
                <Button variant='contained'>Primary</Button>
                <Button variant='outlined'>Primary</Button>
            </Stack>

            {/* Button Group */}
            <ButtonGroup variant='contained' orientation='horizontal' size='small' color='secondary' aria-label='alignment button group'>
                <Button >Left</Button>
                <Button >Center</Button>
                <Button >Right</Button>
            </ButtonGroup>

            {/* Toggle Button */}
            <Stack direction='row' marginTop={2} marginBottom={2}>
                <ToggleButtonGroup aria-label='text formatting' value={formats} onChange={handleFormatChanges} color='success' exclusive>
                    <ToggleButton value='bold' >
                        <FormatBoldIcon />
                    </ToggleButton>
                    <ToggleButton value='italic'>
                        <FormatItalicIcon />
                    </ToggleButton>
                    <ToggleButton value='underlined'>
                        <FormatUnderlinedIcon />
                    </ToggleButton>
                </ToggleButtonGroup>
            </Stack>

            {/* Text Fields - I wrap MUI text fields with react hook form controller*/}
            <Box component="form" onSubmit={handleSubmit((data) => { })} marginBottom={2}>
                <Stack spacing={4} direction='row'>
                    <FormField fullWidth name='name' label='Name' control={control} variant='outlined' disable />
                    <FormField fullWidth name='surname' label='Surname' control={control} variant='filled' />
                    <FormField fullWidth name='age' label='Age' control={control} variant='standard' type='number' />
                </Stack>

                <Stack spacing={4} direction='row'>
                    <FormField fullWidth name='price' label='Price' control={control} variant='standard' type='number' InputProps={{ startAdornment: <InputAdornment position='start'>R</InputAdornment> }} />
                    <FormField fullWidth name='weight' label='Weight' control={control} variant='standard' type='number' InputProps={{ endAdornment: <InputAdornment position='end'>kg</InputAdornment> }} />
                </Stack>

                <Stack spacing={4} direction='row'>
                    <FormField fullWidth name='password' label='Password' type='password' control={control} variant='standard' helperText='Do not share your password' />
                </Stack>

                <Stack spacing={4} direction='row'>
                    <FormSelect fullWidth name="category" label="Category" control={control} select items={["Technology", "Cables", "Computers"]} SelectProps={{ multiple: true }} />
                </Stack>
            </Box>

            {/* Radio Button */}
            <Stack spacing={4} direction='row'>
                <FormRadioButton helperText='This is helper Test' error row name='ram-allocation-group' label='Amount of ram' control={control} radioGroupOptions={[{ label: '6gb', value: '6gb' }, { label: '12gb', value: '12gb' }, { label: '16gb', value: '16gb' }]} />
            </Stack>
        </Box>
    )
}
