import React from "react";
import Card from "../../atoms/Card/Card";
import CardActionArea from "../../atoms/CardActionArea/CardActionArea";
import CardContent from "../../atoms/CardContent/CardContent";
import Grid from "../../atoms/Grid/Grid";
import Typography from "../../atoms/Typography/Typography";
import { PersonModel } from "./PersonCard.styles";

function PersonCard(props) {

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric", hour: '2-digit', minute: '2-digit', second: '2-digit' }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }


    return (
        <div data-testid="carcard">
            <Card data-testid="card">
                <CardActionArea>
                    <CardContent>
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Grid item>
                                <Typography gutterBottom variant="h6" component="div">
                                    <PersonModel>{props.item.name}</PersonModel>
                                </Typography>
                                <Typography gutterBottom component="div">
                                    <PersonModel>{props.item.contactNumber}</PersonModel>
                                </Typography>
                                <Typography gutterBottom component="div">
                                    <PersonModel>{props.item.email}</PersonModel>
                                </Typography>
                                <Typography gutterBottom component="div">
                                    <PersonModel>{formatDate(props.item.timeStamp)}</PersonModel>
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}

export default PersonCard;