import React from "react";
import Card from "../../atoms/Card/Card";
import CardActionArea from "../../atoms/CardActionArea/CardActionArea";
import CardContent from "../../atoms/CardContent/CardContent";
import Grid from "../../atoms/Grid/Grid";
import Typography from "../../atoms/Typography/Typography";
import { ProductModel } from "./ProductCard.styles";
import { useNavigate } from "react-router-dom";
import LandingImages from "../LandingImages/LandingImages";

function ProductCard(props) {
    const navigate = useNavigate();

    return (
        <div>
            <Card key={props.item.id} onClick={() => navigate(`/orderDetails/${props.item.id}/${props.item.rate}`)}>
                <CardActionArea>
                    {props.mobile && <LandingImages width={"100%"} height={"150px"} src={props.item.image} />}
                    {!props.mobile && <LandingImages width={"100%"} height={"300px"} src={props.item.image} />}
                    <CardContent>
                        <Grid
                            container
                            direction="row"
                            alignItems="center"
                        >
                            <Grid item>
                                <Typography style={{ fontSize: "12px" }} component="div">
                                    <ProductModel>{props.item.name}</ProductModel>
                                </Typography>
                                <Typography style={{ fontSize: "12px" }} component="div">
                                    <ProductModel>{props.item.description}</ProductModel>
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography style={{ fontSize: "12px" }} component="div">
                                    <ProductModel>₹
                                        {
                                            props.item.rate
                                        }
                                    </ProductModel>
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}

export default ProductCard;
