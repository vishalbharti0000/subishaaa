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


const NavBar = (props) => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
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
            navigate(nav, { replace: true });
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
                            {navItems.filter((item) => item.id > 2).map((item) => (
                                <MenuItem style={{ backgroundColor: "#282828", color: "#ffffff" }} onClick={() => { navigate(item.route); window.location.reload(false); }} disableRipple>
                                {item.name}
                            </MenuItem>

                        ))}
                        </StyledMenu>
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
