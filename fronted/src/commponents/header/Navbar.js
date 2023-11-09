import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import {
  AppBar,
  Avatar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { Link, useNavigate, useResolvedPath } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { pages } from "../main/pages/pages";
import { settings } from "../main/pages/pages";
import { checkPermissions } from "../../users/permissions";
import { GeneralContext } from "../../App";
import Logout from "../../users/Logout";
import SearchBar from "./SearchBar";
import { DarkMode, LightMode } from "@mui/icons-material";

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { user, roleType, isDark, setIsDark } = useContext(GeneralContext);
  const navigate = useNavigate();
  const path = useResolvedPath().pathname;

  const handledark = () => {
    setIsDark((prevIsDark) => !prevIsDark);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        flexGrow: 1,
        backgroundColor: "#FFF",
      }}
    >
      <Toolbar>
        <Typography
          id="logo"
          component="a"
          onClick={() => {
            navigate("/");
          }}
          sx={{
            display: { xs: "none", md: "inline-flex" },
            fontFamily: "rubik",
            fontWeight: 400,
            fontSize: "1.5rem",
            color: "#4F4378",
          }}
        >
          Drech
        </Typography>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            onClick={handleOpenNavMenu}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon sx={{ color: "#4F4378" }} />
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
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {/* תפריט המבורגר */}
            {pages
              .filter(
                (p) =>
                  !p.permissions || checkPermissions(p.permissions, roleType)
              )
              .map((page) => (
                <Link
                  id="letters"
                  to={page.route}
                  key={page.route}
                  style={{ textDecoration: "none", color: "#4F4378" }}
                >
                  <MenuItem key={page.route} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.title}</Typography>
                  </MenuItem>
                </Link>
              ))}
          </Menu>
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          {pages
            .filter(
              (p) => !p.permissions || checkPermissions(p.permissions, roleType)
            )
            .map((page) => (
              <Link
                to={page.route}
                key={page.route}
                style={{ textDecoration: "none", color: "#4F4378" }}
              >
                <Button
                  id="button"
                  onClick={handleCloseNavMenu}
                  sx={{
                    color: page.route === path ? "white" : "#776FC4",
                    display: "block",
                    backgroundColor: page.route === path ? "#776FC4 " : "white",
                  }}
                >
                  {page.title}
                </Button>
              </Link>
            ))}
        </Box>
        <Box x={{ display: { xs: "inline-flex", md: "none" } }}>
          <SearchBar />
        </Box>
        <IconButton onClick={handledark} sx={{ p: 1, paddingLeft: 2 }}>
          {isDark ? <LightMode /> : <DarkMode />}
        </IconButton>
        {user && (
          <Box sx={{ flexGrow: 0, p: 1 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={user.fullName} src={user.imgUrl} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <Link
                  to={setting.route}
                  key={setting.route}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{user.fullName}</Typography>
                  </MenuItem>
                </Link>
              ))}
              <Logout />
            </Menu>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
