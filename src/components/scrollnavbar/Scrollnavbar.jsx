import { AppBar, Avatar, Box, Button, Container, Drawer, Grid, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import gymlogo from "../../Assets/mainlogo.png"
import React, { useState, useEffect } from 'react'
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const FadeInDiv = styled.div`
  animation: ${keyframes`${fadeIn}`} 1s ease-in;
`;

const drawerWidth = "100%";

function Scrollnavbar() {
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

    const [hometab, setHometab] = React.useState('white');
    const [aboutustab, setAboutustab] = React.useState('white');
    const [featurestab, setFeaturetab] = React.useState('white');
    const [contactustab, setContactustab] = React.useState('white');
    const [workoutplantab, setWorkoutplan] = React.useState('white');


    useEffect(() => {
        const interval = setInterval(() => {
            // console.log(window.location.href)
            if (window.location.href === `http://localhost:3000/`) {
                setHometab('#FF5100')
                setFeaturetab('#222')
                setAboutustab('#222')
                setContactustab('#222')
                setWorkoutplan('#222')
            } else if (window.location.href === `http://localhost:3000/#home`) {
                setHometab('#FF5100')
                setFeaturetab('#222')
                setAboutustab('#222')
                setContactustab('#222')
                setWorkoutplan('#222')
            } else if (window.location.href === `http://localhost:3000/#workoutplan`) {
                setHometab('#222')
                setFeaturetab('#222')
                setAboutustab('#222')
                setContactustab('#222')
                setWorkoutplan('#FF5100')
            } else if (window.location.href === `http://localhost:3000/#features`) {
                setHometab('#222')
                setFeaturetab('#FF5100')
                setAboutustab('#222')
                setContactustab('#222')
                setWorkoutplan('#222')
            } else if (window.location.href === `http://localhost:3000/#aboutus`) {
                setHometab('#222')
                setFeaturetab('#222')
                setAboutustab('#FF5100')
                setContactustab('#222')
                setWorkoutplan('#222')
            } else if (window.location.href === `http://localhost:3000/#contactus`) {
                setHometab('#FF5100')
                setFeaturetab('#222')
                setAboutustab('#222')
                setContactustab('#222')
                setWorkoutplan('#222')
            }
        }, 1000);
        return () => clearInterval(interval);
    })


    const [activeTab, setActiveTab] = useState('home'); // Set the initial active tab

    const handleIntersection = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setActiveTab(entry.target.id);
            }
        });
    };

    useEffect(() => {
        const sections = ['home', 'aboutus', 'workoutplan', 'features', 'contactus'];

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
            <FadeInDiv>

                <Box sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}>
                    <Container>
                        <AppBar position="fixed"
                            style={{ backgroundColor: 'white' }}
                            sx={{ backgroundColor: "#0B183C", boxShadow: "#00000029 0px 3px 6px" }} className="navbar">
                            <Toolbar>
                                <Container>
                                    <Grid container spacing={2} align="center" pt={3} pb={3}>
                                        <Grid item md={4} lg={3} align="left">
                                            <Box color="black" pt={0.5}>
                                                <div style={{ display: "flex", justifyContent: "start", alignContent: "start", gap: "10px" }}>
                                                    <img variant="" src={gymlogo} style={{ width: "10vh" }} />
                                                    <Typography variant="paragraph" pt={2} opacity={0.8} color="#222" fontWeight="bold">My Health: <br />Fitness Coach.</Typography>
                                                </div>
                                            </Box>
                                        </Grid>

                                        <Grid item md={4} lg={6} align="center">
                                            <div style={{ display: "flex", alignContent: "center", justifyContent: "center" }}>
                                                <Stack align="center" direction="row" spacing={3} sx={{ color: "", marginTop: "4vh", fontSize: "20px", letterSpacing: "0px", fontWeight: 510, cursor: "pointer" }}>
                                                    <a href="#home" style={{ textDecoration: "none", opacity: 0.8, color: activeTab === 'home' ? '#FF5100' : '#222' }} ><Typography variant="paragraph" >Home</Typography></a>
                                                    <a href="#aboutus" style={{ textDecoration: "none", opacity: 0.8, color: activeTab === 'aboutus' ? '#FF5100' : '#222' }} ><Typography variant="paragraph">About Us</Typography></a>
                                                    <a href="#workoutplan" style={{ textDecoration: "none", opacity: 0.8, color: activeTab === 'workoutplan' ? '#FF5100' : '#222' }} ><Typography variant="paragraph">Workout Plans</Typography></a>
                                                    <a href="#features" style={{ textDecoration: "none", opacity: 0.8, color: activeTab === 'features' ? '#FF5100' : '#222' }}><Typography variant='paragraph'>Features</Typography></a>
                                                    <a href="#contactus" style={{ textDecoration: "none", opacity: 0.8, color: activeTab === 'contactus' ? '#FF5100' : '#222' }}><Typography variant='paragraph'>Contact Us</Typography></a>
                                                </Stack>
                                            </div>
                                        </Grid>

                                        {/* <Grid item md={4} lg={6} align="center" >
                                        <div style={{ display: "flex", alignContent: "center", justifyContent: "center" }}>
                                            <Stack align="center" direction="row" spacing={3} sx={{ color: "", marginTop: "4vh", fontSize: "20px", letterSpacing: "0px", fontWeight: 510, cursor: "pointer" }}>
                                                <a href="#home" style={{ textDecoration: "none", opacity: 0.8, color: `${hometab}` }} ><Typography variant="paragraph" >Home</Typography></a>
                                                <a href="#aboutus" style={{ textDecoration: "none", opacity: 0.8, color: `${aboutustab}` }} ><Typography variant="paragraph">About Us</Typography></a>
                                                <a href="#workoutplan" style={{ textDecoration: "none", opacity: 0.8, color: `${workoutplantab}` }} ><Typography variant="paragraph">Workout Plans</Typography></a>
                                                <a href="#features" style={{ textDecoration: "none", opacity: 0.8, color: `${featurestab}` }}><Typography variant='paragraph'>Features</Typography></a>
                                                <a href="#contactus" style={{ textDecoration: "none", opacity: 0.8, color: `${contactustab}` }}><Typography variant='paragraph'>Contact Us</Typography></a>
                                            </Stack>
                                        </div>
                                    </Grid> */}

                                        <Grid item md={4} lg={3} align="right">
                                            <Stack sx={{ marginTop: "1.5vh" }}>
                                                <div style={{ display: "flex", justifyContent: "right", alignContent: "right", gap: "20px" }}>
                                                    <div color="black">
                                                        <a href="#download" style={{ textDecoration: "none" }}>
                                                            <Button variant="contained" sx={{
                                                                borderRadius: "10px",
                                                                // pl: 3,
                                                                // pr: 3,
                                                                width: "150px",
                                                                height: "50px",
                                                                backgroundColor: "rgb(255, 103, 0)",
                                                                boxShadow: "none",
                                                                color: "white",
                                                                textTransform: "capitalize",
                                                                fontWeight: "medium",
                                                                fontSize: "15px",
                                                                letterSpacing: "1px",
                                                                ':hover': {
                                                                    boxShadow: "none",
                                                                    background: 'linear-gradient(to bottom, rgba(0,0, 0, 0.8), rgba(0, 0, 0, 0.8))', // Slightly transparent color on hover
                                                                    color: "rgb(255, 103, 0)",
                                                                    transform: 'scale(1.1)',
                                                                },
                                                            }} >Download App</Button>
                                                        </a>
                                                    </div>
                                                </div>
                                            </Stack>
                                        </Grid>
                                    </Grid>
                                </Container>
                            </Toolbar>
                        </AppBar>
                    </Container>
                </Box>

            </FadeInDiv>
        </>
    )
}

export default Scrollnavbar
