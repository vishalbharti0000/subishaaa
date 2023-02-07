import React from "react";
import { useNavigate } from "react-router-dom";
import Grid from "../../atoms/Grid/Grid";
import CardContent from "../../atoms/CardContent/CardContent";
import Button from "../../atoms/Button/Button";
import { CardStyle } from "./ContactForm.styles";
import FormControl from "../../atoms/FormControl/FormControl";
import { TextField } from "../../atoms/TextField/TextField";
import { useSnackbar } from "notistack";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { sendContactForm } from "../../../redux/actions";

const phoneRegExp = "^[0-9]{10}$";

const schema = yup
    .object({
        contactNumber: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
        name: yup.string().required(),
        email: yup.string().email().notRequired(),
    })
    .required();

export default function ContactForm() {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const responsePerson = useSelector((state) => state.persons.responsePerson);
    const [clicked, setClicked] = React.useState(false);

    const { enqueueSnackbar } = useSnackbar();

    React.useEffect(() => {

        if (clicked && responsePerson.status === 200) {
            enqueueSnackbar("Will contacted soon", {
                variant: "success",
                anchorOrigin: { vertical: "top", horizontal: "right" },
                style: { marginTop: 20 },
            });
            navigate("/", { replace: true });
        }
        if (clicked && responsePerson.status === 500) {
            enqueueSnackbar("Retry after some time server busy", {
                variant: "error",
                anchorOrigin: { vertical: "top", horizontal: "right" },
                style: { marginTop: 20 },
            });
        }
    }, [dispatch, navigate, enqueueSnackbar, clicked, responsePerson.status]);

    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        mode: "all",
        defaultValues: {
            contactNumber: "",
            email: "",
            name: "",
        },
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        dispatch(sendContactForm(data));
        setClicked(true);
    };

    return (
        <CardStyle>
            <CardContent>
                <form
                    data-testid="form"
                    onSubmit={handleSubmit(onSubmit)}
                    autoComplete="off"
                    noValidate
                >
                    <Grid container p={2} spacing={3}>
                        <Grid item xs={12} md={12}>
                            <Controller
                                name="contactNumber"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        data-testid="name"
                                        label="Contact Number"
                                        autoComplete="off"
                                        helperText={errors?.contactNumber?.message}
                                        error={Boolean(errors?.contactNumber)}
                                        fullWidth
                                    />
                                )}
                            />
                        </Grid>

                        <Grid item xs={12} md={12}>
                            <Controller
                                name="name"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        data-testid="name"
                                        label="Name"
                                        autoComplete="off"
                                        helperText={errors?.name?.message}
                                        error={Boolean(errors?.name)}
                                        fullWidth
                                    />
                                )}
                            />
                        </Grid>

                        <Grid item xs={12} md={12}>
                            <Controller
                                name="email"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        data-testid="email"
                                        label="Email"
                                        autoComplete="off"
                                        helperText={errors?.email?.message}
                                        error={Boolean(errors?.email)}
                                        fullWidth
                                    />
                                )}
                            />
                        </Grid>

                        <Grid item xs={12} md={12}>
                            <FormControl fullWidth>
                                <Button
                                    data-testid="submit-button"
                                    type="submit"
                                    variant="contained"
                                >
                                    Proceed
                                </Button>
                            </FormControl>
                        </Grid>
                    </Grid>
                </form>
            </CardContent>
        </CardStyle >
    );
}
