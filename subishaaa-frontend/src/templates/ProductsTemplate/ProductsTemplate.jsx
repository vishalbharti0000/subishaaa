import React from "react";
import Grid from "../../components/atoms/Grid/Grid";
import ProductCard from "../../components/organisms/ProductCard/ProductCard";
import Accordion from "../../components/atoms/Accordion/Accordion";
import AccordionDetails from "../../components/atoms/AccordionDetails/AccordionDetails";
import AccordionSummary from "../../components/atoms/AccordionSummary/AccordionSummary";
import ExpandMoreIcon from "../../components/atoms/ExpandMoreIcon/ExpandMoreIcon";
import Typography from "../../components/atoms/Typography/Typography";
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

    // var items = [
    //     {
    //         id: 1,
    //         name: "Random Name #1",
    //         description: "Probably the most random thing you have ever seen!",
    //         image: "https://media.istockphoto.com/id/154960096/photo/six-diamond-rings-isolated-on-white.jpg?b=1&s=170667a&w=0&k=20&c=fqH06eh3KiKDPCmrxwiEqUaoCFdjTq1WOptuQkZPYOA=",
    //         rate: 10000
    //     },
    //     {
    //         id: 2,
    //         name: "Random Name #2",
    //         description: "Hello World!",
    //         image: "https://media.istockphoto.com/id/471712723/photo/watch.jpg?b=1&s=170667a&w=0&k=20&c=UjZBYrQTAZIjCm819LAJ1N6Oe9hnTCfe60swtfD9A_E=",
    //         rate: 100000
    //     },
    //     {
    //         id: 3,
    //         name: "Random Name #2",
    //         description: "Hello World!",
    //         image: "https://www.shutterstock.com/image-photo/jewelry-diamond-rings-necklaces-show-260nw-753671818.jpg",
    //         rate: 100000
    //     }
    // ]

    return (
        <BoxStyle >

            <Accordion
                expanded={expanded === "filter-panel"}
                onChange={handleChange("filter-panel")}
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

            <Grid container spacing={2}>
                {products.map((item) => (
                    <Grid key={item.id} item xs={12} md={4}>
                        <ProductCard item={item} />
                    </Grid>
                ))}
            </Grid>
        </BoxStyle>
    );
};

export default ProductsTemplate;