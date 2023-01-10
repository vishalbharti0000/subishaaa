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
import CallIcon from '@mui/icons-material/Call';
import { useNavigate } from "react-router-dom";

const LandingTemplate = () => {
    const navigate = useNavigate();
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Box sx={{ display: { xs: "none", md: "block" } }}>
                        <CustomizedCarousel mobile={false} />
                    </Box>
                    <Box sx={{ display: { xs: "block", md: "none" } }}>
                        <CustomizedCarousel mobile={true} />
                    </Box>
                </Grid>

                <Background>
                    <Box sx={{ display: { xs: "none", md: "block" } }}>
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
                            </Box>
                            <CardMedia
                                component="img"
                                sx={{ width: 450 }}
                                //keep this image in s3 and replace link
                                image="https://cdn.builder.io/api/v1/image/assets%2Fa2b42a9cc9b6477aa448a90e48b7600f%2F3571079501fe4d85b0c403c90c532174?format=webp&width=2000"
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
                                //keep this image in s3 and replace link
                                image="https://cdn.builder.io/api/v1/image/assets%2Fa2b42a9cc9b6477aa448a90e48b7600f%2F3571079501fe4d85b0c403c90c532174?format=webp&width=2000"
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

                        <Card sx={{ minWidth: 275 }} sx={{ mt: 1 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" textAlign={"center"} gutterBottom>
                                    <BusinessIcon style={{ color: "#41b6c2" }} fontSize="large" />
                                </Typography>
                                <Typography variant="h5" textAlign={"center"} component="div">
                                    Dhanbad, Jharkhand
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} textAlign={"center"} alignItems={"center"} color="text.secondary" >
                                    <Button startIcon={<CallIcon style={{ color: "#41b6c2" }} />}> +91 1234567890 </Button>
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