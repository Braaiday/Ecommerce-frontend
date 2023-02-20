import { Button } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'

export default function ImageUpload({ getImage }) {
    const [image, setImage] = useState(null);
    const imageRef = useRef();

    const returnImage = () => {
        
        var file = imageRef.current.files[0];
        getImage(file);
    }

    useEffect(() => {
        if (image !== null) {
            returnImage();
        }
    }, [image])

    const imageChange = () => {
        var file = imageRef.current.files[0];
        var reader = new FileReader();
        var url = reader.readAsDataURL(file);

        reader.onloadend = function (e) {
            setImage([reader.result]);

        }.bind(this);
    }
    return (
        <>
            <Button
                variant="contained"
                component="label"
            >
                Upload File
                <input
                    type="file"
                    name="image"
                    hidden
                    ref={imageRef}
                    onChange={imageChange}
                />

            </Button>
            <br></br>
            {image !== null &&
                <img style={{ width: '150px', height: '150px' }} src={image} />
            }
        </>

    )
}