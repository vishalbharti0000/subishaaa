import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const LandingImages = (props) => {
    return (
        <>
            <LazyLoadImage
                src={props.src}
                width={props.width}
                height={props.height}
                alt="Image ALt"
                loading="lazy"
                effect="blur"
            />
        </>
    );
};

export default LandingImages;