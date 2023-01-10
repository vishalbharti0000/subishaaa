import React from "react";
import Grid from "../../components/atoms/Grid/Grid";
import ContactForm from "../../components/organisms/ContactForm/ContactForm";
import { ContactFormContainer } from "./ContactFormTemplate.styles";

const ContactFormTemplate = () => {

    return (
        <>
            <ContactFormContainer data-testid="test-drive-template">
                <Grid container alignItems="center" justifyContent="center">
                    <Grid item xs={12} md={6}>
                        <ContactForm />
                    </Grid>
                </Grid>
            </ContactFormContainer>
        </>
    );
};

export default ContactFormTemplate;
