import { Box, Container, Grid, Divider, Typography, Button } from "@mui/material";
import React, { useEffect } from 'react'
import aboutus from "../../Assets/aboutus.png"
// import AOS from 'aos';
// import 'aos/dist/aos.css';

function Aboutus() {

    return (
        <>
            <Container>
                <Box id="aboutus" pt={{ xs: 10, md: 10 }}>
                    <Grid container spacing={0}>
                        <Grid xs={12} sm={6} md={6} align="left" >
                            <Box align="" sx={{ mt: "40px" }} pl={{ xs: 0, md: 0, lg: 0 }}>
                                <Box sx={{
                                    width: "130px",
                                    height: "40px",
                                    background: "rgba(252, 226, 32, 0.13)",
                                    boxShadow: "none",
                                    borderRadius: "50px",
                                }}>
                                    <Typography variant="h2" align="center" pt={1.3} fontSize="17px" fontWeight={550} color="#FCE220">
                                        About Us
                                    </Typography>
                                </Box>

                                <Typography variant="h2" fontSize="35px" sx={{ fontFamily: "Poppins", pt: 1, pb: 1, width: { xs: "100%", lg: "100%" } }} fontWeight={540} color="white">
                                    Short Story About Us
                                </Typography>

                                <Typography variant="paragraph" lineHeight="30px" sx={{ fontFamily: "Poppins", width: "50%" }} color="white">
                                    We prioritize meaningful connections and memorable moments. Our user-friendly interface and secure payment system make finding and booking service providers effortless. Whether you need a dinner companion, a date, or a social partner, Loneliness is your go-to app.
                                    <br />
                                    Our dedicated team ensures a reliable, safe, and efficient platform to enhance your social life. Join us in transforming how you connect and engage with others.
                                </Typography>

                                <Box sx={{ pt: 2 }}>
                                    <Button variant="contained" sx={{
                                        borderRadius: "10px",
                                        width: "140px",
                                        height: "45px",
                                        background: 'transparent',
                                        boxShadow: "none",
                                        color: "#FCE220",
                                        textTransform: "capitalize",
                                        fontWeight: "medium",
                                        fontSize: "15px",
                                        letterSpacing: "1px",
                                        border: "1px solid #FCE220",
                                        borderRadius: "50px",
                                        ':hover': {
                                            boxShadow: "none",
                                            background: 'transparent',
                                            color: "#FCE220",
                                        },
                                    }} >Learn More</Button>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid xs={12} sm={6} lg={6} align="" pt={{ xs: 5, sm: 0, md: 0 }}>
                            <div style={{ display: "flex", alignContent: "start", justifyContent: "start" }}>

                                <Box ml={{ xs: 0, md: 8 }} mt={{ xs: 0, sm: 15, md: 3 }} sx={{ zIndex: -1 }}>
                                    <img src={aboutus} alt="..." style={{ width: "90%" }} />
                                </Box>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </Container >
        </>
    )
}

export default Aboutus;