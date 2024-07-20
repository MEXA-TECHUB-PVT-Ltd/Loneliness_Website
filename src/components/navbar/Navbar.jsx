import { AppBar, Avatar, Box, Button, Container, Drawer, Grid, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import logo from "../../Assets/logo.png";
import React, { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import "../../styles/Navbar.css";
import { Cancel } from '@mui/icons-material';

const drawerWidth = "100%";

function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeTab, setActiveTab] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const sections = ['home', 'aboutus', 'features', 'howitworks', 'showcase', 'resshowcase', 'subscription'];

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5, // Adjust as needed, controls when the active tab changes
        };

        const observer = new IntersectionObserver(handleIntersection, observerOptions);

        sections.forEach((section) => {
            console.log(section);
            const target = document.getElementById(section);
            if (target) {
                observer.observe(target);
            } else {
                console.error(`Element with id ${section} not found.`);
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

    const handleIntersection = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setActiveTab(entry.target.id);
            }
        });
    };

    return (
        <>
            <Box sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}>
                <AppBar position="fixed" sx={{ backgroundColor: "black", boxShadow: "rgba(99, 99, 99, 0.14)" }} className="navbar">
                    <Toolbar>
                        <Container>
                            <Grid container spacing={2} align="center" pt={2} pb={2}>
                                <Grid item md={4} lg={2.5} align="left">
                                    <Box color="black" pt={{ xs: 0.5, lg: 1, xl: 0 }}>
                                        <div style={{ display: "flex", justifyContent: "start", alignContent: "start", gap: "10px" }}>
                                            <img src={logo} alt="Logo" style={{ width: "18vh" }} />
                                        </div>
                                    </Box>
                                </Grid>
                                <Grid item md={4} lg={7.9} align="right">
                                    <div style={{ display: "flex", alignContent: "right", justifyContent: "right" }}>
                                        <Stack align="center" direction="row" spacing={3} sx={{ marginTop: "2vh", fontSize: { lg: "16px", xl: "15px" }, fontWeight: 550, cursor: "pointer" }}>
                                            <a href="#home" style={{ textDecoration: "none", color: activeTab === 'home' ? 'yellow' : 'white' }}><Typography variant="body1">Home</Typography></a>
                                            <a href="#aboutus" style={{ textDecoration: "none", color: activeTab === 'aboutus' ? 'yellow' : 'white' }}><Typography variant="body1">About Us</Typography></a>
                                            <a href="#features" style={{ textDecoration: "none", color: activeTab === 'features' ? 'yellow' : 'white' }}><Typography variant="body1">Features</Typography></a>
                                            <a href="#howitworks" style={{ textDecoration: "none", color: activeTab === 'howitworks' ? 'yellow' : 'white' }}><Typography variant="body1">How It Works</Typography></a>
                                            {/* <a href="#showcase" style={{ textDecoration: "none", color: activeTab === 'showcase' ? 'yellow' : 'white' }}><Typography variant='body1'>App Showcase</Typography></a> */}
                                            <a href="#subscription" style={{ textDecoration: "none", color: activeTab === 'subscription' ? 'yellow' : 'white' }}><Typography variant='body1'>Subscription</Typography></a>
                                        </Stack>
                                    </div>
                                </Grid>
                                <Grid item md={4} lg={1.6} align="right">
                                    <Stack sx={{ marginTop: "0vh" }}>
                                        <div style={{ display: "flex", justifyContent: "right", alignContent: "right", gap: "20px" }}>
                                            <div>
                                                <a href="#download">
                                                    <Button variant="contained" sx={{
                                                        borderRadius: "10px",
                                                        width: "120px",
                                                        height: "40px",
                                                        background: 'linear-gradient(to right, #bdae3e , #FCE220)',
                                                        boxShadow: "none",
                                                        color: "white",
                                                        textTransform: "capitalize",
                                                        fontWeight: "medium",
                                                        fontSize: "15px",
                                                        letterSpacing: "1px",
                                                        borderRadius: "50px",
                                                        ':hover': {
                                                            boxShadow: "none",
                                                            background: 'linear-gradient(to bottom, #FCE220, #bdae3e)',
                                                            color: "white",
                                                        },
                                                    }}>Sign In</Button>
                                                </a>
                                            </div>
                                        </div>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Container>
                    </Toolbar>
                </AppBar>
            </Box>

            <Box sx={{ display: { xs: "block", sm: "block", md: "none", lg: "none" } }}>
                <AppBar position="fixed" sx={{ backgroundColor: "black", boxShadow: "rgba(99, 99, 99, 0.14)" }}>
                    <Toolbar>
                        <Grid container spacing={2} pt={1}>
                            <Grid item xs={10}>
                                <div style={{ marginTop: "5px", display: "flex", justifyContent: "start", alignContent: "start", gap: "10px" }}>
                                    <img src={logo} alt="Logo" style={{ marginBottom: "10px", width: "20vh", borderRadius: "7px" }} />
                                </div>
                            </Grid>
                            <Grid item xs={2} mt={1}>
                                <IconButton color="inherit" aria-label="open drawer" onClick={() => setOpen(true)}>
                                    <MenuIcon fontSize="medium" sx={{ color: "yellow" }} />
                                </IconButton>
                                <Drawer
                                    sx={{
                                        width: drawerWidth,
                                        flexShrink: 0,
                                        "& .MuiDrawer-paper": {
                                            width: drawerWidth,
                                            boxSizing: "border-box",
                                            backgroundColor: "black"
                                        }
                                    }}
                                    anchor="right"
                                    open={open}
                                    onClose={() => setOpen(false)}
                                >
                                    <Container>
                                        <Stack direction="column" spacing={2} sx={{ color: "#252525", pt: 3, pb: 3, fontSize: "medium", fontWeight: "bold", cursor: "pointer" }}>
                                            <Grid item xs={12}>
                                                <Cancel fontSize='large' sx={{ color: "yellow" }} onClick={() => setOpen(false)} />
                                            </Grid>
                                            <img src={logo} alt="Logo" style={{ width: "25vh", borderRadius: "7px", alignSelf: "center" }} />
                                            <a href="#home" onClick={() => setOpen(false)} style={{ textDecoration: "none", color: activeTab === 'home' ? 'yellow' : 'white' }}><Typography variant="body1">Home</Typography></a>
                                            <a href="#aboutus" onClick={() => setOpen(false)} style={{ textDecoration: "none", color: activeTab === 'aboutus' ? 'yellow' : 'white' }}><Typography variant="body1">About Us</Typography></a>
                                            <a href="#features" onClick={() => setOpen(false)} style={{ textDecoration: "none", color: activeTab === 'features' ? 'yellow' : 'white' }}><Typography variant="body1">Features</Typography></a>
                                            <a href="#howitworks" onClick={() => setOpen(false)} style={{ textDecoration: "none", color: activeTab === 'howitworks' ? 'yellow' : 'white' }}><Typography variant="body1">How It Works</Typography></a>
                                            <a href="#resshowcase" onClick={() => setOpen(false)} style={{ textDecoration: "none", color: activeTab === 'resshowcase' ? 'yellow' : 'white' }}><Typography variant='body1'>App Showcase</Typography></a>
                                            <a href="#subscription" onClick={() => setOpen(false)} style={{ textDecoration: "none", color: activeTab === 'subscription' ? 'yellow' : 'white' }}><Typography variant='body1'>Subscription</Typography></a>
                                        </Stack>
                                    </Container>

                                    <Box sx={{ textAlign: "center", py: 3 }}>
                                        <Typography variant="body2" fontWeight="bold" sx={{ letterSpacing: "1px" }} color="white">
                                            &copy; 2024 <span style={{ color: "yellow" }}>Loneliness,</span> All Rights Reserved
                                        </Typography>
                                    </Box>
                                </Drawer>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}

export default Navbar;
