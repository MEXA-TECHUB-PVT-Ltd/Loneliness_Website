import { Container, Box, Stack, Divider, Grid, Typography, Accordion, AccordionSummary, AccordionDetails, Card, CardContent, Button } from "@mui/material";
import React, { useEffect } from "react";
import createaccount from "../../Assets/createaccount.png"
import findmatch from "../../Assets/findmatch.png"
import sendmessage from "../../Assets/sendmessage.png"
import arrowright from "../../Assets/arrowright.png"
import arrowleft from "../../Assets/arrowleft.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

function Howitworks() {
    useEffect(() => {
        AOS.init({
            // delay: 500, // Global delay for all elements 
        });
    }, []);
    return (
        <>
            <Box data-aos="zoom-in-up" data-aos-easing="ease-in" data-aos-delay="500" id="howitworks">
                <Container>
                    <Grid container spacing={0} pt={5} >

                        <Grid xs={12} align="center" sx={{ display: { xs: "block", sm: "block", md: "none", lg: "none" } }}>
                            <Box pt={{ xs: 5, md: 10 }} pl={{ xs: 0, md: 7 }} >
                                <Box sx={{
                                    width: "130px",
                                    height: "40px",
                                    background: "rgba(252, 226, 32, 0.13)",
                                    boxShadow: "none",
                                    borderRadius: "50px",
                                }}>
                                    <Typography variant="h2" align="center" pt={1.3} fontSize="17px" fontWeight={550} color="#FCE220">
                                        How It Works
                                    </Typography>
                                </Box>


                                <Typography variant="h2" fontSize="35px" sx={{ pt: 3, pb: 3, width: { xs: "100%", lg: "100%" } }} fontWeight={540} color="white">
                                    How Will Love find<br /> your way?
                                </Typography>

                            </Box>
                        </Grid>

                        <Grid xs={12} md={6} align="left">
                            <Box >
                                <Box sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" }, position: "relative", left: 350, top: 200 }}>
                                    <img src={arrowright} alt="..." style={{ width: "400px" }} />
                                </Box>
                                <Stack direction="column" spacing={25}>
                                    <Card sx={{ width: { xs: "100%", md: "60%" }, borderRadius: "10px", boxShadow: "none", background: 'linear-gradient(to top, rgba(252, 226, 32, 0.6), rgba(252, 226, 32, 0))' }}>
                                        <CardContent>
                                            <div style={{ display: "flex", justifyContent: "center", alignContent: "center" }} >
                                                <Stack align="center" p={0}>
                                                    <div style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
                                                        <img src={createaccount} alt="..." style={{ width: "8vh" }} />
                                                    </div>

                                                    <Typography variant="h2" align="center" fontSize="20px" sx={{ fontFamily: "Poppins", pt: 2, pb: 2, width: { xs: "100%", lg: "100%" } }} fontWeight={500} color="white">
                                                        Create Account
                                                    </Typography>

                                                    <Typography variant="paragraph" align="center" lineHeight="25px" sx={{ fontFamily: "Poppins", fontSize: "13px" }} color="white">
                                                        Start your dating journey by creating a free account on Loneliness and start on an adventure to exciting connections.
                                                    </Typography>
                                                </Stack>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" }, width: { xs: "100%", md: "60%" }, borderRadius: "10px", boxShadow: "none", background: 'linear-gradient(to top, rgba(252, 226, 32, 0.6), rgba(252, 226, 32, 0))' }}>
                                        <CardContent>
                                            <div style={{ display: "flex", justifyContent: "center", alignContent: "center" }} >
                                                <Stack align="center" p={0}>
                                                    <div style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
                                                        <img src={sendmessage} alt="..." style={{ width: "8vh" }} />
                                                    </div>

                                                    <Typography variant="h2" align="center" fontSize="20px" sx={{ fontFamily: "Poppins", pt: 2, pb: 2, width: { xs: "100%", lg: "100%" } }} fontWeight={500} color="white">
                                                        Send Message
                                                    </Typography>

                                                    <Typography variant="paragraph" align="center" lineHeight="25px" sx={{ fontFamily: "Poppins", fontSize: "13px" }} color="white">
                                                        Send  a  message  to  those  you  match  with  and  engage  in  meaningful  conversations, opening the door to fascinating ideas.
                                                    </Typography>
                                                </Stack>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Stack>
                            </Box>
                        </Grid>

                        <Grid xs={12} md={6} align="left" sx={{ pt: 10, display: { xs: "block", sm: "block", md: "none", lg: "none" }, }}>
                            <Box sx={{}}>
                                <Box sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" }, position: "relative", left: 300, top: 130 }}>
                                    <img src={arrowright} alt="..." style={{ width: "65%" }} />
                                </Box>
                                <Stack direction="column" spacing={25}>
                                    <Card sx={{ width: { xs: "100%", md: "60%" }, borderRadius: "10px", boxShadow: "none", background: 'linear-gradient(to top, rgba(252, 226, 32, 0.6), rgba(252, 226, 32, 0))' }}>
                                        <CardContent>
                                            <div style={{ display: "flex", justifyContent: "center", alignContent: "center" }} >
                                                <Stack align="center" p={0}>
                                                    <div style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
                                                        <img src={sendmessage} alt="..." style={{ width: "8vh" }} />
                                                    </div>

                                                    <Typography variant="h2" align="center" fontSize="20px" sx={{ fontFamily: "Poppins", pt: 2, pb: 2, width: { xs: "100%", lg: "100%" } }} fontWeight={500} color="white">
                                                        Send Message
                                                    </Typography>

                                                    <Typography variant="paragraph" align="center" lineHeight="25px" sx={{ fontFamily: "Poppins", fontSize: "13px" }} color="white">
                                                        Send  a  message  to  those  you  match  with  and  engage  in  meaningful  conversations, opening the door to fascinating ideas.
                                                    </Typography>
                                                </Stack>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Stack>
                            </Box>
                        </Grid>

                        <Grid xs={12} md={6} align="left">
                            {/* <div style={{ display: "flex", justifyContent: "center", alignContent: "center" }}> */}
                            <Box pt={{ xs: 5, md: 17 }} ml={25} pl={{ xs: 0, md: 7 }} >
                                <Box sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}>
                                    <Box sx={{
                                        width: "150px",
                                        height: "50px",
                                        background: "rgba(252, 226, 32, 0.13)",
                                        boxShadow: "none",
                                        borderRadius: "50px",
                                    }}>
                                        <Typography variant="h2" align="center" pt={2} fontSize="17px" fontWeight={550} color="#FCE220">
                                            How It Works
                                        </Typography>
                                    </Box>

                                    <Typography variant="h2" fontSize="30px" sx={{ fontFamily: "Poppins", pt: 1, pb: 1, width: { xs: "100%", lg: "100%" } }} fontWeight={540} color="white">
                                        How Will Love find<br /> your way?
                                    </Typography>
                                </Box>

                                <Stack sx={{ pt: 10 }}>
                                    <Card sx={{ width: { xs: "100%", md: "100%" }, borderRadius: "10px", boxShadow: "none", background: 'linear-gradient(to top, rgba(252, 226, 32, 0.6), rgba(252, 226, 32, 0))' }}>
                                        <CardContent>
                                            {/* <div style={{ display: "flex", justifyContent: "center", alignContent: "center" }} > */}
                                            <Stack align="center" p={0}>
                                                <div style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
                                                    <img src={findmatch} alt="..." style={{ width: "8vh" }} />
                                                </div>

                                                <Typography variant="h2" align="center" fontSize="20px" sx={{ fontFamily: "Poppins", pt: 2, pb: 2, width: { xs: "100%", lg: "100%" } }} fontWeight={500} color="white">
                                                    Find Service Provider
                                                </Typography>

                                                <Typography variant="paragraph" align="center" lineHeight="25px" sx={{ fontFamily: "Poppins", fontSize: "13px" }} color="white">
                                                    Explore a diverse range of service providers, express interest in those who intrigue you, and initiate connections to fulfill your needs.
                                                </Typography>
                                            </Stack>
                                            {/* </div> */}
                                        </CardContent>
                                    </Card>
                                </Stack>

                                <Box sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" }, position: "relative", right: 450, bottom: 130 }}>
                                    <img src={arrowleft} alt="..." style={{ width: "400px" }} />
                                </Box>

                                <Box pt={{ xs: 5, md: 0 }} mt={{ xs: 0, md: -8 }}>
                                    <Typography variant="paragraph" align="center" lineHeight="25px" sx={{ fontFamily: "Poppins", fontSize: "13px" }} color="white">
                                        Expand your circle and make connections across the world. All you need to start with are some amazing pictures and an engaging description of yourself.
                                    </Typography><br />
                                    <Button variant="contained" sx={{
                                        borderRadius: "10px",
                                        width: "120px",
                                        height: "40px",
                                        background: 'linear-gradient(to right, #bdae3e , #FCE220)',  // Slightly transparent color on hover
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
                                    }} >Learn More</Button>
                                </Box>
                            </Box>
                            {/* </div> */}
                        </Grid>
                    </Grid>
                </Container>
            </Box >
        </>
    )
}

export default Howitworks