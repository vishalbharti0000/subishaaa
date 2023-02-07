import React, { useState, useEffect } from "react";
import FormControl from "../../atoms/FormControl/FormControl";
import Grid from "../../atoms/Grid/Grid";
import { TextField } from "../../atoms/TextField/TextField";
import IconButton from "../../atoms/IconButton/IconButton";
import InputAdornment from "../../atoms/InputAdornment/InputAdornment";
import { RegistrationStyle, LinkStyle } from "./RegistrationForm.styles";
import VisibilityIcon from "../../atoms/VisibilityIcon/VisibilityIcon";
import VisibilityOffIcon from "../../atoms/VisibilityOffIcon/VisibilityOffIcon";
import Button from "../../atoms/Button/Button";
import Typography from "../../atoms/Typography/Typography";
import { useLocation, useNavigate } from "react-router-dom";
import { sendRegistrationForm } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";


import { useSnackbar } from "notistack";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
    .object({
        firstName: yup.string().required("First Name cannot be empty!"),
        lastName: yup.string().required("Last Name cannot be empty!"),
        contactNumber: yup
            .string()
            .matches(/^\d{10}$/, "Contact Number must be of 10 digits")
            .required("Contact cannot be empty!"),
        email: yup.string().email().required("Email cannot be empty!"),
        password: yup.string().nullable().min(6).required(),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref("password"), null], "Passwords must match")
            .required("Passwords must match!"),
    })
    .required();

const RegistrationForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { state: navState } = useLocation();
    const { enqueueSnackbar } = useSnackbar();
    const responseUser = useSelector((state) => state.users.responseUser);
    const [visibility1, setVisibility1] = useState(false);
    const [visibility2, setVisibility2] = useState(false);
    const [clicked, setClicked] = useState(false);

    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        mode: "all",
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: "",
            contactNumber: "",
            firstName: "",
            lastName: "",
        },
        resolver: yupResolver(schema),
    });

    useEffect(() => {

        if (clicked && responseUser.status === 200) {
            enqueueSnackbar("User Registered", {
                variant: "success",
                anchorOrigin: { vertical: "top", horizontal: "right" },
                style: { marginTop: 20 },
            });
            navigate("/login", { state: navState });
        }
        if (clicked && responseUser.status === 500) {
            enqueueSnackbar("User Already Registered or server busy try again with different Number and Email", {
                variant: "error",
                anchorOrigin: { vertical: "top", horizontal: "right" },
                style: { marginTop: 20 },
            });
        }
    }, [dispatch, navigate, enqueueSnackbar, clicked, responseUser.status, navState]);

    const registerUserHandler = (data) => {
        dispatch(sendRegistrationForm(data));
        setClicked(true);
    };

    return (
        <RegistrationStyle>
            <Grid container my={3}>
                <Grid item xs={12} mt={1}>
                    <form
                        data-testid="registration-form"
                        onSubmit={handleSubmit(registerUserHandler)}
                        noValidate
                        autoComplete="off"
                    >
                        <Grid container px={4} spacing={3}>
                            <Grid item xs={12}>
                                <Controller
                                    name="firstName"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            data-testid="first-name"
                                            label={"First Name"}
                                            helperText={errors?.firstName?.message}
                                            error={Boolean(errors?.firstName)}
                                            fullWidth
                                        />
                                    )}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Controller
                                    name="lastName"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            data-testid="last-name"
                                            label={"Last Name"}
                                            helperText={errors?.lastName?.message}
                                            error={Boolean(errors?.lastName)}
                                            fullWidth
                                        />
                                    )}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Controller
                                    name="email"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            data-testid="email"
                                            label={"Email Address"}
                                            helperText={errors?.email?.message}
                                            error={Boolean(errors?.email)}
                                            fullWidth
                                        />
                                    )}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Controller
                                    name="contactNumber"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            label={"Contact Number"}
                                            helperText={errors?.contactNumber?.message}
                                            error={Boolean(errors?.contactNumber)}
                                            fullWidth
                                        />
                                    )}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Controller
                                    name="password"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            label="Password"
                                            type={visibility2 ? "text" : "password"}
                                            helperText={errors?.password?.message}
                                            error={Boolean(errors?.password)}
                                            fullWidth
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            edge="end"
                                                            data-testid="visibility-1"
                                                            onClick={() => setVisibility2(!visibility2)}
                                                        >
                                                            {!visibility2 ? (
                                                                <VisibilityOffIcon />
                                                            ) : (
                                                                <VisibilityIcon />
                                                            )}
                                                        </IconButton>
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                    )}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Controller
                                    name="confirmPassword"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            data-testid="confirm-password"
                                            label="Confirm Password"
                                            type={visibility1 ? "text" : "password"}
                                            helperText={errors?.confirmPassword?.message}
                                            error={Boolean(errors?.confirmPassword)}
                                            fullWidth
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            edge="end"
                                                            data-testid="visibility-2"
                                                            onClick={() => setVisibility1(!visibility1)}
                                                        >
                                                            {!visibility1 ? (
                                                                <VisibilityOffIcon />
                                                            ) : (
                                                                <VisibilityIcon />
                                                            )}
                                                        </IconButton>
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                    )}
                                />
                            </Grid>

                            <Grid item xs={12} mt={2}>
                                <FormControl fullWidth>
                                    <Button
                                        data-testid="register-button"
                                        variant="contained"
                                        type="submit"
                                    >
                                        Create an Account
                                    </Button>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12}>
                                <Grid container direction="row" justifyContent="space-between">
                                    <Grid
                                        container
                                        item
                                        xs={12}
                                        lg={6}
                                        spacing={1}
                                        alignItems="center"
                                        justifyContent={{ lg: "right", xs: "left" }}
                                    >
                                        <Grid item>
                                            <Typography variant="body2">
                                                Already have an Account?
                                            </Typography>
                                        </Grid>

                                        <Grid item>
                                            <LinkStyle
                                                component="button"
                                                data-testid="login"
                                                onClick={(e) => navigate("/login", { replace: true })}
                                            >
                                                Login
                                            </LinkStyle>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </RegistrationStyle>
    );
};

export default RegistrationForm;
