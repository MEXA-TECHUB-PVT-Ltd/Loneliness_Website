import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import downloadbackground from "../../Assets/downloadbackground.png";
import downloadresponsive from "../../Assets/downloadresponsive.png";
import downloadicon from "../../Assets/downloadicon.png";
import appstore from "../../Assets/appstore.png";
import googleplay from "../../Assets/googleplay.png";
import { DownloadDone } from "@mui/icons-material";

function Download() {
    return (
        <>
            <Container>
                <Box id="download" pt={15} sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}>
                    <Box sx={{
                        backgroundImage: `url(${downloadbackground})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        width: "100%",
                        height: "100vh",
                        // borderTopRightRadius: "30px", borderBottomRightRadius: "30px",
                    }}>
                        <Container>
                            <Grid container spacing={0} pt={{ xs: 13, md: 13 }}>
                                <Grid xs={12} md={1.5} align="start" sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}></Grid>
                                <Grid xs={12} md={10.5} align="start">
                                    <Typography variant="h2" lineHeight="45px" fontSize="35px" sx={{ fontFamily: "Poppins", pt: 1, pb: 1, width: { xs: "100%", lg: "60%" } }} fontWeight={550} color="white">
                                        Download Loneliness
                                    </Typography>

                                    <Typography variant="h2" lineHeight="30px" sx={{ width: { xs: "100%", md: "40%" }, fontFamily: "Poppins", fontSize: "15px", fontWeight: 450 }} color="white">
                                        Don't  miss  out  on  this  incredible  opportunity  to  unlock  a  world  of  love  and  meaningful connections! Take charge of your dating life and download Tinder today.
                                    </Typography>

                                    <Box pt={2} pb={3}>
                                        <a href="" style={{ textDecoration: "none", color: "#FFFFFF" }}>
                                            <Button variant="contained" sx={{
                                                borderRadius: "10px",
                                                width: "205px",
                                                height: "45px",
                                                background: 'white',
                                                fontFamily: "Poppins",
                                                boxShadow: "none",
                                                color: "#FCE220",
                                                textTransform: "capitalize",
                                                fontWeight: "medium",
                                                fontSize: "15px",
                                                letterSpacing: "1px",
                                                borderRadius: "50px",
                                                ':hover': {
                                                    boxShadow: "none",
                                                    background: 'white',
                                                    color: "#FCE220",
                                                },
                                            }}>
                                                <Stack direction="row"  >
                                                    <div>
                                                        <Stack sx={{}}>
                                                            {/* <img src={downloadicon} style={{ width: "3vh" }} /> */}
                                                            <DownloadDone />
                                                        </Stack>
                                                    </div>

                                                    <div>
                                                        <Stack sx={{ marginLeft: "2vh", paddingTop: "0vh", fontWeight: "bold" }}>Download App</Stack>
                                                    </div>
                                                </Stack>
                                            </Button>
                                        </a>
                                    </Box>

                                    <Stack direction="row" spacing={3}>
                                        <img src={googleplay} alt="..." style={{ width: "25vh" }} />
                                        <img src={appstore} alt="..." style={{ width: "25vh" }} />
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>
                </Box>

                {/* responsive */}
                <Box id="download" pt={15} sx={{ display: { xs: "block", sm: "block", md: "none", lg: "none" } }}>
                    <Box sx={{
                        backgroundImage: `url(${downloadresponsive})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        width: "100%",
                        height: "auto",
                        borderTopRightRadius: "30px", borderBottomRightRadius: "30px",
                    }}>
                        <Container>
                            <Grid container spacing={0} pt={8} pb={10}>
                                <Grid xs={12} md={1.5} align="start" sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}></Grid>
                                <Grid xs={12} md={10.5} align="start">
                                    <Typography variant="h2" lineHeight="45px" fontSize="35px" sx={{ fontFamily: "Poppins", pt: 1, pb: 1, width: { xs: "100%", lg: "60%" } }} fontWeight={550} color="white">
                                        Download Loneliness
                                    </Typography>

                                    <Typography variant="h2" lineHeight="30px" sx={{ width: { xs: "100%", md: "40%" }, fontFamily: "Poppins", fontSize: "15px", fontWeight: 450 }} color="white">
                                        Don't  miss  out  on  this  incredible  opportunity  to  unlock  a  world  of  love  and  meaningful connections! Take charge of your dating life and download Tinder today.
                                    </Typography>

                                    <Box pt={2} pb={3}>
                                        <a href="" style={{ textDecoration: "none", color: "#FFFFFF" }}>
                                            <Button variant="contained" sx={{
                                                borderRadius: "10px",
                                                width: "205px",
                                                height: "45px",
                                                background: 'white',
                                                boxShadow: "none",
                                                color: "#FCE220",
                                                textTransform: "capitalize",
                                                fontWeight: "medium",
                                                fontSize: "15px",
                                                letterSpacing: "1px",
                                                borderRadius: "50px",
                                                ':hover': {
                                                    boxShadow: "none",
                                                    background: 'white',
                                                    color: "#FCE220",
                                                },
                                            }}>
                                                <Stack direction="row"  >
                                                    <div>
                                                        <Stack sx={{}}>
                                                            <DownloadDone />
                                                            {/* <img src={downloadicon} style={{ width: "3vh" }} /> */}
                                                        </Stack>
                                                    </div>

                                                    <div>
                                                        <Stack sx={{ marginLeft: "2vh", paddingTop: "0vh", fontWeight: "medium" }}>Download App</Stack>
                                                    </div>
                                                </Stack>
                                            </Button>
                                        </a>
                                    </Box>

                                    <Stack align="center" direction="row" spacing={2}>
                                        <img src={googleplay} alt="..." style={{ alignSelf:"center",width: "20vh" }} />
                                        <img src={appstore} alt="..." style={{ alignSelf:"center",width: "20vh" }} />
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>
                </Box>

            </Container>
        </>
    )
}

export default Download;
