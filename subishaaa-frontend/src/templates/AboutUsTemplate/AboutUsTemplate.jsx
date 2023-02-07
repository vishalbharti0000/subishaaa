import React from "react";
import AboutUs from "../../components/organisms/AboutUs/AboutUs";
import Grid from "../../components/atoms/Grid/Grid";

const AboutUsTemplate = () => {

    return (
        <>
            <Grid container alignItems="center" justifyContent="center">
                <Grid item xs={12} md={6}>
                    <AboutUs />
                </Grid>
            </Grid>
        </>
    );
};

export default AboutUsTemplate;
