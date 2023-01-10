import React from "react";
import ErrorTemplate from "../../templates/ErrorTemplate/ErrorTemplate";

const ErrorPage = ({ errorType }) => {
    return (
        < div data-testid="errorpage" >
            < ErrorTemplate errorType={errorType} />
        </div>
    )
};

export default ErrorPage;