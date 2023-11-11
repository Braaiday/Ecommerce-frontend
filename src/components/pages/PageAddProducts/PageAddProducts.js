import { Box, Button, Container, Grid, InputLabel, Paper, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addImage, addProduct } from '../../../reducers/shared/thunks/thunks';
import FormField from '../../elements/CustomInputs/FormField';
import ImageUpload from '../../elements/ImageUpload/ImageUpload';

export default function PageAddProducts() {
    const [image, setImage] = useState(null);
    const dispatch = useDispatch();
    const { handleSubmit, control } = useForm({});

    const onSubmit = async (data) => {
        if (image !== null) {
            const formdata = new FormData();
            formdata.append("image", image);
            let imageResponse = await dispatch(addImage(formdata));
            let hasError2 = imageResponse?.payload?.response?.data?.error;
            if (!hasError2) {
                data.imgUrl = process.env.REACT_APP_API_URL + '/images/' + imageResponse.data.filename;
                window.alert("Image uploaded");
            } else {
                window.alert(hasError2);
            }
        }
        let response = await dispatch(addProduct(data));
        let hasError = response?.payload?.response?.data?.error;
        if (!hasError) {
            window.alert("product added");
        } else {
            window.alert(hasError);

        }
    }

    return (
        <Paper sx={{
            p: 10,
            display: 'flex',
            flexDirection: 'column',
        }}>
            <Container component="main" maxWidth="xs">
                <Typography component="h1" variant="h2" color="inherit" noWrapsx={{ flexGrow: 1 }} textAlign="center">
                    Add Products
                </Typography>
                <Box component="form" onSubmit={handleSubmit((data) => onSubmit(data))} sx={{ mt: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <FormField name="productname" label="Product Name" control={control} />
                        </Grid>
                        <Grid item xs={12}>
                            <FormField name="description" label="Description" control={control} />
                        </Grid>
                        <Grid item xs={12}>
                            <FormField name="price" label="Price R" control={control} type="number" />
                        </Grid>
                        <Grid item xs={12}>
                            <FormField name="inStockQuantity" label="Quantity" control={control} type="number" />
                        </Grid>
                        <Grid item xs={12}>
                            <FormField name="category" label="Category" control={control} type="dropdown" items={["Technology", "Cables", "Computers"]} />
                        </Grid>
                        <Grid item xs={12}>
                            <InputLabel id="productImage">Product Image</InputLabel>
                        </Grid>
                        <Grid item xs={12}>
                            <ImageUpload getImage={(image) => setImage(image)} />
                        </Grid>
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                        Add Product
                    </Button>
                </Box>
            </Container>
        </Paper>
    );
}
