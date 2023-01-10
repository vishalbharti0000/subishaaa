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
import { NavButton } from "./NavBar.styles";


const NavBar = (props) => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const navigate = useNavigate();
    const handleDrawerToggle = (nav) => {
        setMobileOpen(false);
        if (nav) {
            navigate(nav, { replace: true });
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
                        {navItems.map((item) => (
                            <NavButton
                                data-testid="navitem"
                                key={item.id}
                                onClick={() => navigate(item.route)}
                            >
                                {item.name}
                            </NavButton>
                        ))}
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
