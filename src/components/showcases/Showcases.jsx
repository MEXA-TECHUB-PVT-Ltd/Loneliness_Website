import { Container, Box, Grid, Divider, Typography, Stack, CardContent, Card } from "@mui/material";
import React from "react";
import embarknewjourney from "../../Assets/embarknewjourney.png";
import conversation from "../../Assets/conversation.png";
import community from "../../Assets/community.png";
import createaccount from "../../Assets/createaccount.png";

import newjourneymockup from "../../Assets/newjourneymockup.png";
import chatsmockup from "../../Assets/chatsmockup.png";
import exploremockup from "../../Assets/exploremockup.png";
import connectionsmockup from "../../Assets/connectionsmockup.png";
import { useSpring, animated } from 'react-spring';
import ResponsiveShowcase from "./Resposiveshowcases";

function Showcases() {

    const styles = useSpring({
        loop: { reverse: true }, // Loop the animation in reverse when reaching the end
        from: { transform: 'translate(0px, 10px)' },
        to: { transform: 'translate(0px, -10px)' },
        config: { duration: 3000 }, // Duration of each animation cycle (milliseconds)
    });

    const stylescard1 = useSpring({
        loop: { reverse: true },
        from: { transform: 'translate(10px, 10px)' },
        to: { transform: 'translate(-10px, -10px)' },
        config: { duration: 3000 },
    });

    const stylescard2 = useSpring({
        loop: { reverse: true },
        from: { transform: 'translateY(10px)' },
        to: { transform: 'translateY(-10px)' },
        config: { duration: 1500 },
    });

    return (
        <>
            <Container>
                <Box id="showcase" pt={13} sx={{ display: { xs: "none", sm: "block", md: "block", lg: "block" } }}>
                    <Grid container spacing={0}>
                        <Grid xs={12} align="center">
                            <Typography variant="h2" align="center" pt={2} fontSize="35px" fontWeight={550} color="#FCE220">
                                App Showcase
                            </Typography>
                        </Grid>

                        <Grid xs={12} align="center">
                            <Box sx={{ width: "50%" }}>
                                <Typography variant="paragraph" align="center" lineHeight="25px" sx={{ fontFamily: "Poppins", fontSize: "13px" }} color="white">
                                    Are you ready to step into a world of exciting possibilities and meaningful connections? Join the community of individuals who have transformed their social experiences with the Loneliness app!
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container spacing={0} pt={2} >
                        <Grid xs={6} align="left" pt={2}  >
                            <Box pl={8}>
                                <img src={newjourneymockup} alt="..." style={{ width: "60%" }} />
                            </Box>
                        </Grid>

                        <Grid xs={6} align="left">
                            <Box pl={{ sm: 3, md: 10 }} pt={{ sm: 10, md: 25 }}  >
                                <div style={{ display: "flex", justifyContent: "start", alignContent: "start", gap: "10px" }}>
                                    <img src={embarknewjourney} alt="..." style={{ width: "65px", height: "70px" }} />
                                    <Typography variant="h2" align="left" sx={{ fontFamily: "Poppins" }} width={{ xs: "70%", md: "50%" }} pt={0.5} fontSize={{ sm: "18px", md: "20px" }} fontWeight={550} lineHeight="30px" color="white">
                                        Embark on a New Journey of Connections
                                    </Typography>
                                </div>
                                <Typography variant="h2" lineHeight="30px" sx={{ width: { sm: "95%", md: "80%" }, pt: 2, fontSize: "15px", fontWeight: 450 }} color="white">
                                    Are you ready to step into a world of exciting possibilities and meaningful connections? Join the millions of individuals who have transformed their dating experience with the Tinder app!
                                </Typography>
                            </Box>
                        </Grid>

                    </Grid>

                    <Grid container spacing={0} mt={{ sm: 0, md: -6 }}>
                        <Grid xs={6} align="left">
                            <Box pt={{ sm: 10, md: 25 }} pl={{ sm: 3, md: 8 }}>
                                <div style={{ display: "flex", justifyContent: "start", alignContent: "start", gap: "10px" }}>
                                    <img src={conversation} alt="..." style={{ width: "70px", height: "70px" }} />
                                    <Typography variant="h2" align="left" width={{ sm: "70%", md: "50%" }} pt={1.5} fontSize="20px" fontWeight={550} sx={{ fontFamily: "Poppins" }} lineHeight="30px" color="white">
                                        Start A Conversation
                                    </Typography>
                                </div>
                                <Typography variant="h2" lineHeight="30px" sx={{ width: "90%", pt: 2, fontSize: "15px", fontWeight: 450 }} color="white">
                                    Initiating a chat is your chance to showcase your personality, share your interests, and truly get to know the person behind the profile. Sending that first message can lead to some amazing connections.
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid xs={6} align="right" pt={2}>
                            <Box pr={8}>
                                <img src={chatsmockup} alt="..." style={{ width: "60%" }} />
                            </Box>
                        </Grid>

                    </Grid>

                    <Grid container spacing={0} mt={{ sm: 0, md: -6 }}>
                        <Grid xs={6} align="left" pt={2}>
                            <Box pl={8}>
                                <img src={exploremockup} alt="..." style={{ width: "60%" }} />
                            </Box>
                        </Grid>

                        <Grid xs={6} align="left">
                            <Box pl={{ sm: 3, md: 10 }} pt={{ sm: 10, md: 25 }}>
                                <div style={{ display: "flex", justifyContent: "start", alignContent: "start", gap: "10px" }}>
                                    <img src={community} alt="..." style={{ width: "70px", height: "70px" }} />
                                    <Typography variant="h2" width={{ sm: "70%", md: "50%" }} align="left" fontSize={{ sm: "19px", md: "20px" }} fontWeight={550} lineHeight="30px" sx={{ fontFamily: "Poppins" }} color="white">
                                        Profiles Are Doors To Real Connections.
                                    </Typography>
                                </div>
                                <Typography variant="h2" lineHeight="30px" sx={{ width: { sm: "95%", md: "80%" }, pt: 2, fontSize: "15px", fontWeight: 450 }} color="white">
                                    Take a closer look at their photos to see the moments they've chosen to share. Explore their bios to get a glimpse into their passions, humor, and what makes them tick.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>

                </Box>
            </Container >

            <ResponsiveShowcase />
        </>
    )
}

export default Showcases;