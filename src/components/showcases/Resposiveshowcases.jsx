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

function ResponsiveShowcase() {
    return (
        <>
            <Container>
                <Box id="showcase" pt={10} sx={{ display: { xs: "block", sm: "none", md: "none", lg: "none" } }}>
                    <Grid container spacing={0} pb={3}>
                        <Grid xs={12} align="center">
                            <Typography variant="h2" align="center" pt={0} fontSize="35px" fontWeight={550} color="#FCE220" >
                                App Showcase
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid container spacing={0} pt={2} >
                        <Grid xs={12} align="left">
                            <Box pt={5}  >
                                <div style={{ display: "flex", justifyContent: "start", alignContent: "start", gap: "10px" }}>
                                    <img src={embarknewjourney} alt="..." style={{ marginTop: "10px", width: "50px", height: "50px" }} />
                                    <Typography variant="h2" align="left" pt={1} fontSize="20px" fontWeight={550} lineHeight="30px" color="white">
                                        Embark on a New Journey of Connections
                                    </Typography>
                                </div>
                                <Typography variant="h2" lineHeight="30px" sx={{ pt: 2, fontSize: "15px", fontWeight: 450 }} color="white">
                                    Are you ready to step into a world of exciting possibilities and meaningful connections? Join the millions of individuals who have transformed their dating experience with the Tinder app!
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid xs={12} align="left" pt={2}  >
                            <img src={newjourneymockup} alt="..." style={{ width: "100%" }} />
                        </Grid>

                    </Grid>

                    <Grid container spacing={0} pt={0} >
                        <Grid xs={12} align="left">
                            <Box pt={8}>
                                <div style={{ display: "flex", justifyContent: "start", alignContent: "start", gap: "10px" }}>
                                    <img src={conversation} alt="..." style={{ width: "50px", height: "50px" }} />
                                    <Typography variant="h2" align="left" pt={1.5} fontSize="20px" fontWeight={550} lineHeight="30px" color="white">
                                        Start A Conversation
                                    </Typography>
                                </div>
                                <Typography variant="h2" lineHeight="30px" sx={{ pt: 2, fontSize: "15px", fontWeight: 450 }} color="white">
                                    Initiating a chat is your chance to showcase your personality, share your interests, and truly get to know the person behind the profile. Sending that first message can lead to some amazing connections.
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid xs={12} align="right" pt={2}>
                            <img src={chatsmockup} alt="..." style={{ width: "100%" }} />
                        </Grid>

                    </Grid>

                    <Grid container spacing={0} pt={2} >

                        <Grid xs={12} align="left">
                            <Box pt={8}>
                                <div style={{ display: "flex", justifyContent: "start", alignContent: "start", gap: "10px" }}>
                                    <img src={community} alt="..." style={{ marginTop: "15px", width: "50px", height: "50px" }} />
                                    <Typography variant="h2" align="left" pt={1.5} fontSize="20px" fontWeight={550} lineHeight="30px" color="white">
                                        Profiles Are Doors To Real Connections.
                                    </Typography>
                                </div>
                                <Typography variant="h2" lineHeight="30px" sx={{ pt: 2, fontSize: "15px", fontWeight: 450 }} color="white">
                                    Take a closer look at their photos to see the moments they've chosen to share. Explore their bios to get a glimpse into their passions, humor, and what makes them tick.
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid xs={12} align="left" pt={2}>
                            <img src={exploremockup} alt="..." style={{ width: "100%" }} />
                        </Grid>

                    </Grid> 

                </Box>
            </Container >
        </>
    )
}

export default ResponsiveShowcase;