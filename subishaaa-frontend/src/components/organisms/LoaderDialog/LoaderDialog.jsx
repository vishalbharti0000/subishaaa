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
                    src="https://assets3.lottiefiles.com/private_files/lf30_c5opkzmh.json"
                />
            </Dialog>
        </>
    );
};

export default LoaderDialog;
