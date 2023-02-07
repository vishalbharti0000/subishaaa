import React from "react";
import Box from "../../components/atoms/Box/Box";
import Card from "../../components/atoms/Card/Card";
import Grid from "../../components/atoms/Grid/Grid";
import Typography from "../../components/atoms/Typography/Typography";
import CustomizedCarousel from "../../components/organisms/CustomizedCarousel/CustomizedCarousel";
import { Background } from "./LandingTemplate.styles";
import CardContent from "../../components/atoms/CardContent/CardContent";
import CardMedia from "../../components/atoms/CardMedia/CardMedia";
import Button from "../../components/atoms/Button/Button";
import ContactPageIcon from '@mui/icons-material/ContactPage';
import InventoryIcon from '@mui/icons-material/Inventory';
import Stack from '@mui/material/Stack';
import BusinessIcon from '@mui/icons-material/Business';
import { useNavigate } from "react-router-dom";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

const LandingTemplate = () => {
    const navigate = useNavigate();
    return (
        <>
            <Grid container >
                <Grid item xs={12} >
                    <Box sx={{ display: { xs: "none", md: "block" } }}>
                        <CustomizedCarousel mobile={false} />
                    </Box>
                    <Box sx={{ display: { xs: "block", md: "none" } }} >
                        <CustomizedCarousel mobile={true} />
                    </Box>
                </Grid>

                <Background>
                    <Box sx={{ display: { xs: "none", md: "block" } }} ml={2} >
                        <Card sx={{ display: 'flex' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h5">
                                        Book an Appointment
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        Need help choosing an engagement ring or wedding band? Work with a jewelry consultant to find the perfect one.
                                    </Typography>
                                    <Stack direction="row" spacing={2}>
                                        <Button onClick={() => navigate("/contact-form")} variant="outlined" startIcon={<ContactPageIcon style={{ color: "#41b6c2" }} />}>
                                            Contact us
                                        </Button>
                                        <Button onClick={() => navigate("/products/all")} variant="outlined" startIcon={<InventoryIcon style={{ color: "#41b6c2" }} />}>
                                            View All Products
                                        </Button>
                                    </Stack>
                                </CardContent>
                                <CardContent>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" textAlign={"center"} gutterBottom>
                                        <BusinessIcon style={{ color: "#41b6c2" }} fontSize="large" />
                                    </Typography>
                                    <Typography variant="h5" textAlign={"center"} component="div">
                                        Dhanbad, Jharkhand
                                    </Typography>
                                    <Typography textAlign={"center"} alignItems={"center"} color="text.secondary" >
                                        <Button onClick={() => window.open("https://wa.me/message/NCNR7XLD4MKAG1")} startIcon={<WhatsAppIcon style={{ color: "#41b6c2" }} />}> +91 86760 90911 </Button>
                                    </Typography>
                                    <Typography textAlign={"center"} alignItems={"center"} color="text.secondary" >
                                        <Button onClick={() => window.open("https://instagram.com/subishaaa_thefinesilver?igshid=Yzg5MTU1MDY=")} startIcon={<InstagramIcon style={{ color: "#E4405F" }} />}> subishaaa_thefinesilver </Button>
                                    </Typography>
                                </CardContent>
                            </Box>
                            <CardMedia
                                component="img"
                                sx={{ width: 450 }}
                                image="pack.webp"
                                alt="Live from space album cover"
                            />
                        </Card>
                    </Box>
                    <Box sx={{ display: { xs: "block", md: "none" } }}>
                        <Card sx={{ maxWidth: 345 }} >
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="100"
                                image="pack.webp"
                            />
                            <CardContent>
                                <Typography component="div" variant="h5">
                                    Book an Appointment
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    Need help choosing an engagement ring or wedding band? Work with a jewelry consultant to find the perfect one.
                                </Typography>
                            </CardContent>
                            <Stack justifyContent={"center"} alignItems={"center"} direction="row" spacing={2} my={1}>
                                <Button style={{ minWidth: '200px' }} onClick={() => navigate("/contact-form")} variant="outlined" startIcon={<ContactPageIcon style={{ color: "#41b6c2" }} />}>
                                    Contact Subishaaa
                                </Button>
                            </Stack>
                            <Stack justifyContent={"center"} alignItems={"center"} direction="row" spacing={2} my={1}>
                                <Button style={{ minWidth: '200px' }} onClick={() => navigate("/products/all")} variant="outlined" startIcon={<InventoryIcon style={{ color: "#41b6c2" }} />}>
                                    View Products
                                </Button>
                            </Stack>
                        </Card>

                        <Card sx={{ minWidth: 275, mt: 1 }} >
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" textAlign={"center"} gutterBottom>
                                    <BusinessIcon style={{ color: "#41b6c2" }} fontSize="large" />
                                </Typography>
                                <Typography variant="h5" textAlign={"center"} component="div">
                                    Dhanbad, Jharkhand
                                </Typography>
                                <Typography textAlign={"center"} alignItems={"center"} color="text.secondary" >
                                    <Button onClick={() => window.open("https://wa.me/message/NCNR7XLD4MKAG1")} startIcon={<WhatsAppIcon style={{ color: "#41b6c2" }} />}> +91 86760 90911 </Button>
                                </Typography>
                                <Typography textAlign={"center"} alignItems={"center"} color="text.secondary" >
                                    <Button onClick={() => window.open("https://instagram.com/subishaaa_thefinesilver?igshid=Yzg5MTU1MDY=")} startIcon={<InstagramIcon style={{ color: "#E4405F" }} />}> subishaaa_thefinesilver </Button>
                                </Typography>
                            </CardContent>
                        </Card>

                    </Box>
                </Background>
            </Grid>
        </>
    );
};

export default LandingTemplate;