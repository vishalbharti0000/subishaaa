import React from "react";
import { Link } from "react-router-dom";

function Logo(props) {
    return (
        <Link to="/">
            <img
                className="my-2"
                src="/logo.png"
                alt="Logo cannot be displayed"
                width={props.width}
                height={props.height}
            />
        </Link>
    );
}

export default Logo;
