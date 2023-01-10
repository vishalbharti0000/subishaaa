import { Drawer as MUIDrawer } from "@mui/material";
import { styled } from "@mui/material/styles";

const Drawer = styled(MUIDrawer)({
    display: { xs: "block", sm: "none" },
    "& .MuiDrawer-paper": {
        boxSizing: "border-box",
        width: 240,
    },
});

export default Drawer;