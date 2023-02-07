import React from "react";
import Typography from "../../components/atoms/Typography/Typography";
import { MyOrders } from "../../components/organisms/MyOrders/MyOrders";
import { MyOrdersTemplateContainer } from "./MyOrdersTemplate.styles";

const MyOrdersTemplate = () => {
    return (
        <MyOrdersTemplateContainer>
            <Typography variant="h5" sx={{ margin: "2% 0 2% 15%" }}>
                My Orders
            </Typography>
            <MyOrders />
        </MyOrdersTemplateContainer>
    );
};

export default MyOrdersTemplate;
