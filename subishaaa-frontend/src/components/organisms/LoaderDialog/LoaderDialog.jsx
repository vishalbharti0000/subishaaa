import React from "react";
import Dialog from "../../atoms/Dialog/Dialog";
import LottiePlayer from "../../atoms/LottiePlayer/LottiePlayer";

const LoaderDialog = () => {
    return (
        <>
            <Dialog open={true}>
                <LottiePlayer
                    autoplay
                    loop
                    src="https://assets3.lottiefiles.com/packages/lf20_hzw6zpce.json"
                />
            </Dialog>
        </>
    );
};

export default LoaderDialog;
