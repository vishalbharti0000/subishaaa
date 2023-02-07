import React from "react";
import Grid from "../../components/atoms/Grid/Grid";
import RegistrationForm from "../../components/organisms/RegistrationForm/RegistrationForm";
import { RegistrationContainer } from "./RegistrationTemplate.styles";

const RegistrationTemplate = () => {

    return (
        <>
            <RegistrationContainer>
                <Grid container alignItems="center" data-testid="registration-template" justifyContent="center" px={3}>
                    <Grid item xs={12} md={6}>
                        <RegistrationForm />
                    </Grid>
                </Grid>
            </RegistrationContainer>
        </>
    );
};

export default RegistrationTemplate;
