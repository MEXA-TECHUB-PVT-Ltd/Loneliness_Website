import { Box, Button, Card, CardContent, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import "../../styles/Home.css"
import homedownloadicon from "../../Assets/homedownloadicon.png";
import homemain from "../../Assets/homemain.png";
import homemainleft from "../../Assets/homemainleft.png";
import navbarend from "../../Assets/navbarend.png"
import behindtext from "../../Assets/behindtext.png"
import Aboutus from '../aboutus/Aboutus'
import Testimonials from '../testimonials/Testimonials'
import Contactus from '../contactus/Contactus'
import Footer from '../footer/Footer'
import Showcases from '../showcases/Showcases'
import Features from '../features/Features'
import Howitworks from '../howitworks/Howitworks'
import Pricing from '../pricing/Pricing'
import Download from '../download/Download'

function Home() {

    return (
        <>
            <Box id="home" sx={{
                backgroundImage: `url(${navbarend})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                width: "80%",
                height: "200px",
            }}></Box>

            <Container>
                <Box sx={{ backgroundColor: "" }}>
                    <div className="">
                        <div className="">
                            <Grid container spacing={0} >
                                <Grid xs={12} sm={6} md={3.5} lg={3.5} align="left" mt={{ xs: 0, md: -5 }} sx={{ display: { xs: "none", sm: "block", md: "block" } }} >
                                    <Box >
                                        <img src={homemainleft} alt="..." style={{ width: "90%" }} />
                                    </Box>
                                </Grid>

                                <Grid xs={12} sm={6} md={5} lg={5} align="left" >
                                    <Box pl={{ xs: 0, sm: 0, md: 0, lg: 0 }}>

                                        <Typography variant="h2" lineHeight="5px" sx={{ fontFamily: "Poppins", pt: 1, fontSize: "15px", fontWeight: 450 }} color="#FCE220">
                                            Because you deserve better
                                        </Typography>

                                        <Typography variant="h2" fontSize="25px" sx={{ pt: 2, width: { xs: "100%", lg: "100%" }, display: { xs: "block", sm: "block", md: "none", lg: "none" } }} lineHeight="30px" fontWeight={550} color="white">
                                            From Dates to Dinners: Your Ultimate  <span style={{ fontSize: "30px", fontFamily: "'Pacifico', cursive", color: "#FCE220" }}>Social Booking Experience</span>
                                        </Typography>

                                        {/* lg */}
                                        <Typography variant="h2" fontSize="35px" sx={{ pt: 2, width: { xs: "100%", lg: "100%" }, display: { xs: "none", sm: "none", md: "block", lg: "block" } }} lineHeight="47px" fontWeight={550} color="white">
                                            From Dates to Dinners: Your Ultimate  <span style={{ fontSize: "50px", fontFamily: "'Pacifico', cursive", color: "#FCE220" }}>Social Booking Experience</span>
                                        </Typography>



                                        <Box sx={{ width: { xs: "100%", lg: "95%" }, pt: 2 }}>
                                            <Typography variant="h2" lineHeight="25px" sx={{ fontFamily: "Poppins", fontSize: "15px", fontWeight: 450 }} color="white">
                                                Loneliness helps you discover and book the perfect Buddy for any social activity. Enjoy seamless scheduling and secure payments, making every experience memorable and hassle-free.
                                            </Typography>
                                        </Box>

                                        <Box pt={3} pb={{ xs: 3, md: 0, lg: 0 }}>
                                            <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 2, md: 4 }}>

                                                <a href={window.innerWidth < 620 ? "#downloadr" : "#download"} style={{ textDecoration: "none", color: "#FFFFFF" }}>
                                                    <Button variant="contained" sx={{
                                                        borderRadius: "10px",
                                                        width: "190px",
                                                        height: "45px",
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
                                                    }}>
                                                        <Stack direction="row"  >
                                                            <div>
                                                                <Stack sx={{}}>
                                                                    <img src={homedownloadicon} style={{ width: "3vh" }} />
                                                                </Stack>
                                                            </div>

                                                            <div>
                                                                <Stack sx={{ marginLeft: "2vh", paddingTop: "0vh", fontWeight: "medium" }}>Download App</Stack>
                                                            </div>
                                                        </Stack>
                                                    </Button>
                                                </a>

                                                <a href="" style={{ textDecoration: "none", color: "#FFFFFF" }}>
                                                    <Button variant="contained" sx={{
                                                        borderRadius: "10px",
                                                        width: "140px",
                                                        height: "45px",
                                                        background: 'transparent',
                                                        boxShadow: "none",
                                                        color: "  #FCE220",
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
                                                </a>
                                            </Stack>
                                        </Box>

                                        {/* <Box pt={5} sx={{ display: { xs: "none", sm: "block", md: "block", lg: "block" } }}>
                                            <div style={{ display: "flex", justifyContent: "start", alignContent: "start", gap: "30px" }}>
                                                <div style={{ display: "flex", justifyContent: "center", alignContent: "center", flexDirection: "column" }}>
                                                    <Typography variant="h2" fontSize="30px" sx={{ fontFamily: "Inter", pt: 2, width: { xs: "100%", lg: "100%" } }} lineHeight="47px" fontWeight={560} color="#FCE220">
                                                        99,000+
                                                    </Typography>
                                                    <Typography variant="h2" lineHeight="25px" sx={{ fontFamily: "Inter", fontSize: "13px", fontWeight: 450 }} color="white">
                                                        Join the Dating future
                                                    </Typography>
                                                </div>

                                                <div style={{ display: "flex", justifyContent: "center", alignContent: "center", flexDirection: "column" }}>
                                                    <Typography variant="h2" fontSize="30px" sx={{ fontFamily: "Inter", pt: 2, width: { xs: "100%", lg: "100%" } }} lineHeight="47px" fontWeight={560} color="#FCE220">
                                                        99,000+
                                                    </Typography>
                                                    <Typography variant="h2" lineHeight="25px" sx={{ fontFamily: "Inter", fontSize: "13px", fontWeight: 450 }} color="white">
                                                        Total Buddies
                                                    </Typography>
                                                </div>

                                                <div style={{ display: "flex", justifyContent: "center", alignContent: "center", flexDirection: "column" }}>
                                                    <Typography variant="h2" fontSize="30px" sx={{ fontFamily: "Inter", pt: 2, width: { xs: "100%", lg: "100%" } }} lineHeight="47px" fontWeight={560} color="#FCE220">
                                                        99,000+
                                                    </Typography>
                                                    <Typography variant="h2" lineHeight="25px" sx={{ fontFamily: "Inter", fontSize: "13px", fontWeight: 450 }} color="white">
                                                        Downloads this month
                                                    </Typography>
                                                </div>
                                            </div>
                                        </Box> */}
                                    </Box>
                                </Grid>

                                <Grid xs={12} sm={6} md={3.5} lg={3.5} align="right" mt={{ xs: 0, md: 10 }} sx={{ display: { xs: "none", sm: "block", md: "block" } }} >
                                    <Box >
                                        <img src={homemain} alt="..." style={{ width: "95%" }} />
                                    </Box>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </Box >
            </Container >

            <Aboutus />
            <Features />
            <Howitworks />
            <Showcases />
            <Pricing />
            {/* <Testimonials /> */}
            {/* <Contactus /> */}
            <Download />
            <Footer />
        </>
    )
}

export default Home