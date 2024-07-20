import React from "react";
import { Box, Stack, Typography, Grid, Container } from "@mui/material";
import logo from "../../Assets/logo.png"
import { Call, Email, LocationOn } from "@mui/icons-material";

function Footer() {
    return (
        <>
            <Box mt={{ xs: 10, sm: 10, md: 0 }}>
                <Box sx={{
                    backgroundColor: `white`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    width: "100%",
                    height: "auto"
                }}>
                    <Container>
                        <Grid container spacing={0} pt={4} pb={4}>
                            <Grid xs={12} sm={8.5} md={8.5}>
                                <img src={logo} alt="..." style={{ width: "18vh" }} />
                                <Box width={{ xs: "100%", lg: "40%" }}>
                                    <Typography variant="paragraph" lineHeight="30px" sx={{ fontSize: "15px", fontFamily: "Poppins", fontWeight: "", pt: 2 }} color="#343434">
                                        Swipe, match, love! Tinder is the modern world of online dating. Let your love story shine today.
                                    </Typography>
                                </Box>
                            </Grid>

                            <Grid xs={12} sm={3.5} md={3.5}>
                                <Stack direction="column" spacing={1}>

                                    <div style={{ display: "flex", gap: "20px" }}>
                                        <div>
                                            {/* <img src={location} alt="..." style={{ marginTop: 5, width: "3vh" }} /> */}
                                            <LocationOn sx={{ color: "#FCE220" }} />
                                        </div>
                                        <div>
                                            <Typography variant="paragraph" lineHeight="30px" sx={{ fontSize: "14px", fontFamily: "Poppins" }} color="#343434">
                                                Lorem ipsum dolor sit amet, consect
                                            </Typography>
                                        </div>
                                    </div>

                                    <div style={{ display: "flex", gap: "20px" }}>
                                        <div>
                                            {/* <img src={phone} alt="..." style={{ marginTop: 5, width: "3vh" }} /> */}
                                            <Call sx={{ color: "#FCE220" }} />
                                        </div>
                                        <div>
                                            <Typography variant="paragraph" lineHeight="30px" sx={{ fontSize: "14px", fontFamily: "Poppins" }} color="#343434">
                                                +1 000 000 0000
                                            </Typography>
                                        </div>
                                    </div>

                                    <div style={{ display: "flex", gap: "20px" }}>
                                        <div>
                                            {/* <img src={email} alt="..." style={{ marginTop: 5, width: "3vh" }} /> */}
                                            <Email sx={{ color: "#FCE220" }} />
                                        </div>
                                        <div>
                                            <Typography variant="paragraph" lineHeight="30px" sx={{ fontSize: "14px", fontFamily: "Poppins" }} color="#343434">
                                                tinderclone@gmail.com
                                            </Typography>
                                        </div>
                                    </div>
                                </Stack>
                            </Grid>

                        </Grid>
                    </Container>
                </Box>

            </Box >
        </>
    )
}

export default Footer;