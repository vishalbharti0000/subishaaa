import Grid from "../../atoms/Grid/Grid";
import Typography from "../../atoms/Typography/Typography";
import { useNavigate } from "react-router-dom";
import { Image } from "./ErrorComponent.styles";
import Button from "../../atoms/Button/Button";

export default function ErrorComponent({ errorType }) {
    const navigate = useNavigate();
    if (errorType === "4xx") {
        return (
            <Grid
                container
                data-testid="error_4xx"
                justifyContent={"center"}
                alignItems={"center"}
                my={4}
            >
                <Grid item container xs={11} md={6} direction={"column"} rowGap={2}>
                    <Image src="/404.png" />
                    <Typography textAlign="center" variant="h3">
                        Sorry, Page Not Found!
                    </Typography>
                    <Grid item container justifyContent="center" columnGap={2}>
                        <Button
                            variant="contained"
                            data-testid="home"
                            onClick={() => navigate("../")}
                        >
                            Home Page
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        );
    } else {
        return (
            <Grid
                data-testid="error_5xx"
                container
                justifyContent={"center"}
                alignItems={"center"}
                my={4}
            >
                <Grid
                    item
                    container
                    xs={11}
                    md={6}
                    lg={5}
                    direction={"column"}
                    rowGap={2}
                >
                    <Image src="/500.png" />
                    <Typography textAlign="center" variant="h4">
                        Internal Server Error!
                    </Typography>
                    <Typography textAlign="center" variant="h5">
                        We are working on this issue. Please try again later.
                    </Typography>
                </Grid>
            </Grid>
        );
    }
}
