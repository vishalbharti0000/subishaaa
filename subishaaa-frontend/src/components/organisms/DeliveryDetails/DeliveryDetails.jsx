import { sendOrderDetails } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import FormControl from "../../atoms/FormControl/FormControl";
import FormControlLabel from "../../atoms/FormControlLabel/FormControlLabel";
import Grid from "../../atoms/Grid/Grid";
import Radio from "../../atoms/Radio/Radio";
import { TextField } from "../../atoms/TextField/TextField";
import { DeliveryStyle } from "./DeliveryDetails.styles";
import Button from "../../atoms/Button/Button";
import { useNavigate, useParams } from 'react-router-dom';
import Typography from "../../atoms/Typography/Typography";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { RadioGroup } from "@mui/material";
import { useSnackbar } from "notistack";

const schema = yup
    .object({
        address: yup.string().min(40, "Address must be complete with pincode").required("Address cannot be empty"),
        number: yup.string().matches(/^\d{10}$/, "Contact Number must be of 10 digits").required("Contact cannot be empty!"),
    })
    .required();

const DeliveryDetails = () => {
    const json = JSON.parse(sessionStorage.getItem("json"));
    const { productId, amount } = useParams();
    const responseOrder = useSelector((state) => state.users.responseOrder);
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        mode: "all",
        defaultValues: {
            address: "",
            contact: "",
            paymentMode: "PAY_0N_DELIVERY",
        },
        resolver: yupResolver(schema),
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const [submit, setSubmit] = useState(false);

    useEffect(() => {

        if (submit && responseOrder.status === 200) {
            enqueueSnackbar("Order saved to your Order List", {
                variant: "success",
                anchorOrigin: { vertical: "top", horizontal: "right" },
                style: { marginTop: 20 },
            });
            navigate("/myOrders", {replace: true});
        }
        if (submit && responseOrder.status === 500) {
            enqueueSnackbar("server down try again after some time", {
                variant: "error",
                anchorOrigin: { vertical: "top", horizontal: "right" },
                style: { marginTop: 20 },
            });
        }
    }, [dispatch, navigate, enqueueSnackbar, submit, responseOrder.status]);

    const onSubmit = (data) => {
        setSubmit(true);
        dispatch(
            sendOrderDetails(json.id, productId, amount, data.paymentMode, data, json.token)
        );
    };

    return (
        <DeliveryStyle>
            <Grid container my={3} data-testid="delivery-details">
                <Grid item xs={12} px={4} mb={3}>
                    <Typography variant="h5">Delivery Details</Typography>
                </Grid>
                <Grid item xs={12}>
                    <form
                        data-testid="delivery-details-form"
                        onSubmit={handleSubmit(onSubmit)}
                        autoComplete={"off"}
                        noValidate
                    >
                        <Grid container px={4} spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant="body2">Address</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Controller
                                    name="address"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            label="Address (Area and Street) *"
                                            data-testid="address"
                                            helperText={errors?.address?.message}
                                            error={Boolean(errors?.address)}
                                            fullWidth
                                        />
                                    )}
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <Controller
                                    name="number"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            label="Contact Number *"
                                            helperText={errors?.number?.message}
                                            error={Boolean(errors?.number)}
                                            fullWidth
                                        />
                                    )}
                                />
                            </Grid>

                            <Grid item xs={12} mb={-2}>
                                <Typography variant="body2">Mode of Payment</Typography>
                            </Grid>
                            <Grid item xs={12} container justifyContent="center">
                                <Grid item xs={12}>
                                    <Controller
                                        name="paymentMode"
                                        control={control}
                                        rules={{ required: true }}
                                        render={({ field }) => (
                                            <RadioGroup
                                                {...field}
                                                aria-labelledby="demo-controlled-radio-buttons-group"
                                                name="controlled-radio-buttons-group"
                                            >
                                                <FormControlLabel
                                                    value={"PAY_0N_DELIVERY"}
                                                    control={<Radio />}
                                                    label="PAY_0N_DELIVERY"
                                                />
                                                <FormControlLabel
                                                    value={"UPI"}
                                                    control={<Radio />}
                                                    label="UPI"
                                                />
                                            </RadioGroup>
                                        )}
                                    />
                                </Grid>
                            </Grid>

                            <Grid item xs={12} mt={2}>
                                <FormControl fullWidth>
                                    <Button
                                        variant="contained"
                                        type="submit"
                                        disabled={submit}
                                    >
                                        Proceed
                                    </Button>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </DeliveryStyle>
    );
};

export default DeliveryDetails;
