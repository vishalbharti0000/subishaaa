import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "../../atoms/Grid/Grid";
import Typography from "../../atoms/Typography/Typography";
import { ImageCard, OrderCardContainer, VariantImage } from "./OrderCardAdmin.styles";
import Button from "../../atoms/Button/Button";
import PaymentIcon from '@mui/icons-material/Payment';
import CancelIcon from '@mui/icons-material/Cancel';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import LoaderDialog from "../../organisms/LoaderDialog/LoaderDialog";
import axios from "axios";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useParams } from 'react-router-dom';
import { sendPaymentDone, sendStatusChange, getAllOrders } from '../../../redux/actions'
const REACT_APP_BASEURL = process.env.REACT_APP_BASEURL;

export const OrderCardAdmin = ({ order }) => {
    const { sts } = useParams();
    const sendStatusChangeStatus = useSelector((state) => state.users.sendStatusChangeStatus);
    const sendPaymentStatus = useSelector((state) => state.users.sendPaymentStatus);
    let json = JSON.parse(sessionStorage.getItem("json"));
    const dispatch = useDispatch();

    const orderStatus = (order.paymentMode === "PAY_0N_DELIVERY" && (order.orderStatus === "PAYMENT_STATUS_PENDING" || order.orderStatus === "PAYMENT_DONE")) ? "DISPATCH_AFTER_VERIFICATION" : order.orderStatus;
    const conditionForPaymentButton = !order.isPaymentDone && order.paymentMode === "UPI";
    const conditionForPaymentDone = order.isPaymentDone;

    const changeStatusTo = () => {
        if (orderStatus === "DISPATCH_AFTER_VERIFICATION") return "ORDER_DISPATCHED";
        if (order.orderStatus === "PAYMENT_DONE") return "ORDER_DISPATCHED";
        else if (order.orderStatus === "ORDER_DISPATCHED") return "ORDER_DELIVERED";
        return false;
    }

    const [product, setProduct] = useState(false);
    const [user, setUser] = useState(false);
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    useEffect(() => {
        if (sendStatusChangeStatus === 200) {
            if (sts === "ALL")
                dispatch(getAllOrders("", json.token));
            else
                dispatch(getAllOrders(sts, json.token));
        }
        if (sendPaymentStatus === 200) {
            if (sts === "ALL")
                dispatch(getAllOrders("", json.token));
            else
                dispatch(getAllOrders(sts, json.token));
        }
    }, [sendStatusChangeStatus, sendPaymentStatus, json.token, sts, dispatch]);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClickOpen2 = () => {
        setOpen2(true);
    };

    const handleClose = () => {
        dispatch(sendPaymentDone(order.id, json.token));
        setOpen(false);
    };
    const handleClose2 = () => {
        dispatch(sendStatusChange(order.id, changeStatusTo(), json.token));
        setOpen2(false);
    };
    const handleClose3 = () => {
        setOpen(false);
    };
    const handleClose4 = () => {
        setOpen2(false);
    };

    useEffect(() => {
        axios
            .get(`${REACT_APP_BASEURL}/product/${order?.productId}`)
            .then((res) => { setProduct(res.data) })
            .catch((err) => { console.error(err) });
        axios
            .get(`${REACT_APP_BASEURL}/admin/customer/${order?.customerId}`, { headers: { Authorization: "Bearer " + json.token } })
            .then((res) => { setUser(res.data) })
            .catch((err) => { console.error(err) });
    }, [order.productId, order.customerId, json.token]);

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
                                <strong>Name : &nbsp;</strong>
                                {user?.firstName} {user?.lastName}
                            </Typography>
                            <Typography>
                                <strong>Email : &nbsp;</strong>
                                {user?.email}
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
                                        Approve Payment
                                    </Button>

                                    <Dialog
                                        fullScreen={fullScreen}
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="responsive-dialog-title"
                                    >
                                        <DialogTitle id="responsive-dialog-title">
                                            {"You Confirm that payment is received"}
                                        </DialogTitle>
                                        <DialogContent>
                                            <DialogContentText>
                                                It cant be changed once done so be aware before approving any payment.
                                            </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={handleClose3}
                                                startIcon={<CancelIcon style={{ color: "#41b6c2" }} />}
                                                variant="contained"
                                                autoFocus
                                            >
                                                Cancel
                                            </Button>
                                            <Button onClick={handleClose} variant="contained" autoFocus>
                                                Approve
                                            </Button>
                                        </DialogActions>
                                    </Dialog>
                                </>}

                            {changeStatusTo() &&
                                <>
                                    <Button
                                        onClick={handleClickOpen2}
                                        // variant="outlined" 
                                        startIcon={<ChangeCircleIcon style={{ color: "#41b6c2" }} />}>
                                        Change Status to {changeStatusTo()}
                                    </Button>

                                    <Dialog
                                        fullScreen={fullScreen}
                                        open={open2}
                                        onClose={handleClose2}
                                        aria-labelledby="responsive-dialog-title"
                                    >
                                        <DialogTitle id="responsive-dialog-title">
                                            {"You Confirm that Status is changed"}
                                        </DialogTitle>
                                        <DialogContent>
                                            <DialogContentText>
                                                Status Changing to {changeStatusTo()}
                                            </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={handleClose4}
                                                startIcon={<CancelIcon style={{ color: "#41b6c2" }} />}
                                                variant="contained"
                                                autoFocus
                                            >
                                                Cancel
                                            </Button>
                                            <Button onClick={handleClose2} variant="contained" autoFocus>
                                                Confirm
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