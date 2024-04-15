import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Logo from '../assets/images/Logo.png'

const Footer = () => {
    return (
        <Box mt="80px" bgcolor="#fff3f4">
            <Stack gap="40px" alignItems="center" px="40px" pt="24px"></Stack>
            <Stack direction="row" justifyContent="center" gap="10px" alignItems="center" px="40px" pt="24px">
                <img src={Logo} alt='logo' width="45px" height="45px" />
                <Typography fontWeight={700}
                    sx={{ fontSize: "28px", color: "#ff2625" }}
                    mt="25px" textAlign="center" pl="0px" ml="0px"
                >
                    <a style={{ textDecoration: "none", color: "inherit" }} href="#heroBanner">GetFit</a>
                </Typography>
            </Stack>
            <Typography fontWeight={700}
                sx={{ fontSize: "24px" }}
                mt="25px" mb="20px" textAlign="center"
            >
                Made with ❤️ by Ashutosh Yadav
            </Typography>

        </Box>
    )
}

export default Footer