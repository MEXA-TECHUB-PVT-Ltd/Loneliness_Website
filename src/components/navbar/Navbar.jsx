import { AppBar, Avatar, Box, Button, Container, Drawer, Grid, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import logo from "../../Assets/logo.png"
import React, { useState, useEffect } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import "../../styles/Navbar.css"
import { Cancel } from '@mui/icons-material';
// import Scrollnavbar from '../scrollnavbar/Scrollnavbar';

const drawerWidth = "100%";

function Navbar() {
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const hidefunction = () => {
        setOpen(false);
    }

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [activeTab, setActiveTab] = useState('home'); // Set the initial active tab

    const handleIntersection = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setActiveTab(entry.target.id);
            }
        });
    };

    useEffect(() => {
        const sections = ['home', 'aboutus', 'features', 'howitworks', 'showcase', 'case', 'pricing', 'contactus'];

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5, // Adjust as needed, controls when the active tab changes
        };

        const observer = new IntersectionObserver(handleIntersection, observerOptions);

        sections.forEach((section) => {
            const target = document.getElementById(section);
            if (target) {
                observer.observe(target);
            }
        });

        return () => {
            sections.forEach((section) => {
                const target = document.getElementById(section);
                if (target) {
                    observer.unobserve(target);
                }
            });
        };
    }, []);

    return (
        <>
            <Box sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}>
                <AppBar position="fixed"
                    // elevation={scrolled ? 4 : 0} // Change elevation based on scroll
                    // style={{ backgroundColor: '#101010' }} // Change background color based on scroll
                    sx={{ backgroundColor: "black", boxShadow: "rgba(99, 99, 99, 0.14)" }} className="navbar">
                    <Toolbar>
                        <Container>
                            <Grid container spacing={2} align="center" pt={2} pb={2}>
                                <Grid item md={4} lg={2.5} align="left">
                                    <Box color="black" pt={{ xs: 0.5, lg: 1, xl: 0 }}>
                                        <div style={{ display: "flex", justifyContent: "start", alignContent: "start", gap: "10px" }}>
                                            <img variant="" src={logo} style={{ width: "18vh" }} />
                                        </div>
                                    </Box>
                                </Grid>

                                <Grid item md={4} lg={7.9} align="right">
                                    <div style={{ display: "flex", alignContent: "right", justifyContent: "right" }}>
                                        <Stack align="center" direction="row" spacing={3} sx={{ font: "Pacifico", color: "", marginTop: "2vh", fontSize: { lg: "16px", xl: "15px" }, letterSpacing: "0px", fontWeight: 550, cursor: "pointer" }}>
                                            <a href="#home" style={{ font: "Pacifico", textDecoration: "none", color: activeTab === 'home' ? 'yellow' : 'white' }} ><Typography variant="paragraph" >Home</Typography></a>
                                            <a href="#aboutus" style={{ font: "Pacifico", textDecoration: "none", color: activeTab === 'aboutus' ? 'yellow' : 'white' }} ><Typography variant="paragraph">About Us</Typography></a>
                                            <a href="#features" style={{ font: "Pacifico", textDecoration: "none", color: activeTab === 'features' ? 'yellow' : 'white' }} ><Typography variant="paragraph">Features</Typography></a>
                                            <a href="#howitworks" style={{ font: "Pacifico", textDecoration: "none", color: activeTab === 'howitworks' ? 'yellow' : 'white' }} ><Typography variant="paragraph">How It works</Typography></a>
                                            <a href="#showcase" style={{ font: "Pacifico", textDecoration: "none", color: activeTab === 'showcase' ? 'yellow' : 'white' }}><Typography variant='paragraph'>App Showcase</Typography></a>
                                            <a href="#pricing" style={{ font: "Pacifico", textDecoration: "none", color: activeTab === 'pricing' ? 'yellow' : 'white' }}><Typography variant='paragraph'>Pricing</Typography></a>
                                            {/* <a href="#testimonials" style={{ font: "Pacifico", textDecoration: "none", color: activeTab === 'testimonials' ? 'yellow' : 'white' }}><Typography variant='paragraph'>Testimonials</Typography></a> */}
                                            <a href="#contactus" style={{ font: "Pacifico", textDecoration: "none", color: activeTab === 'contactus' ? 'yellow' : 'white' }}><Typography variant='paragraph'>Contact Us</Typography></a>
                                        </Stack>
                                    </div>
                                </Grid>

                                <Grid item md={4} lg={1.6} align="right">
                                    <Stack sx={{ marginTop: "0vh" }}>
                                        <div style={{ display: "flex", justifyContent: "right", alignContent: "right", gap: "20px" }}>
                                            <div color="black">
                                                <a href="#download">
                                                    <Button variant="contained" sx={{
                                                        borderRadius: "10px",
                                                        width: "120px",
                                                        height: "40px",
                                                        background: 'linear-gradient(to right, #bdae3e , #FCE220)', // Slightly transparent color on hover
                                                        boxShadow: "none",
                                                        color: "white",
                                                        textTransform: "capitalize",
                                                        fontWeight: "medium",
                                                        fontSize: "15px",
                                                        letterSpacing: "1px",
                                                        borderRadius: "50px",
                                                        ':hover': {
                                                            boxShadow: "none",
                                                            background: 'linear-gradient(to bottom,  #FCE220, #bdae3e)', // Slightly transparent color on hover
                                                            color: "white",
                                                        },
                                                    }} >Sign In</Button>
                                                </a>
                                            </div>
                                        </div>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Container>
                    </Toolbar>
                </AppBar>
            </Box >

            <Box sx={{ display: { xs: "block", sm: "block", md: "none", lg: "none" } }}>
                <AppBar position="fixed" sx={{ backgroundColor: "black", boxShadow: "rgba(99, 99, 99, 0.14)" }} >
                    <Toolbar>
                        <Grid container spacing={2} pt={1}>
                            <Grid item xs={10} md={10} sm={10} >
                                <div style={{ marginTop: "5px", display: "flex", justifyContent: "start", alignContent: "start", gap: "10px" }}>
                                    <img variant="" src={logo} style={{ marginBottom: "10px", width: "20vh", borderRadius: "7px" }} />
                                </div>
                            </Grid>
                            <Grid item xs={2} md={2} sm={2} mt={1}>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={handleDrawerOpen}>
                                    <MenuIcon fontSize="medium" sx={{ color: "yellow" }} />
                                </IconButton>
                                <Drawer
                                    sx={{
                                        width: "100%",
                                        flexShrink: 0,
                                        "& .MuiDrawer-paper": {
                                            width: "100%",
                                            height: "100%",
                                            boxSizing: "border-box",
                                            backgroundColor: "black"
                                        }
                                    }}
                                    anchor="right"
                                    open={open}
                                // onClick={handleDrawerClose}
                                >
                                    <Container>
                                        <Stack direction="column" spacing={2} sx={{ color: "#252525", pt: 3, pb: 3, fontSize: "medium", fontWeight: "bold", cursor: "pointer" }}>
                                            <Grid item xs={12} md={12} sm={12}>
                                                <Cancel fontSize='large' sx={{ color: "yellow" }} onClick={() => hidefunction()} />
                                            </Grid>
                                            <img src={logo} alt="..." style={{ width: "25vh", borderRadius: "7px", alignSelf: "center" }} />
                                            <a href="#home" onClick={handleDrawerClose} style={{ textDecoration: "none", opacity: 0.8, color: activeTab === 'home' ? 'yellow' : 'white' }} ><Typography variant="paragraph" >Home</Typography></a>
                                            <a href="#aboutus" onClick={handleDrawerClose} style={{ font: "Pacifico", textDecoration: "none", color: activeTab === 'aboutus' ? 'yellow' : 'white' }} ><Typography variant="paragraph">About Us</Typography></a>
                                            <a href="#features" onClick={handleDrawerClose} style={{ font: "Pacifico", textDecoration: "none", color: activeTab === 'features' ? 'yellow' : 'white' }} ><Typography variant="paragraph">Features</Typography></a>
                                            <a href="#howitworks" onClick={handleDrawerClose} style={{ font: "Pacifico", textDecoration: "none", color: activeTab === 'howitworks' ? 'yellow' : 'white' }} ><Typography variant="paragraph">How It works</Typography></a>
                                            <a href="#showcase" onClick={handleDrawerClose} style={{ font: "Pacifico", textDecoration: "none", color: activeTab === 'case' ? 'yellow' : 'white' }}><Typography variant='paragraph'>App Showcase</Typography></a>
                                            <a href="#pricing" onClick={handleDrawerClose} style={{ font: "Pacifico", textDecoration: "none", color: activeTab === 'pricing' ? 'yellow' : 'white' }}><Typography variant='paragraph'>Pricing</Typography></a>
                                            {/* <a href="#testimonials" onClick={handleDrawerClose} style={{ font: "Pacifico", textDecoration: "none", color: activeTab === 'testimonials' ? 'yellow' : 'white' }}><Typography variant='paragraph'>Testimonials</Typography></a> */}
                                            <a href="#contactus" onClick={handleDrawerClose} style={{ font: "Pacifico", textDecoration: "none", color: activeTab === 'contactus' ? 'yellow' : 'white' }}><Typography variant='paragraph'>Contact Us</Typography></a>
                                        </Stack>
                                    </Container>

                                    <div className='container'>
                                        <div className='content'>
                                            <Grid xs={12} align="center">
                                                <Box p={3} align="center">
                                                    <Typography variant="paragraph" fontWeight="bold" sx={{ letterSpacing: "1px" }} fontSize="15px" color="white">
                                                        &copy; 2023 <span style={{ color: "yellow" }}>tinder,</span> All Rights Reserved
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                        </div>
                                    </div>

                                </Drawer>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Box>

        </>
    )
}

export default Navbar