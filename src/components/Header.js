import React, { useContext, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useMediaQuery } from "@mui/material";
import { NavLink } from "react-router-dom";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { myContext } from "./Context";

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMobile = useMediaQuery("(max-width:700px)");
  const { totalQuantities } = useContext(myContext);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar>
      <Toolbar sx={{ bgcolor: "#0F2027" }}>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          <span className="gradientText">Royal Bazaar</span>
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>
                <NavLink to="/">Home</NavLink>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <NavLink to="/About">About</NavLink>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <NavLink to="/Product">Product</NavLink>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <NavLink to="/Contact">Contact</NavLink>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <NavLink to="/Cart">
                  <ShoppingBagOutlinedIcon />
                  <span
                    style={{
                      position: "absolute",
                      top: "-1px",
                      right: "40px",
                      color: "#FF416C",
                    }}
                  >
                    {totalQuantities}
                  </span>
                </NavLink>
              </MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <MenuItem onClick={handleMenuClose}>
              <NavLink to="/">Home</NavLink>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <NavLink to="/About">About</NavLink>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <NavLink to="/Product">Product</NavLink>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <NavLink to="/Contact">Contact</NavLink>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <NavLink to="/Cart">
                <ShoppingBagOutlinedIcon />
                <span
                  style={{
                    position: "absolute",
                    top: "-3px",
                    right: "5px",
                    color: "#FF416C",
                  }}
                >
                  {totalQuantities}
                </span>
              </NavLink>
            </MenuItem>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
