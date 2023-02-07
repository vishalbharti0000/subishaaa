import React from "react";
import Grid from "../../components/atoms/Grid/Grid";
import { DeliveryDetailsContainer } from "./DeliveryDetailsTemplate.styles";
import DeliveryDetails from "../../components/organisms/DeliveryDetails/DeliveryDetails";

const DeliveryDetailsTemplate = () => {

    return (
        <DeliveryDetailsContainer>
            <Grid
                container
                justifyContent="center"
                data-testid="delivery-details-template"
                alignItems="center"
                px={3}
            >
                <Grid item xs={12} md={6}>
                    <DeliveryDetails />
                </Grid>
            </Grid>
        </DeliveryDetailsContainer>
    );
};

export default DeliveryDetailsTemplate;
