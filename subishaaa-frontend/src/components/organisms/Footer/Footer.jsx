import React from "react";
import Grid from "@mui/material/Grid";
import { LogoStyle, BoxStyle, TextStyle } from "./Footer.styles";
import Typography from "../../atoms/Typography/Typography";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    return (
        <BoxStyle style={{ backgroundColor: "#66052d" }} data-testid="down-nav-bar">
            <Grid container alignItems="center" justifyContent="space-between" px={2}>
                <Grid item onClick={() => navigate("/")} data-testid="home-logo">
                    <LogoStyle width="90px" height="30px" />
                </Grid>
                {/* <Grid item>
                    <TextStyle>
                    <Typography>
                        Contact No. 1234567890
                    </Typography>
                    </TextStyle>
                </Grid> */}
                <Grid item>
                    <TextStyle>
                        <Typography style={{fontSize: "13px"}}>
                            Ⓒ 2023 Subishaaa. All rights reserved
                        </Typography>
                    </TextStyle>
                </Grid>
            </Grid>
        </BoxStyle>
    );
};

export default Footer;
