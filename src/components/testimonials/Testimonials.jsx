import { Avatar, Box, Card, CardContent, Container, Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import testimonialstart from "../../Assets/testimonialstart.png";
import testimonial1 from "../../Assets/testimonial1.png";
import testimonial2 from "../../Assets/testimonial2.png";
import testimonial3 from "../../Assets/testimonial3.png";
import "../../styles/Challenges.css"

function Testimonials() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <Box id="testimonials" sx={{
                backgroundImage: `url(${testimonialstart})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                // width: "80%",
                height: "150px",
            }}></Box>

            <Container>
                <Box  >
                    <Grid container spacing={0}  >
                        <Grid xs={12} align="center">
                            <Box sx={{
                                width: "150px",
                                height: "50px",
                                background: "rgba(252, 226, 32, 0.13)",
                                boxShadow: "none",
                                borderRadius: "50px",
                            }}>
                                <Typography variant="h2" align="center" pt={2} fontSize="17px" fontWeight={550} color="#FCE220">
                                    Testimonials
                                </Typography>
                            </Box>

                            <Typography variant="h2" fontSize="35px" sx={{ pt: 3, pb: 3, width: { xs: "100%", lg: "100%" } }} fontWeight={540} color="white">
                                What Our Users Say
                            </Typography>
                        </Grid>

                        <Grid xs={12} align="center">
                            <Slider autoplay {...settings}>
                                <div>
                                    <Card sx={{ width: "90%", backgroundColor: "white", boxShadow: "rgba(99, 99, 99, 0.14)" }}>
                                        <CardContent>
                                            <Stack align="left" pt={1} direction="column" spacing={1}>
                                                <div style={{ display: "flex", justifyContent: "start", alignContent: "start", gap: "15px" }} >
                                                    <Avatar variant="square" src={testimonial1} sx={{ width: 50, height: 50 }} />
                                                    <Typography variant="h2" lineHeight="30px" sx={{ fontSize: "20px", pt: 1, fontWeight: "bold" }} color="#222222">
                                                        Racheal Smith
                                                    </Typography>
                                                </div>

                                                <Typography variant="paragraph" align="left" lineHeight="30px" sx={{ fontWeight: 450, opacity: 0.8 }} color="black">
                                                    “Tinder is a gamechanger. Met my partner just with a swipe and since has been an
                                                    exciting and wonderful ride.”
                                                </Typography>

                                            </Stack>
                                        </CardContent>
                                    </Card>
                                </div>

                                <div>
                                    <Card sx={{ width: "90%", backgroundColor: "white", boxShadow: "rgba(99, 99, 99, 0.14)" }}>
                                        <CardContent>
                                            <Stack align="left" pt={1} direction="column" spacing={1}>
                                                <div style={{ display: "flex", justifyContent: "start", alignContent: "start", gap: "15px" }} >
                                                    <Avatar variant="square" src={testimonial2} sx={{ width: 50, height: 50 }} />
                                                    <Typography variant="h2" lineHeight="30px" sx={{ fontSize: "20px", pt: 1, fontWeight: "bold" }} color="#222222">
                                                        Walter Howell
                                                    </Typography>
                                                </div>

                                                <Typography variant="paragraph" align="left" lineHeight="30px" sx={{ fontWeight: 450, opacity: 0.8 }} color="black">
                                                    "It's like having a modern-day love potion at your fingertips. I swiped right, found love,
                                                    and I'm head over heels!"
                                                </Typography>

                                            </Stack>
                                        </CardContent>
                                    </Card>
                                </div>

                                <div>
                                    <Card sx={{ width: "90%", backgroundColor: "white", boxShadow: "rgba(99, 99, 99, 0.14)" }}>
                                        <CardContent>
                                            <Stack align="left" pt={1} direction="column" spacing={1}>
                                                <div style={{ display: "flex", justifyContent: "start", alignContent: "start", gap: "15px" }} >
                                                    <Avatar variant="square" src={testimonial3} sx={{ width: 50, height: 50 }} />
                                                    <Typography variant="h2" lineHeight="30px" sx={{ fontSize: "20px", pt: 1, fontWeight: "bold" }} color="#222222">
                                                        Amanda Gray
                                                    </Typography>
                                                </div>

                                                <Typography variant="paragraph" align="left" lineHeight="30px" sx={{ fontWeight: 450, opacity: 0.8 }} color="black">
                                                    "I've been using it for a while now and it's led to some really exciting dates. It's easily
                                                    one of the top dating apps today!"
                                                </Typography>

                                            </Stack>
                                        </CardContent>
                                    </Card>
                                </div>

                                <div>
                                    <Card sx={{ width: "90%", backgroundColor: "white", boxShadow: "rgba(99, 99, 99, 0.14)" }}>
                                        <CardContent>
                                            <Stack align="left" pt={1} direction="column" spacing={1}>
                                                <div style={{ display: "flex", justifyContent: "start", alignContent: "start", gap: "15px" }} >
                                                    <Avatar variant="square" src={testimonial1} sx={{ width: 50, height: 50 }} />
                                                    <Typography variant="h2" lineHeight="30px" sx={{ fontSize: "20px", pt: 1, fontWeight: "bold" }} color="#222222">
                                                        Jennifer Long
                                                    </Typography>
                                                </div>

                                                <Typography variant="paragraph" align="left" lineHeight="30px" sx={{ fontWeight: 450, opacity: 0.8 }} color="black">
                                                    “Tinder makes dating feel natural. I have met amazing people in the past now and found
                                                    my forever person. Loved it!”
                                                </Typography>

                                            </Stack>
                                        </CardContent>
                                    </Card>
                                </div>

                                <div>
                                    <Card sx={{ width: "90%", backgroundColor: "white", boxShadow: "rgba(99, 99, 99, 0.14)" }}>
                                        <CardContent>
                                            <Stack align="left" pt={1} direction="column" spacing={1}>
                                                <div style={{ display: "flex", justifyContent: "start", alignContent: "start", gap: "15px" }} >
                                                    <Avatar variant="square" src={testimonial2} sx={{ width: 50, height: 50 }} />
                                                    <Typography variant="h2" lineHeight="30px" sx={{ fontSize: "20px", pt: 1, fontWeight: "bold" }} color="#222222">
                                                        Rowin James
                                                    </Typography>
                                                </div>

                                                <Typography variant="paragraph" align="left" lineHeight="30px" sx={{ fontWeight: 450, opacity: 0.8 }} color="black">
                                                    “I've been using this app for quite some time now. I travel a lot and t's great way to meet
                                                    new people as well, which is fun!”
                                                </Typography>

                                            </Stack>
                                        </CardContent>
                                    </Card>
                                </div>

                            </Slider>
                        </Grid>
                    </Grid>
                </Box>
            </Container >
        </>
    )
}

export default Testimonials;