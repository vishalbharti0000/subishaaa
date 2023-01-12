import React from "react";
import Grid from "../../components/atoms/Grid/Grid";
import ProductCard from "../../components/organisms/ProductCard/ProductCard";
import Accordion from "../../components/atoms/Accordion/Accordion";
import AccordionDetails from "../../components/atoms/AccordionDetails/AccordionDetails";
import AccordionSummary from "../../components/atoms/AccordionSummary/AccordionSummary";
import ExpandMoreIcon from "../../components/atoms/ExpandMoreIcon/ExpandMoreIcon";
import Typography from "../../components/atoms/Typography/Typography";
import Box from "../../components/atoms/Box/Box";
import Link from '@mui/material/Link';
import { BoxStyle, TitleStyle } from "./ProductsTemplate.styles";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions";

const ProductsTemplate = () => {
    const dispatch = useDispatch();

    const products = useSelector((state) => state.products.products);

    const pathname = window.location.pathname;
    const product = pathname.replace("/products/", "");
    const [expanded, setExpanded] = React.useState(false);

    React.useEffect(() => {
        if (product === "all")
            dispatch(getProducts(""));
        else
            dispatch(getProducts(product));
    }, [dispatch, product])


    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    var links = [["Rings", "rings"], ["Earrings", "earrings"], ["Necklace", "necklace"], ["Chain Set", "chainset"], ["Pendant Set", "pendantset"], ["Bracelets", "bracelets"], ["Bangles", "bangles"],
    ["Mangal Sutra", "mangalsutra"], ["Toe Rings", "toerings"], ["Nose Pins", "nosepins"], ["Anklet", "anklet"], ["Silver Watches", "silverwatches"], ["All Products", "all"]]

    return (
        <BoxStyle >
            <Box sx={{ display: { xs: "block", md: "none" } }}>
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
                            <Typography variant="h6">Categories</Typography>
                        </TitleStyle>
                    </AccordionSummary>
                    <AccordionDetails >
                        {links.map((link, key) => {
                            const hrefLink = `/products/${link[1]}`;
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
            <Grid container spacing={2}>
                {products.map((item) => (
                    <>
                        <Grid sx={{ display: { xs: "block", md: "none" } }} key={item.id} item xs={6} md={4} >
                            <ProductCard item={item} mobile={true} />
                        </Grid>
                        <Grid sx={{ display: { xs: "none", md: "block" } }} key={item.id} item xs={12} md={4}>
                            <ProductCard item={item} mobile={false} />
                        </Grid>
                    </>
                ))}
            </Grid>
        </BoxStyle>
    );
};

export default ProductsTemplate;