import { Backdrop, CircularProgress } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

export default function ApiBackdrop() {
    const isFetchingData = useSelector(state => state.reducerBackdrop.isFetchingData)

    return (
        <>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={isFetchingData}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    )
}
