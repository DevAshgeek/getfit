import React from 'react'
import { Box, Typography } from '@mui/material'

import BannerImg from '../assets/images/slide2.jpg'


const Motivation = () => {
    const imageURL = BannerImg
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="99vh"
            width="100vw"
            sx={{
                position: 'relative', // Change 'absolute' to 'relative' or remove it
                backgroundImage: `url(${imageURL})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <Box sx={{
                mt: { lg: '10px', xs: '60px' },
                textAlign: 'center'
            }}
            >
                <Typography color="#fff" fontWeight="700" fontSize={{ lg: '60px', xs: '52px' }} mb="5px">GET OUT OF YOUR <Typography display='inline' color="#ff2625" fontSize={{ lg: '65px', xs: '55px' }} mb="5px">COMFORT </Typography>ZONE
                </Typography>
                <Typography color="#fff" fontWeight="500" fontSize={{ lg: '26px', xs: '22px' }} mt="3vh" mb="6vh">Hey, no one ever said getting an awesome, healthy body was easy.
                    <br />
                    <Typography display='inline' color="#ff2625" fontSize={{ lg: '26px', xs: '22px' }} mb="6vvh">that’s why the word work is in working out.</Typography>
                </Typography>
            </Box>
        </Box >
    )
}

export default Motivation