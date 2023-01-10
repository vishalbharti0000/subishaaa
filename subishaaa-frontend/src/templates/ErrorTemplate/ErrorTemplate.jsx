import React from "react";
import ErrorComponent from "../../components/organisms/ErrorComponent/ErrorComponent";

const ErrorTemplate = ({ errorType }) => {
    return (
        <>
            <ErrorComponent errorType={errorType} />
        </>
    );
};

export default ErrorTemplate;
