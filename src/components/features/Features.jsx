import { Container, Box, Grid, Stack, Typography, } from "@mui/material";
import React, { useState } from "react";
import featuresbackground from "../../Assets/featuresbackground.png"
import profile from "../../Assets/profile.png"
import exploregroups from "../../Assets/exploregroups.png"
import swiperightusers from "../../Assets/swiperightusers.png"
import chat from "../../Assets/chat.png"
import gopremium from "../../Assets/gopremium.png"
import likes from "../../Assets/likes.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Chat, Group, RequestQuote, StarHalf, Subscriptions, ThumbUp } from "@mui/icons-material";

function Features() {

    useEffect(() => {
        AOS.init({
        });
    }, []);

    return (
        <>
            <Box id="features" pt={15}>
                <Box sx={{
                    backgroundImage: `linear-gradient(to right, #bdae3e , #FCE220)`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                    height: "auto",
                }}>
                    <Container>
                        <Box p={{ xs: 1, sm: 2, md: 5 }}   >
                            <Grid container spacing={0}  >
                                <Grid xs={12} align="center">
                                    <Box sx={{
                                        width: "150px",
                                        height: "50px",
                                        background: "rgba(255, 255, 255, 0.25)",
                                        boxShadow: "none",
                                        borderRadius: "50px",
                                    }}>
                                        <Typography variant="h2" align="center" pt={2} fontSize="17px" fontWeight={550} color="white">
                                            Features
                                        </Typography>
                                    </Box>

                                    <Typography variant="h2" fontSize="35px" sx={{ pt: 1, pb: 1, width: { xs: "100%", lg: "100%" } }} fontWeight={540} color="white">
                                        Impressive Features
                                    </Typography>

                                </Grid>

                                <Grid xs={12} sm={6} md={3} align="center" sx={{ pt: 2 }}>
                                    <Box sx={{
                                        width: { xs: "100%", md: "100%", lg: "100%" }, boxShadow: "none", backgroundColor: "transparent", border: "transparent", borderRadius: "10px",
                                        ':hover': {
                                            transition: 'transform 0.3s ease',
                                            transform: 'scale(1.1)', border: "1px solid  #FCE220"
                                        },
                                    }} >

                                        <div style={{ display: "flex", justifyContent: "center", alignContent: "center" }} >
                                            <Stack align="center" p={2}>
                                                <div style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
                                                    {/* <img src={profile} alt="..." style={{ width: "8vh" }} /> */}
                                                    <Box sx={{ backgroundColor: "white", p: 1, width: "35px", borderRadius: "10px" }}>
                                                        <Group sx={{ fontSize: "30px", color: "#FCE220" }} />
                                                    </Box>
                                                </div>

                                                <Typography variant="h2" align="center" fontSize="25px" sx={{ fontFamily: "Poppins", pt: 2, pb: 2, width: { xs: "100%", lg: "100%" } }} color="white">
                                                    View User Profile
                                                </Typography>

                                                <Typography variant="paragraph" align="center" lineHeight="30px" sx={{ fontFamily: "Poppins", fontSize: "14px", opacity: 0.8 }} color="white">
                                                    Browse through an intriguing individual's profile to learn more about them, including photos, hobbies, and more.
                                                </Typography>
                                            </Stack>
                                        </div>

                                    </Box>
                                </Grid>

                                <Grid xs={12} sm={6} md={3} align="center" sx={{ pt: 2 }}>
                                    <Box sx={{
                                        width: { xs: "100%", md: "100%", lg: "100%" }, boxShadow: "none", backgroundColor: "transparent", border: "transparent", borderRadius: "10px",
                                        ':hover': {
                                            transition: 'transform 0.3s ease',
                                            transform: 'scale(1.1)', border: "1px solid  #FCE220"
                                        },
                                    }} >

                                        <div style={{ display: "flex", justifyContent: "center", alignContent: "center" }} >
                                            <Stack align="center" p={2}>
                                                <div style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
                                                    {/* <img src={exploregroups} alt="..." style={{ width: "8vh" }} /> */}
                                                    <Box sx={{ backgroundColor: "white", p: 1, width: "35px", borderRadius: "10px" }}>
                                                        <StarHalf sx={{ fontSize: "30px", color: "#FCE220" }} />
                                                    </Box>
                                                </div>

                                                <Typography variant="h2" align="center" fontSize="25px" sx={{ fontFamily: "Poppins", pt: 2, pb: 2, width: { xs: "100%", lg: "100%" } }} color="white">
                                                    Rate Profile
                                                </Typography>

                                                <Typography variant="paragraph" align="center" lineHeight="30px" sx={{ fontFamily: "Poppins", fontSize: "14px", opacity: 0.8 }} color="white">
                                                    Users can rate their experience with service providers based on factors like reliability, friendliness, and overall satisfaction, helping others make informed decisions.
                                                </Typography>
                                            </Stack>
                                        </div>

                                    </Box>
                                </Grid>

                                <Grid xs={12} sm={6} md={3} align="center" sx={{ pt: 2 }}>
                                    <Box sx={{
                                        width: { xs: "100%", md: "100%", lg: "100%" }, boxShadow: "none", backgroundColor: "transparent", border: "transparent", borderRadius: "10px",
                                        ':hover': {
                                            transition: 'transform 0.3s ease',
                                            transform: 'scale(1.1)', border: "1px solid  #FCE220"
                                        },
                                    }} >

                                        <div style={{ display: "flex", justifyContent: "center", alignContent: "center" }} >
                                            <Stack align="center" p={2}>
                                                <div style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
                                                    {/* <img src={swiperightusers} alt="..." style={{ width: "8vh" }} /> */}
                                                    <Box sx={{ backgroundColor: "white", p: 1, width: "35px", borderRadius: "10px" }}>
                                                        <RequestQuote sx={{ fontSize: "30px", color: "#FCE220" }} />
                                                    </Box>
                                                </div>

                                                <Typography variant="h2" align="center" fontSize="25px" sx={{ fontFamily: "Poppins", pt: 2, pb: 2, width: { xs: "100%", lg: "100%" } }} color="white">
                                                    Request To Buddy
                                                </Typography>

                                                <Typography variant="paragraph" align="center" lineHeight="30px" sx={{ fontFamily: "Poppins", fontSize: "14px", opacity: 0.8 }} color="white">
                                                    Users can send requests directly to Buddies for specific services or activities, facilitating personalized interactions and bookings.
                                                </Typography>
                                            </Stack>
                                        </div>

                                    </Box>
                                </Grid>

                                <Grid xs={12} sm={6} md={3} align="center" sx={{ pt: 2 }}>
                                    <Box sx={{
                                        width: { xs: "100%", md: "100%", lg: "100%" }, boxShadow: "none", backgroundColor: "transparent", border: "transparent", borderRadius: "10px",
                                        ':hover': {
                                            transition: 'transform 0.3s ease',
                                            transform: 'scale(1.1)', border: "1px solid  #FCE220"
                                        },
                                    }} >

                                        <div style={{ display: "flex", justifyContent: "center", alignContent: "center" }} >
                                            <Stack align="center" p={2}>
                                                <div style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
                                                    {/* <img src={chat} alt="..." style={{ width: "8vh" }} /> */}
                                                    <Box sx={{ backgroundColor: "white", p: 1, width: "35px", borderRadius: "10px" }}>
                                                        <Chat sx={{ fontSize: "30px", color: "#FCE220" }} />
                                                    </Box>
                                                </div>

                                                <Typography variant="h2" align="center" fontSize="25px" sx={{ fontFamily: "Poppins", pt: 2, pb: 2, width: { xs: "100%", lg: "100%" } }} color="white">
                                                    Chat With Buddy
                                                </Typography>

                                                <Typography variant="paragraph" align="center" lineHeight="30px" sx={{ fontFamily: "Poppins", fontSize: "14px", opacity: 0.8 }} color="white">
                                                    Chat  easily with  your  potential  buddy.  Have  meaningful  conversations  that  might lead to something special.
                                                </Typography>
                                            </Stack>
                                        </div>

                                    </Box>
                                </Grid>

                                <Grid xs={12} sm={6} md={6} align="right" sx={{ pt: 2 }}>
                                    <Box sx={{
                                        width: { xs: "100%", md: "50%", lg: "50%" }, boxShadow: "none", backgroundColor: "transparent", border: "transparent", borderRadius: "10px",
                                        ':hover': {
                                            transition: 'transform 0.3s ease',
                                            transform: 'scale(1.1)', border: "1px solid  #FCE220"
                                        },
                                    }}>

                                        <div style={{ display: "flex", justifyContent: "center", alignContent: "center" }} >
                                            <Stack align="center" p={2}>
                                                <div style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
                                                    {/* <img src={likes} alt="..." style={{ width: "8vh" }} /> */}
                                                    <Box sx={{ backgroundColor: "white", p: 1, width: "35px", borderRadius: "10px" }}>
                                                        <ThumbUp sx={{ fontSize: "30px", color: "#FCE220" }} />
                                                    </Box>
                                                </div>

                                                <Typography variant="h2" align="center" fontSize="25px" sx={{ fontFamily: "Poppins", pt: 2, pb: 2, width: { xs: "100%", lg: "100%" } }} color="white">
                                                    See Who Like's You
                                                </Typography>

                                                <Typography variant="paragraph" align="center" lineHeight="30px" sx={{ fontFamily: "Poppins", fontSize: "14px", opacity: 0.8 }} color="white">
                                                    Learn about your admirers and make a move confidently by identifying those who are truly interested in you.
                                                </Typography>
                                            </Stack>
                                        </div>

                                    </Box>
                                </Grid>

                                <Grid xs={12} sm={6} md={6} align="left" sx={{ pt: 2 }}>
                                    <Box sx={{
                                        width: { xs: "100%", md: "55%", lg: "55%" }, boxShadow: "none", backgroundColor: "transparent", border: "transparent", borderRadius: "10px",
                                        ':hover': {
                                            transition: 'transform 0.3s ease',
                                            transform: 'scale(1.1)', border: "1px solid  #FCE220"
                                        },
                                    }}>

                                        <div style={{ display: "flex", justifyContent: "center", alignContent: "center" }} >
                                            <Stack align="center" p={2}>
                                                <div style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
                                                    {/* <img src={gopremium} alt="..." style={{ width: "8vh" }} /> */}
                                                    <Box sx={{ backgroundColor: "white", p: 1, width: "35px", borderRadius: "10px" }}>
                                                        <Subscriptions sx={{ fontSize: "30px", color: "#FCE220" }} />
                                                    </Box>
                                                </div>

                                                <Typography variant="h2" align="center" fontSize="25px" sx={{ fontFamily: "Poppins", pt: 2, pb: 2, width: { xs: "100%", lg: "100%" } }} color="white">
                                                    Go Premium
                                                </Typography>

                                                <Typography variant="paragraph" align="center" lineHeight="30px" sx={{ fontFamily: "Poppins", fontSize: "14px", opacity: 0.8 }} color="white">
                                                    Upgrade to Loneliness Premium for worldwide connections and Super Likes for a more unique dating experience.
                                                </Typography>
                                            </Stack>
                                        </div>

                                    </Box>
                                </Grid>

                            </Grid>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </>
    )
}

export default Features;