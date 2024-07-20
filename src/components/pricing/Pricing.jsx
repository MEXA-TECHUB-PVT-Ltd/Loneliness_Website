import { Box, Button, Card, CardContent, Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import pricingbackground from "../../Assets/pricingbackground.png";
import vectorcheck from "../../Assets/vectorcheck.png"

function Pricing() {
    return (
        <>
            <Box id="subscription" pt={15}>
                <Box sx={{
                    backgroundImage: `url(${pricingbackground})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                    height: "auto"
                }}>
                    <Container>
                        {/* <div style={{ display: "flex", alignItems: "center", alignContent: "center", height: "100vh" }}> */}
                        <Box p={{ xs: 3, md: 7 }}>
                            <Card sx={{ width: "100%", boxShadow: "none" }}>
                                <CardContent>
                                    <Grid container spacing={0}>
                                        <Grid xs={12} md={4} align="left" p={1}>
                                            <Typography variant="h2" align="center" pt={2} fontSize="20px" fontWeight={550} color="#FCE220">
                                                Premium
                                            </Typography>

                                            <Stack direction="column" pt={2} spacing={1}>
                                                <div style={{ display: "flex", justifyContent: "start", alignContent: "start", gap: "10px" }}>
                                                    <img src={vectorcheck} alt="..." style={{ height: "4vh" }} />
                                                    <Typography variant="h2" lineHeight="30px" sx={{ fontSize: "14px", fontWeight: 450 }} color="#3D3D3DE8">
                                                        Unlock premium features for 01 month.
                                                    </Typography>
                                                </div>

                                                <div style={{ display: "flex", justifyContent: "start", alignContent: "start", gap: "10px" }}>
                                                    <img src={vectorcheck} alt="..." style={{ height: "4vh" }} />
                                                    <Typography variant="h2" lineHeight="30px" sx={{ fontSize: "14px", fontWeight: 450 }} color="#3D3D3DE8">
                                                        Access advanced booking features and discover the perfect matches for your social activities.
                                                    </Typography>
                                                </div>
                                                <div style={{ display: "flex", justifyContent: "start", alignContent: "start", gap: "10px" }}>
                                                    <img src={vectorcheck} alt="..." style={{ height: "4vh" }} />
                                                    <Typography variant="h2" lineHeight="30px" sx={{ fontSize: "14px", fontWeight: 450 }} color="#3D3D3DE8">
                                                        Send unlimited likes to increase your connections.

                                                    </Typography>
                                                </div>
                                                <div style={{ display: "flex", justifyContent: "start", alignContent: "start", gap: "10px" }}>
                                                    <img src={vectorcheck} alt="..." style={{ height: "4vh" }} />
                                                    <Typography variant="h2" lineHeight="30px" sx={{ fontSize: "14px", fontWeight: 450 }} color="#3D3D3DE8">
                                                        Flexible monthly pricing for your convenience.
                                                    </Typography>
                                                </div>
                                                <div style={{ display: "flex", justifyContent: "start", alignContent: "start", gap: "10px" }}>
                                                    <img src={vectorcheck} alt="..." style={{ height: "4vh" }} />
                                                    <Typography variant="h2" lineHeight="30px" sx={{ fontSize: "14px", fontWeight: 450 }} color="#3D3D3DE8">
                                                        Easily upgrade, downgrade, or cancel anytime.
                                                    </Typography>
                                                </div>

                                            </Stack>
                                        </Grid>

                                        <Grid xs={12} md={4} align="left" p={1}>
                                            <Typography variant="h2" align="center" pt={2} fontSize="20px" fontWeight={550} color="#FCE220">
                                                Gold
                                            </Typography>

                                            <Stack direction="column" pt={2} spacing={1}>
                                                <div style={{ display: "flex", justifyContent: "start", alignContent: "start", gap: "10px" }}>
                                                    <img src={vectorcheck} alt="..." style={{ height: "4vh" }} />
                                                    <Typography variant="h2" lineHeight="30px" sx={{ fontSize: "14px", fontWeight: 450 }} color="#3D3D3DE8">
                                                        Unlock premium features for 6 months.
                                                    </Typography>
                                                </div>

                                                <div style={{ display: "flex", justifyContent: "start", alignContent: "start", gap: "10px" }}>
                                                    <img src={vectorcheck} alt="..." style={{ height: "4vh" }} />
                                                    <Typography variant="h2" lineHeight="30px" sx={{ fontSize: "14px", fontWeight: 450 }} color="#3D3D3DE8">
                                                        Access advanced booking features and discover the perfect matches for your social activities.
                                                    </Typography>
                                                </div>
                                                <div style={{ display: "flex", justifyContent: "start", alignContent: "start", gap: "10px" }}>
                                                    <img src={vectorcheck} alt="..." style={{ height: "4vh" }} />
                                                    <Typography variant="h2" lineHeight="30px" sx={{ fontSize: "14px", fontWeight: 450 }} color="#3D3D3DE8">
                                                        Send unlimited likes to increase your connections.

                                                    </Typography>
                                                </div>
                                                <div style={{ display: "flex", justifyContent: "start", alignContent: "start", gap: "10px" }}>
                                                    <img src={vectorcheck} alt="..." style={{ height: "4vh" }} />
                                                    <Typography variant="h2" lineHeight="30px" sx={{ fontSize: "14px", fontWeight: 450 }} color="#3D3D3DE8">
                                                        Flexible monthly pricing for your convenience.
                                                    </Typography>
                                                </div>
                                                <div style={{ display: "flex", justifyContent: "start", alignContent: "start", gap: "10px" }}>
                                                    <img src={vectorcheck} alt="..." style={{ height: "4vh" }} />
                                                    <Typography variant="h2" lineHeight="30px" sx={{ fontSize: "14px", fontWeight: 450 }} color="#3D3D3DE8">
                                                        Easily upgrade, downgrade, or cancel anytime.
                                                    </Typography>
                                                </div>

                                            </Stack>
                                        </Grid>

                                        <Grid xs={12} md={4} align="left" p={1}>
                                            <Typography variant="h2" align="center" pt={2} fontSize="20px" fontWeight={550} color="#FCE220">
                                                Yearly
                                            </Typography>

                                            <Stack direction="column" pt={2} spacing={1}>
                                                <div style={{ display: "flex", justifyContent: "start", alignContent: "start", gap: "10px" }}>
                                                    <img src={vectorcheck} alt="..." style={{ height: "4vh" }} />
                                                    <Typography variant="h2" lineHeight="30px" sx={{ fontSize: "14px", fontWeight: 450 }} color="#3D3D3DE8">
                                                        Unlock premium features for 12 months.
                                                    </Typography>
                                                </div>

                                                <div style={{ display: "flex", justifyContent: "start", alignContent: "start", gap: "10px" }}>
                                                    <img src={vectorcheck} alt="..." style={{ height: "4vh" }} />
                                                    <Typography variant="h2" lineHeight="30px" sx={{ fontSize: "14px", fontWeight: 450 }} color="#3D3D3DE8">
                                                        Access advanced booking features and discover the perfect matches for your social activities.
                                                    </Typography>
                                                </div>
                                                <div style={{ display: "flex", justifyContent: "start", alignContent: "start", gap: "10px" }}>
                                                    <img src={vectorcheck} alt="..." style={{ height: "4vh" }} />
                                                    <Typography variant="h2" lineHeight="30px" sx={{ fontSize: "14px", fontWeight: 450 }} color="#3D3D3DE8">
                                                        Send unlimited likes to increase your connections.

                                                    </Typography>
                                                </div>
                                                <div style={{ display: "flex", justifyContent: "start", alignContent: "start", gap: "10px" }}>
                                                    <img src={vectorcheck} alt="..." style={{ height: "4vh" }} />
                                                    <Typography variant="h2" lineHeight="30px" sx={{ fontSize: "14px", fontWeight: 450 }} color="#3D3D3DE8">
                                                        Flexible monthly pricing for your convenience.
                                                    </Typography>
                                                </div>
                                                <div style={{ display: "flex", justifyContent: "start", alignContent: "start", gap: "10px" }}>
                                                    <img src={vectorcheck} alt="..." style={{ height: "4vh" }} />
                                                    <Typography variant="h2" lineHeight="30px" sx={{ fontSize: "14px", fontWeight: 450 }} color="#3D3D3DE8">
                                                        Easily upgrade, downgrade, or cancel anytime.
                                                    </Typography>
                                                </div>

                                            </Stack>

                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Box>
                        {/* </div> */}
                    </Container>
                </Box>
            </Box>
        </>
    )
}

export default Pricing;