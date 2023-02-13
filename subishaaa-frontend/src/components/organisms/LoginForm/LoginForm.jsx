import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../atoms/Button/Button";
import Typography from "../../atoms/Typography/Typography";
import Grid from "../../atoms/Grid/Grid";
import InputLabel from "../../atoms/InputLabel/InputLabel";
import FormControl from "../../atoms/FormControl/FormControl";
import { TextField } from "../../atoms/TextField/TextField";
import IconButton from "../../atoms/IconButton/IconButton";
import InputAdornment from "../../atoms/InputAdornment/InputAdornment";
import { LinkStyle, LoginCard } from "./LoginForm.styles";
import { useLocation, useNavigate } from "react-router-dom";
import { sendLoginForm } from "../../../redux/actions";
import VisibilityOffIcon from "../../atoms/VisibilityOffIcon/VisibilityOffIcon";
import VisibilityIcon from "../../atoms/VisibilityIcon/VisibilityIcon";
import { useSnackbar } from "notistack";
import { ActionTypes } from "../../../redux/constants/action-types";

import { useForm, Controller, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
    .object({
        email: yup.string().email().required(),
        password: yup.string().nullable().min(6).required(),
    })
    .required();

const LoginForm = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const loggedInUser = useSelector((state) => state.users.loggedInUser);
    const navigate = useNavigate();
    

    const [passwordVisible, setPasswordVisible] = useState(false);

    useEffect(() => {
        if (loggedInUser.status === 200) {

            if (location.state?.pathname) {
                navigate(location.state?.pathname);
            } else {
                navigate("/", { replace: true });
            }
            enqueueSnackbar("Logged In.", {
                autoHideDuration: 2000,
                anchorOrigin: { horizontal: "right", vertical: "top" },
                variant: "success",
            });

            dispatch({ type: ActionTypes.CLEAR_LOGIN_STATUS });
        } else if (loggedInUser.status === 403) {
            enqueueSnackbar("No Account Exist with this email", {
                autoHideDuration: 2000,
                anchorOrigin: { horizontal: "right", vertical: "top" },
                variant: "error",
            });
            dispatch({ type: ActionTypes.CLEAR_LOGIN_STATUS });
        } else if (loggedInUser.status === 401) {
            enqueueSnackbar("No Account Exist with this email", {
                autoHideDuration: 2000,
                anchorOrigin: { horizontal: "right", vertical: "top" },
                variant: "error",
            });
            dispatch({ type: ActionTypes.CLEAR_LOGIN_STATUS });
        } else if (loggedInUser.status === 405) {
            enqueueSnackbar("Your Account Exist with Social Login Use Google Login", {
                autoHideDuration: 2000,
                anchorOrigin: { horizontal: "right", vertical: "top" },
                variant: "error",
            });
            dispatch({ type: ActionTypes.CLEAR_LOGIN_STATUS });
        } else if (loggedInUser.status === 400) {
            enqueueSnackbar("Wrong Password", {
                autoHideDuration: 2000,
                anchorOrigin: { horizontal: "right", vertical: "top" },
                variant: "error",
            });
            dispatch({ type: ActionTypes.CLEAR_LOGIN_STATUS });
        }
    }, [loggedInUser, navigate, enqueueSnackbar, dispatch, location]);

    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        mode: "all",
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: yupResolver(schema),
    });

    const email = useWatch({
        name: "email",
        control: control,
        defaultValue: "",
    });

    const password = useWatch({
        name: "password",
        control: control,
        defaultValue: "",
    });

    const onSubmit = (data) => {
        dispatch(
            sendLoginForm({
                username: data.email,
                password: data.password,
            })
        );
    };

    return (
        <LoginCard>
            <Grid container>
                <Grid item xs={12}>
                    <form
                        data-testid="login-form"
                        onSubmit={handleSubmit(onSubmit)}
                        autoComplete={"off"}
                        noValidate
                    >
                        <Grid container px={4} spacing={3}>
                            <Grid item xs={12} columnSpacing={0}>
                                <InputLabel>Email</InputLabel>
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
                                            placeholder="Enter your Email"
                                            helperText={errors?.email?.message}
                                            error={Boolean(errors?.email)}
                                            fullWidth
                                        />
                                    )}
                                />
                            </Grid>

                            <Grid item xs={12} columnSpacing={0}>
                                <InputLabel>Password</InputLabel>
                            </Grid>
                            <Grid item xs={12}>
                                <Controller
                                    name="password"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            data-testid="password"
                                            placeholder="Enter your Password"
                                            type={passwordVisible ? "text" : "password"}
                                            helperText={errors?.password?.message}
                                            error={Boolean(errors?.password)}
                                            fullWidth
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            edge="end"
                                                            data-testid="visibility"
                                                            onClick={() =>
                                                                setPasswordVisible(!passwordVisible)
                                                            }
                                                        >
                                                            {!passwordVisible ? (
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

                            <Grid item xs={12} mt={3}>
                                <FormControl fullWidth>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        name="Login"
                                        disabled={email.length === 0 || password.length === 0}
                                        data-testid="login-button"
                                    >
                                        Login
                                    </Button>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12}>
                                <Grid container direction="row" justifyContent="space-between">
                                    {/* <Grid item xs={12} lg={6}>
                                        <LinkStyle
                                            component="button"
                                            data-testid="forgot"
                                            onClick={(e) =>
                                                navigate("/forgotpassword", { replace: true })
                                            }
                                        >
                                            Forgot Password?
                                        </LinkStyle>
                                    </Grid> */}
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
                                                Don't have an Account?
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <LinkStyle
                                                component="button"
                                                data-testid="register"
                                                onClick={(e) =>
                                                    navigate("/register", { replace: true })
                                                }
                                            >
                                                Register Now
                                            </LinkStyle>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </LoginCard>
    );
};

export default LoginForm;
