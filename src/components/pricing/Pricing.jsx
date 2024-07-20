import { Box, Button, Card, CardContent, Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import pricingbackground from "../../Assets/pricingbackground.png";
import vectorcheck from "../../Assets/vectorcheck.png"

function Pricing() {
    return (
        <>
            <Box id="pricing" pt={15}>
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
                                        <Grid xs={12} md={4} align="center">
                                            <Typography variant="h2" align="center" pt={2} fontSize="20px" fontWeight={550} color="#FCE220">
                                                Premium <br /> 30$ / <span style={{ color: "#464646", fontSize: "15px" }}> Month</span>
                                            </Typography>

                                            <Stack direction="column" pt={2} spacing={1}>
                                                <div style={{ display: "flex", justifyContent: "center", alignContent: "center", gap: "10px" }}>
                                                    <img src={vectorcheck} alt="..." style={{ height: "4vh" }} />
                                                    <Typography variant="h2" lineHeight="30px" sx={{ fontSize: "14px", fontWeight: 450 }} color="#3D3D3DE8">
                                                        Lorem ipsum dolor sit amet
                                                    </Typography>
                                                </div>

                                                <div style={{ display: "flex", justifyContent: "center", alignContent: "center", gap: "10px" }}>
                                                    <img src={vectorcheck} alt="..." style={{ height: "4vh" }} />
                                                    <Typography variant="h2" lineHeight="30px" sx={{ fontSize: "14px", fontWeight: 450 }} color="#3D3D3DE8">
                                                        Lorem ipsum dolor sit amet
                                                    </Typography>
                                                </div>
                                                <div style={{ display: "flex", justifyContent: "center", alignContent: "center", gap: "10px" }}>
                                                    <img src={vectorcheck} alt="..." style={{ height: "4vh" }} />
                                                    <Typography variant="h2" lineHeight="30px" sx={{ fontSize: "14px", fontWeight: 450 }} color="#3D3D3DE8">
                                                        Lorem ipsum dolor sit amet
                                                    </Typography>
                                                </div>
                                                <div style={{ display: "flex", justifyContent: "center", alignContent: "center", gap: "10px" }}>
                                                    <img src={vectorcheck} alt="..." style={{ height: "4vh" }} />
                                                    <Typography variant="h2" lineHeight="30px" sx={{ fontSize: "14px", fontWeight: 450 }} color="#3D3D3DE8">
                                                        Lorem ipsum dolor sit amet
                                                    </Typography>
                                                </div>
                                                <div style={{ display: "flex", justifyContent: "center", alignContent: "center", gap: "10px" }}>
                                                    <img src={vectorcheck} alt="..." style={{ height: "4vh" }} />
                                                    <Typography variant="h2" lineHeight="30px" sx={{ fontSize: "14px", fontWeight: 450 }} color="#3D3D3DE8">
                                                        Lorem ipsum dolor sit amet
                                                    </Typography>
                                                </div>
                                                <div style={{ display: "flex", justifyContent: "center", alignContent: "center", gap: "10px" }}>
                                                    <img src={vectorcheck} alt="..." style={{ height: "4vh" }} />
                                                    <Typography variant="h2" lineHeight="30px" sx={{ fontSize: "14px", fontWeight: 450 }} color="#3D3D3DE8">
                                                        Lorem ipsum dolor sit amet
                                                    </Typography>
                                                </div>
                                                <div style={{ display: "flex", justifyContent: "center", alignContent: "center", gap: "10px" }}>
                                                    <img src={vectorcheck} alt="..." style={{ height: "4vh" }} />
                                                    <Typography variant="h2" lineHeight="30px" sx={{ fontSize: "14px", fontWeight: 450 }} color="#3D3D3DE8">
                                                        Lorem ipsum dolor sit amet
                                                    </Typography>
                                                </div>

                                                <Box sx={{ pt: 4 }}>
                                                    <Button variant="outlined" sx={{
                                                        borderRadius: "10px",
                                                        width: "130px",
                                                        height: "40px",
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
                                                            border: "1px solid #FCE220",
                                                        },
                                                    }} >Buy Now</Button>
                                                </Box>

                                            </Stack>
                                        </Grid>

                                        <Grid xs={12} md={4} align="center">
                                            <Typography variant="h2" align="center" pt={2} fontSize="20px" fontWeight={550} color="#FCE220">
                                                Gold <br /> 45$ / <span style={{ color: "#464646", fontSize: "15px" }}> Month</span>
                                            </Typography>

                                            <Stack direction="column" pt={2} spacing={1}>
                                                <div style={{ display: "flex", justifyContent: "center", alignContent: "center", gap: "10px" }}>
                                                    <img src={vectorcheck} alt="..." style={{ height: "4vh" }} />
                                                    <Typography variant="h2" lineHeight="30px" sx={{ fontSize: "14px", fontWeight: 450 }} color="#3D3D3DE8">
                                                        Lorem ipsum dolor sit amet
                                                    </Typography>
                                                </div>

                                                <div style={{ display: "flex", justifyContent: "center", alignContent: "center", gap: "10px" }}>
                                                    <img src={vectorcheck} alt="..." style={{ height: "4vh" }} />
                                                    <Typography variant="h2" lineHeight="30px" sx={{ fontSize: "14px", fontWeight: 450 }} color="#3D3D3DE8">
                                                        Lorem ipsum dolor sit amet
                                                    </Typography>
                                                </div>
                                                <div style={{ display: "flex", justifyContent: "center", alignContent: "center", gap: "10px" }}>
                                                    <img src={vectorcheck} alt="..." style={{ height: "4vh" }} />
                                                    <Typography variant="h2" lineHeight="30px" sx={{ fontSize: "14px", fontWeight: 450 }} color="#3D3D3DE8">
                                                        Lorem ipsum dolor sit amet
                                                    </Typography>
                                                </div>
                                                <div style={{ display: "flex", justifyContent: "center", alignContent: "center", gap: "10px" }}>
                                                    <img src={vectorcheck} alt="..." style={{ height: "4vh" }} />
                                                    <Typography variant="h2" lineHeight="30px" sx={{ fontSize: "14px", fontWeight: 450 }} color="#3D3D3DE8">
                                                        Lorem ipsum dolor sit amet
                                                    </Typography>
                                                </div>
                                                <div style={{ display: "flex", justifyContent: "center", alignContent: "center", gap: "10px" }}>
                                                    <img src={vectorcheck} alt="..." style={{ height: "4vh" }} />
                                                    <Typography variant="h2" lineHeight="30px" sx={{ fontSize: "14px", fontWeight: 450 }} color="#3D3D3DE8">
                                                        Lorem ipsum dolor sit amet
                                                    </Typography>
                                                </div>
                                                <div style={{ display: "flex", justifyContent: "center", alignContent: "center", gap: "10px" }}>
                                                    <img src={vectorcheck} alt="..." style={{ height: "4vh" }} />
                                                    <Typography variant="h2" lineHeight="30px" sx={{ fontSize: "14px", fontWeight: 450 }} color="#3D3D3DE8">
                                                        Lorem ipsum dolor sit amet
                                                    </Typography>
                                                </div>
                                                <div style={{ display: "flex", justifyContent: "center", alignContent: "center", gap: "10px" }}>
                                                    <img src={vectorcheck} alt="..." style={{ height: "4vh" }} />
                                                    <Typography variant="h2" lineHeight="30px" sx={{ fontSize: "14px", fontWeight: 450 }} color="#3D3D3DE8">
                                                        Lorem ipsum dolor sit amet
                                                    </Typography>
                                                </div>

                                                <Box sx={{ pt: 4 }}>
                                                    <Button variant="outlined" sx={{
                                                        borderRadius: "10px",
                                                        width: "130px",
                                                        height: "40px",
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
                                                            border: "1px solid #FCE220",
                                                        },
                                                    }} >Buy Now</Button>
                                                </Box>

                                            </Stack>
                                        </Grid>

                                        <Grid xs={12} md={4} align="center">
                                            <Typography variant="h2" align="center" pt={2} fontSize="20px" fontWeight={550} color="#FCE220">
                                                Plus <br /> 60$ / <span style={{ color: "#464646", fontSize: "15px" }}> Month</span>
                                            </Typography>

                                            <Stack direction="column" pt={2} spacing={1}>
                                                <div style={{ display: "flex", justifyContent: "center", alignContent: "center", gap: "10px" }}>
                                                    <img src={vectorcheck} alt="..." style={{ height: "4vh" }} />
                                                    <Typography variant="h2" lineHeight="30px" sx={{ fontSize: "14px", fontWeight: 450 }} color="#3D3D3DE8">
                                                        Lorem ipsum dolor sit amet
                                                    </Typography>
                                                </div>

                                                <div style={{ display: "flex", justifyContent: "center", alignContent: "center", gap: "10px" }}>
                                                    <img src={vectorcheck} alt="..." style={{ height: "4vh" }} />
                                                    <Typography variant="h2" lineHeight="30px" sx={{ fontSize: "14px", fontWeight: 450 }} color="#3D3D3DE8">
                                                        Lorem ipsum dolor sit amet
                                                    </Typography>
                                                </div>
                                                <div style={{ display: "flex", justifyContent: "center", alignContent: "center", gap: "10px" }}>
                                                    <img src={vectorcheck} alt="..." style={{ height: "4vh" }} />
                                                    <Typography variant="h2" lineHeight="30px" sx={{ fontSize: "14px", fontWeight: 450 }} color="#3D3D3DE8">
                                                        Lorem ipsum dolor sit amet
                                                    </Typography>
                                                </div>
                                                <div style={{ display: "flex", justifyContent: "center", alignContent: "center", gap: "10px" }}>
                                                    <img src={vectorcheck} alt="..." style={{ height: "4vh" }} />
                                                    <Typography variant="h2" lineHeight="30px" sx={{ fontSize: "14px", fontWeight: 450 }} color="#3D3D3DE8">
                                                        Lorem ipsum dolor sit amet
                                                    </Typography>
                                                </div>
                                                <div style={{ display: "flex", justifyContent: "center", alignContent: "center", gap: "10px" }}>
                                                    <img src={vectorcheck} alt="..." style={{ height: "4vh" }} />
                                                    <Typography variant="h2" lineHeight="30px" sx={{ fontSize: "14px", fontWeight: 450 }} color="#3D3D3DE8">
                                                        Lorem ipsum dolor sit amet
                                                    </Typography>
                                                </div>
                                                <div style={{ display: "flex", justifyContent: "center", alignContent: "center", gap: "10px" }}>
                                                    <img src={vectorcheck} alt="..." style={{ height: "4vh" }} />
                                                    <Typography variant="h2" lineHeight="30px" sx={{ fontSize: "14px", fontWeight: 450 }} color="#3D3D3DE8">
                                                        Lorem ipsum dolor sit amet
                                                    </Typography>
                                                </div>
                                                <div style={{ display: "flex", justifyContent: "center", alignContent: "center", gap: "10px" }}>
                                                    <img src={vectorcheck} alt="..." style={{ height: "4vh" }} />
                                                    <Typography variant="h2" lineHeight="30px" sx={{ fontSize: "14px", fontWeight: 450 }} color="#3D3D3DE8">
                                                        Lorem ipsum dolor sit amet
                                                    </Typography>
                                                </div>

                                                <Box sx={{ pt: 4 }}>
                                                    <Button variant="outlined" sx={{
                                                        borderRadius: "10px",
                                                        width: "130px",
                                                        height: "40px",
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
                                                            border: "1px solid #FCE220",
                                                        },
                                                    }} >Buy Now</Button>
                                                </Box>

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