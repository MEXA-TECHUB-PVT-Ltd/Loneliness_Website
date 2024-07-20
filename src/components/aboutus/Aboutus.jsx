import { Box, Container, Grid, Divider, Typography, Button } from "@mui/material";
import React, { useEffect } from 'react'
import aboutus from "../../Assets/aboutus.png"
// import AOS from 'aos';
// import 'aos/dist/aos.css';

function Aboutus() {

    return (
        <>
            <Container>
                <Box id="aboutus" pt={15}>
                    <Grid container spacing={0}>
                        <Grid xs={12} sm={6} lg={6} align="" >
                            <div style={{ display: "flex", alignContent: "start", justifyContent: "start" }}>

                                <Box mt={{ xs: 0, sm: 15, md: 0 }} sx={{ zIndex: -1 }}>
                                    <img src={aboutus} alt="..." style={{ width: "95%" }} />
                                </Box>
                            </div>
                        </Grid>

                        <Grid xs={12} sm={6} md={6} align="left" >
                            <Box align="" sx={{ mt: "40px" }} pl={{ xs: 0, md: 7, lg: 7 }}>
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

                                <Typography variant="paragraph" lineHeight="30px" sx={{ fontFamily: "Poppins" }} color="white">
                                    We help you get to know and match people all around the world. Whether you are on the quest for love or looking for a new connection, Tinder is the right destination to discover your perfect match. At Tinder, we value relationships that are honest, cordial, and respectful. We aspire to keep alive the beauty of human connection. So, in this new digital era, why not reimagine your love life.
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
                    </Grid>
                </Box>
            </Container >
        </>
    )
}

export default Aboutus;