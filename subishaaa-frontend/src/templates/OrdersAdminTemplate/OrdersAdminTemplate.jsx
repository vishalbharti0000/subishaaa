import React from "react";
import Typography from "../../components/atoms/Typography/Typography";
import { OrdersAdmin } from "../../components/organisms/OrdersAdmin/OrdersAdmin";
import { MyOrdersTemplateContainer, TitleStyle } from "./OrdersAdminTemplate.styles";
import Accordion from "../../components/atoms/Accordion/Accordion";
import AccordionDetails from "../../components/atoms/AccordionDetails/AccordionDetails";
import AccordionSummary from "../../components/atoms/AccordionSummary/AccordionSummary";
import ExpandMoreIcon from "../../components/atoms/ExpandMoreIcon/ExpandMoreIcon";
import Box from "../../components/atoms/Box/Box";
import Link from '@mui/material/Link';

const OrdersAdminTemplate = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    var links = [["PAYMENT_STATUS_PENDING", "PAYMENT_STATUS_PENDING"], ["PAYMENT_DONE", "PAYMENT_DONE"], ["ORDER_DISPATCHED", "ORDER_DISPATCHED"], ["ORDER_DELIVERED", "ORDER_DELIVERED"], ["ALL", "ALL"]];

    return (
        <MyOrdersTemplateContainer>
            <Box>
                <Accordion
                    expanded={expanded === "filter-panel"}
                    onChange={handleChange("filter-panel")}
                    sx={{ marginTop: 2, marginBottom: 2}}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="filter-panel-bh-content"
                        id="filter-panel-bh-header"
                    >
                        <TitleStyle>
                            <Typography variant="h6">Filter Order By Status</Typography>
                        </TitleStyle>
                    </AccordionSummary>
                    <AccordionDetails >
                        {links.map((link, key) => {
                            const hrefLink = `/admin/orders/status/${link[1]}`;
                            return (
                                <Typography key={key} >
                                    <Link style={{ color: "#d5bf6e" }} href={hrefLink} underline="hover">
                                        {link[0]}
                                    </Link>
                                </Typography>);
                        })}
                    </AccordionDetails>
                </Accordion>
            </Box>
            <Typography variant="h5" sx={{ margin: "2% 0 2% 15%" }}>
                Orders
            </Typography>
            <OrdersAdmin />
        </MyOrdersTemplateContainer>
    );
};

export default OrdersAdminTemplate;
