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
import { ActionTypes } from "../../../redux/constants/action-types";
import { useDispatch } from "react-redux";

const MobileDrawer = (props) => {
    const settings = useSettings();
    const { handleDrawerToggle } = props;
    const [open, setOpen] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);
    const menuOpen = Boolean(anchorEl);
    const isLoggedIn = sessionStorage.getItem("json");
    const dispatch = useDispatch();
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
                {isLoggedIn && (
                    <>
                        <ListItem>
                            <Typography variant="h6" sx={{ marginLeft: "16px" }}>
                                Hello, {JSON.parse(sessionStorage.getItem("json")).firstName}
                            </Typography>
                        </ListItem>
                        <Divider />
                    </>
                )}
                {navItems.filter((item) => item.id <= 2).map((item) => (
                    <div key={item.id}>
                        <ListItem>
                            <ListItemButton
                                onClick={() => {
                                    setOpen(false);
                                    handleDrawerToggle(item.route);
                                }}
                            >
                                <ListItemText primaryTypographyProps={{ fontSize: '12px' }} primary={item.name} />
                            </ListItemButton>
                        </ListItem>
                        <Divider />
                    </div>
                ))}
                <div>
                    <ListItem onClick={handleClick}>
                        <ListItemButton>
                            <ListItemText primaryTypographyProps={{ fontSize: '12px' }} primary="Categories" /> <KeyboardArrowDownIcon />
                        </ListItemButton>
                    </ListItem>
                    <StyledMenu
                        anchorEl={anchorEl}
                        open={menuOpen}
                        onClose={handleClose}
                    >
                        {navItems.filter((item) => item.id > 2).map((item) => (
                            <MenuItem key={item.id} style={{ backgroundColor: "#66052d", color: "#ffffff" }} onClick={() => handleDrawerToggle(item.route)} disableRipple>
                                {item.name}
                            </MenuItem>
                        ))}
                    </StyledMenu>
                </div>
                <Divider />
                {!isLoggedIn ? (
                    <>
                        <ListItem>
                            <ListItemButton
                                onClick={() => {
                                    setOpen(false);
                                    handleDrawerToggle("/login");
                                }}
                            >
                                <ListItemText primaryTypographyProps={{ fontSize: '12px' }} primary={"Sign In"} />
                            </ListItemButton>
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <ListItemButton
                                onClick={() => {
                                    setOpen(false);
                                    handleDrawerToggle("/register");
                                }}
                            >
                                <ListItemText primaryTypographyProps={{ fontSize: '12px' }} primary={"Sign Up"} />
                            </ListItemButton>
                        </ListItem>
                        <Divider />
                    </>
                ) : (
                    <>
                        <ListItem>
                            <ListItemButton
                                onClick={() => {
                                    setOpen(false);
                                    handleDrawerToggle("/myorders");
                                }}
                            >
                                <ListItemText primaryTypographyProps={{ fontSize: '12px' }} primary={"My Orders"} />
                            </ListItemButton>
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <ListItemButton primaryTypographyProps={{ fontSize: '12px' }}
                                onClick={() => {
                                    dispatch({ type: ActionTypes.LOGOUT_USER });
                                    setOpen(false);
                                    handleDrawerToggle("/");
                                }}
                            >
                                <ListItemText primaryTypographyProps={{ fontSize: '12px' }} primary={"Logout"} />
                            </ListItemButton>
                        </ListItem>
                        <Divider />
                    </>
                )}
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
                            ? { backgroundColor: "#66052d", color: "white" }
                            : {
                                backgroundColor: "#66052d",
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
