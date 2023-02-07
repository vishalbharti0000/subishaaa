import { useState, useEffect } from "react";
import Grid from "../../atoms/Grid/Grid";
import Typography from "../../atoms/Typography/Typography";
import { ImageCard, OrderCardContainer, VariantImage } from "./OrderCard.styles";
import Button from "../../atoms/Button/Button";
import PaymentIcon from '@mui/icons-material/Payment';
import LoaderDialog from "../../organisms/LoaderDialog/LoaderDialog";
import axios from "axios";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
const REACT_APP_BASEURL = process.env.REACT_APP_BASEURL;

export const OrderCard = ({ order }) => {
    const orderStatus = (order.paymentMode === "PAY_0N_DELIVERY" && (order.orderStatus === "PAYMENT_STATUS_PENDING" || order.orderStatus === "PAYMENT_DONE")) ? "DISPATCH_AFTER_VERIFICATION" : order.orderStatus;
    const conditionForPaymentButton = !order.isPaymentDone && order.paymentMode === "UPI";
    const conditionForPaymentDone = order.isPaymentDone;

    const [product, setProduct] = useState(false);
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        axios
            .get(`${REACT_APP_BASEURL}/product/${order?.productId}`)
            .then((res) => { setProduct(res.data) })
            .catch((err) => { console.error(err) });
    }, [order.productId]);

    return (
        <>
            {!product ? <LoaderDialog /> :
                <OrderCardContainer>
                    <Grid
                        container
                        gap={2}
                        sx={{
                            flexDirection: { lg: "row", xs: "column" },
                            p: { lg: 1.5, sm: 2, xs: 1.5 },
                        }}
                    >
                        <Grid item xs={12} lg={2}>
                            <ImageCard>
                                <VariantImage src={product?.image} alt="Product Image" />
                            </ImageCard>
                        </Grid>
                        <Grid item container direction="column" xs={12} lg={6} align="left">
                            <Typography
                                variant="h6"
                                my={1}
                            >{`${product?.name}  ${product?.description}`}</Typography>
                            <Typography>
                                <strong>Order Id : &nbsp;</strong>
                                {order?.id}
                            </Typography>
                            <Typography>
                                <strong>Amount : &nbsp;</strong>
                                ₹{order?.amount}
                            </Typography>
                            <Typography>
                                <strong>Address : &nbsp;</strong>
                                {order?.address}
                            </Typography>
                            <Typography>
                                <strong>Phone Number : &nbsp;</strong>
                                {order?.number}
                            </Typography>
                            <Typography>
                                <strong>Order Status : &nbsp;</strong>
                                {orderStatus}
                            </Typography>
                            <Typography>
                                <strong>Payment Mode : &nbsp;</strong>
                                {order?.paymentMode}
                            </Typography>
                            {conditionForPaymentDone && <Typography style={{ color: "#41b6c2" }}>
                                Payment Completed
                            </Typography>}
                            {conditionForPaymentButton &&
                                <>
                                    <Button
                                        onClick={handleClickOpen}
                                        // variant="outlined" 
                                        startIcon={<PaymentIcon style={{ color: "#41b6c2" }} />}>
                                        Complete Payment
                                    </Button>

                                    <Dialog
                                        fullScreen={fullScreen}
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="responsive-dialog-title"
                                    >
                                        <DialogTitle id="responsive-dialog-title">
                                            {"Complete the payment using any UPI app"}
                                        </DialogTitle>
                                        <DialogContent>
                                            <ImageCard>
                                                <VariantImage src={"https://subishaaa-product-images.s3.ap-south-1.amazonaws.com/WhatsApp+Image+2023-02-03+at+12.29.17+PM.jpeg"} alt="Product Image" />
                                            </ImageCard>
                                            <DialogContentText>
                                                Wait for some time after payment done. It should take max of 3 working day to reflect payment on your orders.
                                                So don't repeat payment.
                                            </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={handleClose} variant="contained" autoFocus>
                                                Payment Done
                                            </Button>
                                        </DialogActions>
                                    </Dialog>
                                </>}
                        </Grid>
                    </Grid>
                </OrderCardContainer>
            }
        </>
    );
};