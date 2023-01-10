import React from "react";
import Grid from "../../components/atoms/Grid/Grid";
import ProductForm from "../../components/organisms/ProductForm/ProductForm";
import { ProductFormContainer } from "./ProductFormTemplate.styles";

const ProductFormTemplate = () => {

    return (
        <>
            <ProductFormContainer data-testid="test-drive-template">
                <Grid container alignItems="center" justifyContent="center">
                    <Grid item xs={12} md={6}>
                        <ProductForm />
                    </Grid>
                </Grid>
            </ProductFormContainer>
        </>
    );
};

export default ProductFormTemplate;
