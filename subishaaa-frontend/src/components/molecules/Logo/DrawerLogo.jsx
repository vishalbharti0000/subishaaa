import React from "react";

function DrawerLogo(props) {
    return (
        <img
            className="my-2"
            src="/logo.png"
            alt="Logo cannot be displayed"
            width={props.width}
            height={props.height}
        />
    );
}

export default DrawerLogo;
