import { Container, Box, Grid, Divider, Typography, Stack, Button } from "@mui/material";
import React from "react";
import { Form, Input } from 'antd';
import "../../styles/Contactus.css"
import contactus from "../../Assets/contactus.png";

const { TextArea } = Input;

function Contactus() {
    return (
        <>

            <Container>
                <Box id="contactus" classNmae="contactus" pt={20}>
                    <Grid container spacing={0}  >
                        <Grid xs={12} sm={6} md={6} align="left">

                            <Box pt={10}>

                                <Box>

                                    <Box sx={{
                                        width: "130px",
                                        height: "40px",
                                        background: "rgba(252, 226, 32, 0.13)",
                                        boxShadow: "none",
                                        borderRadius: "50px",
                                    }}>
                                        <Typography variant="h2" align="center" pt={1.3} fontSize="17px" fontWeight={550} color="#FCE220">
                                            Contact Us
                                        </Typography>
                                    </Box>

                                    <Typography variant="h2" lineHeight="45px" fontSize="35px" sx={{ fontFamily: "Poppins", pt: 1, pb: 1, }} fontWeight={550} color="white">
                                        Would Love To Hear <br /> From You, Get In Touch
                                    </Typography>

                                    <Typography variant="paragraph" lineHeight="35px" sx={{ fontWeight: 450, opacity: 0.8 }} color="white">
                                        Feel free to get in touch with us at any time. Contact us if you have any questions, need any  help,  or  just  want  to  share  your  thoughts.  Your  feedback  will  improve  Loneliness  for everyone.
                                    </Typography>
                                </Box>

                            </Box>
                        </Grid>

                        <Grid xs={12} sm={6} md={6} align="right">
                            <Box sx={{
                                backgroundImage: `url(${contactus})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: { xs: "cover", md: "contain" },
                                width: { xs: "100%", md: "70%", lg: "90%" },
                                height: "auto",
                            }}>

                                <Stack align="left" p={4}>
                                    <Box className="form" pt={2}>

                                        <div style={{ marginBottom: "40px" }}>
                                            <Typography variant="h2" lineHeight="30px" sx={{ fontSize: "15px", pb: 1, letterSpacing: "1px", fontWeight: "bold" }} color="#2A2A2A">
                                                Username
                                            </Typography>
                                            <Form.Item >
                                                <Input className='inputfield' style={{ width: "100%", color: "#393939", backgroundColor: "#FAFAFA", border: "1px solid transparent", padding: 8, borderRadius: "50px" }}
                                                    name="name"
                                                />
                                            </Form.Item>
                                        </div>

                                        <div style={{ marginBottom: "40px" }}>
                                            <Typography variant="h2" lineHeight="30px" sx={{ fontSize: "15px", pb: 1, letterSpacing: "1px", fontWeight: "bold" }} color="#2A2A2A">
                                                Email Address
                                            </Typography>
                                            <Form.Item >
                                                <Input className='inputfield' style={{ width: "100%", color: "#393939", backgroundColor: "#FAFAFA", border: "1px solid transparent", padding: 8, borderRadius: "50px" }}
                                                    name="email"
                                                />
                                            </Form.Item>
                                        </div>

                                        <div style={{ marginBottom: "40px" }}>
                                            <Typography variant="h2" lineHeight="30px" sx={{ fontSize: "15px", pb: 1, letterSpacing: "1px", fontWeight: "bold" }} color="#2A2A2A">
                                                Message
                                            </Typography>
                                            <Form.Item >
                                                <TextArea className='inputfield' rows={4} style={{ color: "#393939", backgroundColor: "#FAFAFA", border: "1px solid transparent", padding: 15, borderRadius: "10px" }}
                                                    name="message"
                                                />
                                            </Form.Item>
                                        </div>

                                        <Stack align="center">
                                            <Form.Item >
                                                <Button variant="contained" sx={{
                                                    borderRadius: "10px",
                                                    width: "100%",
                                                    // height: "50px",
                                                    background: 'linear-gradient(to right, #bdae3e , #FCE220)',
                                                    boxShadow: "none",
                                                    color: "white",
                                                    textTransform: "capitalize",
                                                    fontWeight: "medium",
                                                    fontSize: "15px",
                                                    letterSpacing: "1px",
                                                    borderRadius: "50px",
                                                    ':hover': {
                                                        boxShadow: "none",
                                                        background: 'linear-gradient(to bottom,  #FCE220, #bdae3e)',
                                                        color: "white",
                                                    },
                                                }} >Send Message</Button>
                                            </Form.Item>
                                        </Stack>

                                    </Box>
                                </Stack>


                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>

        </>
    )
}

export default Contactus;