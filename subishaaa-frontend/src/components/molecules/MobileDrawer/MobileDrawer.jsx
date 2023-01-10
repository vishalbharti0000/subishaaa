import Box from "../../atoms/Box/Box";
import Drawer from "../../atoms/Drawer/Drawer";
import Typography from "../../atoms/Typography/Typography";
import List from "../../atoms/List/List";
import ListItem from "../../atoms/ListItem/ListItem";
import ListItemButton from "../../atoms/ListItemButton/ListItemButton";
import ListItemText from "../../atoms/ListItemText/ListItemText";
import Divider from "../../atoms/Divider/Divider";
import { navItems } from "../../../constants/navitems.constants";
import DrawerLogo from "../Logo/DrawerLogo";
import useSettings from "../../../hooks/useSettings";
import { THEMES } from "../../../constants/enums.constants";
import { useState } from "react";

const MobileDrawer = (props) => {
    const settings = useSettings();
    const { handleDrawerToggle } = props;
    const [open, setOpen] = useState(true);

    const drawer = (
        <Box sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                <DrawerLogo width="170" height="40" />
            </Typography>
            <Divider />
            <List sx={{ padding: 0 }}>
                {navItems.map((item) => (
                    <div key={item.id}>
                        <ListItem>
                            <ListItemButton
                                onClick={() => {
                                    setOpen(false);
                                    handleDrawerToggle(item.route);
                                }}
                            >
                                <ListItemText primary={item.name} />
                            </ListItemButton>
                        </ListItem>
                        <Divider />
                    </div>
                ))}
            </List>
        </Box>
    );

    return (
        <Box component="nav">
            <Drawer
                open={open}
                onClose={() => {
                    setOpen(false);
                    handleDrawerToggle(null);
                }}
                PaperProps={{
                    sx:
                        settings.theme === THEMES.LIGHT
                            ? { backgroundColor: "#282828", color: "white" }
                            : {
                                backgroundColor: "#282828",
                                color: "white",
                            },
                }}
            >
                {drawer}
            </Drawer>
        </Box>
    );
};

export default MobileDrawer;
