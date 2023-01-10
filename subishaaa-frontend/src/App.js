import React, { Suspense } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import Routing from "./Routing";
import { createTheme } from "./theme";
import useSettings from "./hooks/useSettings";
import { ErrorBoundary } from "react-error-boundary";
import { SnackbarProvider } from "notistack";
import LoaderDialog from "./components/organisms/LoaderDialog/LoaderDialog";
import ErrorPage from './pages/ErrorPage/ErrorPage';


const App = () => {
  const { settings } = useSettings();

  const theme = createTheme({
    direction: settings.direction,
    responsiveFontSizes: settings.responsiveFontSizes,
    roundedCorners: settings.roundedCorners,
    theme: settings.theme,
  });

  const onErrorHandler = (error, errorInfo) => {
    //Sending error logs to AWS CLOUDWATCH when causes any error in Application
  };

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SnackbarProvider>
          <ErrorBoundary
            FallbackComponent={ErrorPage}
            onError={onErrorHandler}
          >
            <Suspense fallback={<LoaderDialog />}>
              <Routing />
            </Suspense>
          </ErrorBoundary>
        </SnackbarProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
