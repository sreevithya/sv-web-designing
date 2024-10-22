import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import "./Header.css";
import AppLogo from "../assets/images/SV_Web_Designing_Logo.png";

const pages = ["Home", "About us", "Our services", "Portfolio", "Contact us"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      className="header"
      sx={{
          backgroundColor: "white",
      }}

    >
      <Toolbar
        disableGutters
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <Typography
            component="a"
            href="https://svwebdesiningsolutions.com/"
            sx={{
              mr: 2
            }}
          >
            <img
              className="header--app-logo"
              src={AppLogo}
              alt="SV Web Designing Company"
            />
          </Typography>
        </Box>
        
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {pages.map((page) => (
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                mx: 2,
                color: "grey",
                textTransform: "none",
              }}
            >
              {page}
            </Button>
          ))}
        </Box>

        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "grey",
                    textTransform: "capitalize",
                  }}
                >
                  {page}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <Typography
            component="a"
            href="https://svwebdesiningsolutions.com/"
            sx={{
              mr: 2,
            }}
          >
            <img
              className="header--app-logo"
              src={AppLogo}
              alt="SV Web Designing Company"
            />
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
