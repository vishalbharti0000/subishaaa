import React from "react";
import { useNavigate } from "react-router-dom";
import { navItems } from "../../../constants/navitems.constants";
import AppBar from "../../atoms/AppBar/AppBar";
import Box from "../../atoms/Box/Box";
import IconButton from "../../atoms/IconButton/IconButton";
import Logo from "../../molecules/Logo/Logo";
import MenuIcon from "../../atoms/MenuIcon/MenuIcon";
import Toolbar from "../../atoms/Toolbar/Toolbar";
import MobileDrawer from "../../molecules/MobileDrawer/MobileDrawer";
import { NavButton, StyledMenu } from "./NavBar.styles";
import MenuItem from '../../atoms/MenuItem/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ActionTypes } from "../../../redux/constants/action-types";
import { useDispatch } from "react-redux";

const NavBar = (props) => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const isLoggedIn = sessionStorage.getItem("json");
    const dispatch = useDispatch();
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const navigate = useNavigate();
    const handleDrawerToggle = (nav) => {
        setMobileOpen(false);
        if (nav) {
            navigate(nav);
            window.location.reload(false);
        }
    };

    return (
        <div data-testid="navbar">
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={() => setMobileOpen(true)}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Logo width="120" height="42" />
                    <Box
                        sx={{ ml: 1, flexGrow: 1, display: { xs: "none", sm: "block" } }}
                    >
                        {navItems.filter((item) => item.id <= 2).map((item) => (
                            <NavButton
                                data-testid="navitem"
                                key={item.id}
                                onClick={() => { navigate(item.route); window.location.reload(false); }}
                            >
                                {item.name}
                            </NavButton>
                        ))}
                        <NavButton
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            disableElevation
                            onClick={handleClick}
                            endIcon={<KeyboardArrowDownIcon />}
                        >
                            Categories
                        </NavButton>
                        <StyledMenu
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                        >
                            {navItems.filter((item) => item.id >= 2).map((item) => (
                                <MenuItem key={item.id} style={{ backgroundColor: "#66052d", color: "#ffffff" }} onClick={() => { navigate(item.route); window.location.reload(false); }} disableRipple>
                                    {item.name}
                                </MenuItem>

                            ))}
                        </StyledMenu>
                    </Box>
                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        {!isLoggedIn ? (
                            <>
                                <NavButton
                                    onClick={() => navigate("login", { replace: true })}
                                    variant="contained"
                                >
                                    Sign In
                                </NavButton>
                                <NavButton
                                    variant="contained"
                                    onClick={() => navigate("register", { replace: true })}
                                >
                                    Sign Up
                                </NavButton>
                            </>
                        ) : (
                            <>
                                <NavButton sx={{ cursor: "default" }}>
                                    Hello, {JSON.parse(sessionStorage.getItem("json")).firstName}
                                </NavButton>
                                <NavButton
                                    variant="contained"
                                    onClick={() => navigate("myorders")}
                                >
                                    My Orders
                                </NavButton>
                                <NavButton
                                    variant="contained"
                                    onClick={() => {
                                        dispatch({ type: ActionTypes.LOGOUT_USER });
                                        navigate("/", { replace: true });
                                    }}
                                >
                                    Logout
                                </NavButton>
                            </>
                        )}
                    </Box>
                </Toolbar>
            </AppBar>
            {mobileOpen && (
                <MobileDrawer
                    data-testid="drawer"
                    handleDrawerToggle={handleDrawerToggle}
                />
            )}
        </div>
    );
};

export default NavBar;
