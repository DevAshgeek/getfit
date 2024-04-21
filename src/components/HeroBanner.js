import React from 'react'
import { Box, Typography, Button } from '@mui/material'

// import BannerImg from '../assets/images/banner.png'

const HeroBanner = () => {
    const imageURL = 'https://fitnessfactorymaine.com/wp-content/uploads/2017/01/slider_01.jpg'
    return (
        <Box id="heroBanner"
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
                <Typography color="#ff2625" fontWeight="600" fontSize="32px" mb="5px">GetFit Club</Typography>
                <Typography color="#ffffff" fontWeight="700" fontSize={{ lg: '50px', xs: '46px' }}>Sweat, Respect and Repeat</Typography>
                <Typography color="#ff2625" fontWeight="600" fontSize="22px" mb="6vh">Check out most effective exercises</Typography>
                <Button variant='contained' href='#exercises' color="error" size='large' sx={{ borderRadius: '20px', fontSize: '16px', fontWeight: '600' }}>Explore Exercises</Button>
                <Typography color="#F40009" fontWeight="600" fontSize="44px" letterSpacing="10px" mt="6vh" sx={{ opacity: 0.3, display: { md: 'flex', xs: 'none' } }}>GLORY TO HANUMAN</Typography>
            </Box>
        </Box >
    )
}

export default HeroBanner