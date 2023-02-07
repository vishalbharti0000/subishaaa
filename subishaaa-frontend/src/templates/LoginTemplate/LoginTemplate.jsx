import React from "react";
import Grid from "../../components/atoms/Grid/Grid";
import LoginForm from "../../components/organisms/LoginForm/LoginForm";
import { LoginContainer } from "./Login.styles";

const LoginTemplate = () => {

    return (
        <>
            <LoginContainer>
                <Grid container alignItems="center" justifyContent="center" data-testid="login-template" px={3}>
                    <Grid item xs={12} md={6}>
                        <LoginForm />
                    </Grid>
                </Grid>
            </LoginContainer>
        </>
    );
};

export default LoginTemplate;
