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
import MenuItem from '../../atoms/MenuItem/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { StyledMenu } from "./MobileDrawer.styles";

const MobileDrawer = (props) => {
    const settings = useSettings();
    const { handleDrawerToggle } = props;
    const [open, setOpen] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);
    const menuOpen = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const drawer = (
        <Box sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                <DrawerLogo width="120" height="40" />
            </Typography>
            <Divider />
            <List sx={{ padding: 0 }}>
                {navItems.filter((item) => item.id <= 2).map((item) => (
                    <div key={item.id}>
                        <ListItem>
                            <ListItemButton
                                onClick={() => {
                                    setOpen(false);
                                    handleDrawerToggle(item.route);
                                }}
                            >
                                <ListItemText primaryTypographyProps={{fontSize: '12px'}} primary={item.name} />
                            </ListItemButton>
                        </ListItem>
                        <Divider />
                    </div>
                ))}
                <div>
                    <ListItem onClick={handleClick}>
                        <ListItemButton>
                            <ListItemText primaryTypographyProps={{fontSize: '12px'}} primary="Categories" /> <KeyboardArrowDownIcon />
                        </ListItemButton>
                    </ListItem>
                    <StyledMenu
                        anchorEl={anchorEl}
                        open={menuOpen}
                        onClose={handleClose}
                    >
                        {navItems.filter((item) => item.id > 2).map((item) => (
                            <MenuItem style={{ backgroundColor: "#282828", color: "#ffffff" }} onClick={() => handleDrawerToggle(item.route)} disableRipple>
                                {item.name}
                            </MenuItem>
                        ))}
                    </StyledMenu>
                </div>
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
