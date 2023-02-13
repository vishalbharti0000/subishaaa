import React from "react";
import { useLocation, Navigate } from "react-router-dom";

const AuthGuard = (props) => {
    const navState = useLocation();
    const item = sessionStorage.getItem("json");
    // const json = JSON.parse(sessionStorage.getItem("json"));
    return item ? (
        <>{props.children}</>
    ) : (
        <Navigate to="/login" state={navState} />
    );
};

export default AuthGuard;
