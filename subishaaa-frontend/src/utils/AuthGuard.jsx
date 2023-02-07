import React from "react";
import { useLocation, Navigate } from "react-router-dom";

const AuthGuard = (props) => {
    const navState = useLocation();
    const item = localStorage.getItem("json");
    // const json = JSON.parse(localStorage.getItem("json"));
    return item ? (
        <>{props.children}</>
    ) : (
        <Navigate to="/login" state={navState} />
    );
};

export default AuthGuard;
