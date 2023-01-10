import React from "react";
import { useNavigate } from "react-router-dom";
import Grid from "../../atoms/Grid/Grid";
import CardContent from "../../atoms/CardContent/CardContent";
import Button from "../../atoms/Button/Button";
import { CardStyle, Heading } from "./ProductForm.styles";
import FormControl from "../../atoms/FormControl/FormControl";
import { TextField } from "../../atoms/TextField/TextField";
import { useSnackbar } from "notistack";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Paper from "../../atoms/Paper/Paper";
import AutoComplete from "../../atoms/Autocomplete/Autocomplete";
import PublishIcon from "@mui/icons-material/Publish";
import IconButton from "../../atoms/IconButton/IconButton";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { sendProductForm } from "../../../redux/actions";

const schema = yup
    .object({
        name: yup.string().required(),
        description: yup.string().notRequired(),
        rate: yup.number().required(),
    })
    .required();

export default function ProductForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const responseProduct = useSelector((state) => state.products.responseProduct);
    const [clicked, setClicked] = React.useState(false);
    console.log(responseProduct);
    const [file, setFile] = React.useState([]);

    const {
        handleSubmit,
        control,
        setValue,
        formState: { errors },
    } = useForm({
        mode: "all",
        defaultValues: {
            name: "",
            description: "",
            categories: null,
            rate: null,
            priority: null,
        },
        resolver: yupResolver(schema),
    });

    React.useEffect(() => {

        if (clicked && responseProduct.status === 200) {
            enqueueSnackbar("Product added", {
                variant: "success",
                anchorOrigin: { vertical: "top", horizontal: "right" },
                style: { marginTop: 20 },
            });
            navigate("/admin/product-form", { replace: true });
            window.location.reload(false);
        }
        if (clicked && responseProduct.status === 500) {
            enqueueSnackbar("Retry after some time server busy", {
                variant: "error",
                anchorOrigin: { vertical: "top", horizontal: "right" },
                style: { marginTop: 20 },
            });
        }
    }, [dispatch, navigate, enqueueSnackbar, clicked, responseProduct.status]);

    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append("file", file);
        for ( var key in data ) {
            formData.append(key, data[key]);
        }
        dispatch(sendProductForm(formData));
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
                                name="description"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        data-testid="name"
                                        label="Description"
                                        autoComplete="off"
                                        helperText={errors?.description?.message}
                                        error={Boolean(errors?.description)}
                                        fullWidth
                                    />
                                )}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Controller
                                name="categories"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <AutoComplete
                                        {...field}
                                        getOptionLabel={(option) => option?.name}
                                        fullWidth
                                        autoComplete="off"
                                        id="combo-box-demo"
                                        options={[
                                            { id: 0, name: "rings" },
                                            { id: 1, name: "earrings" },
                                            { id: 2, name: "necklace" },
                                            { id: 3, name: "chainset" },
                                            { id: 4, name: "pendantset" },
                                            { id: 5, name: "bracelets" },
                                            { id: 6, name: "bangles" },
                                            { id: 7, name: "mangalsutra" },
                                            { id: 8, name: "toerings" },
                                            { id: 9, name: "nosepins" },
                                            { id: 10, name: "anklet" },
                                            { id: 11, name: "silverwatches" }
                                        ]}
                                        PaperComponent={({ children }) => <Paper>{children}</Paper>}
                                        onChange={(_, value) => {
                                            setValue("categories", value);
                                            setValue("category", value?.name);
                                        }}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                label="Category"
                                                autoComplete="off"
                                                helperText={errors?.time?.message}
                                                error={Boolean(errors?.time)}
                                            />
                                        )}
                                    />
                                )}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Controller
                                name="priority"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <AutoComplete
                                        {...field}
                                        getOptionLabel={(option) => option?.name}
                                        fullWidth
                                        autoComplete="off"
                                        id="combo-box-demo"
                                        options={[
                                            { id: 0, name: "false", val: false },
                                            { id: 1, name: "true", val: true },
                                        ]}
                                        PaperComponent={({ children }) => <Paper>{children}</Paper>}
                                        onChange={(_, value) => {
                                            setValue("priority", value);
                                            setValue("carouselPriority", value?.val);
                                        }}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                label="Homepage Priority"
                                                autoComplete="off"
                                                helperText={errors?.time?.message}
                                                error={Boolean(errors?.time)}
                                            />
                                        )}
                                    />
                                )}
                            />
                        </Grid>

                        <Grid item xs={12} md={12}>
                            <Controller
                                name="rate"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        data-testid="name"
                                        label="Rate"
                                        autoComplete="off"
                                        helperText={errors?.rate?.message}
                                        error={Boolean(errors?.rate)}
                                        fullWidth
                                    />
                                )}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Heading>
                                Upload Product Image
                                <IconButton
                                    data-testid="upload"
                                    variant="contained"
                                    component="label"
                                >
                                    <PublishIcon />
                                    <input
                                        hidden
                                        accept="image/*"
                                        onChange={(e) => setFile(e.target.files[0])}
                                        id="raised-button-file"
                                        type="file"
                                        required
                                    />
                                </IconButton>
                                <span style={{ color: "#6488f4", marginLeft: "10px" }}>
                                    {file?.name}
                                </span>
                            </Heading>
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
        </CardStyle>
    );
}