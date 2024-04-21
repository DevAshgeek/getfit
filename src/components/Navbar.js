import React from 'react'
import { Link } from 'react-router-dom'
import { Stack, Typography, Divider } from '@mui/material'
import logo from '../assets/images/Logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
// bgcolor="#FFF5EE"
const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleMenuClick = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000, justifyContent: "space-between", backgroundColor: "#FFF5EE" }}>
            <Stack
                direction="row"
                sx={{
                    gap: { xs: '40vw', md: '45vw' },
                    mt: { xs: '15px', md: '18px' },
                    mb: { xs: '10px', md: '9px' },
                }}
                position="relative"
                alignItems="center"
            >
                <a href="#heroBanner" style={{
                    flex: 1, textDecoration: 'none', textAlign: 'center', display: 'flex', flexDirection: 'row',
                    justifyContent: {
                        xs: 'flex-start', md: 'center'
                    }, alignItems: 'center',

                }}>
                    <img src={logo} alt="logo" style={{ width: '38px', height: '38px', margin: '0 3px' }} />
                    <Typography color="#ff2625" fontWeight="600" fontSize="26px">GetFit</Typography>
                </a>

                <Stack
                    direction="row"
                    style={{ flex: 1, justifyContent: "center" }}
                    sx={{ display: { md: "flex", xs: "none" }, gap: { md: "2.5rem", lg: "3.2rem" } }}
                    fontSize="24px"
                    alignItems="center"
                    width="10rem"
                >
                    <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
                    <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a>
                </Stack>

                <MenuIcon
                    onClick={handleMenuClick}
                    style={{ marginRight: '2rem', cursor: 'pointer' }}
                    sx={{ display: { md: "none", xs: "flex" }, justifyContent: { xs: "flex-end" } }}
                />
            </Stack>
            {isSidebarOpen && (
                <div
                    style={{
                        position: 'fixed',
                        top: "4.2rem",
                        left: 0,
                        height: '100vh',
                        width: '100%',
                        backgroundColor: '#F8F7F1',
                        display: 'flex',
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        gap: "3rem",
                        alignItems: "center",
                        fontSize: "38px",
                        paddingTop: "8rem",
                        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                        zIndex: 1000,
                    }}
                >
                    <Link to="/" style={{ textDecoration: 'none', color: "#ff2625", padding: '10px 20px', display: 'block' }} onClick={() => setIsSidebarOpen(false)}>Home</Link>
                    <a href="#exercises" style={{ textDecoration: 'none', color: "#ff2625", padding: '10px 20px', display: 'block' }} onClick={() => setIsSidebarOpen(false)}>Exercises</a>
                </div>
            )}
            <Divider sx={{ bgcolor: "#b7b7b7", height: { md: "2px", xs: "1.5px" } }} />
            <Divider sx={{ bgcolor: "#ff2625", height: { md: "4px", xs: "3.5px" } }} />

        </div>
    );
}

export default Navbar;