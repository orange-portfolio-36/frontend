"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "@/assets/images/logo.svg";

import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import { Notifications } from "@mui/icons-material";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Nav {
  label: string;
  isAuth: boolean;
  path: string;
}

const pages: Nav[] = [
  {
    label: "Meus projetos",
    isAuth: true,
    path: "/meus-projetos",
  },
  {
    label: "Descobrir",
    isAuth: false,
    path: "/",
  },
];

export default function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const session = useSession();

  const route = useRouter();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  function navHandler(nav: Nav) {
    if (!nav.isAuth) return true;
    else if (session.status === "authenticated") return true;
    return false;
  }

  return (
    <AppBar position="fixed" color="secondary">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "flex" }, flexGrow: 0.15 }}>
            <Image src={Logo} alt={"Orange logotipo"} />
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
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
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map(
                (page) =>
                  navHandler(page) && (
                    <MenuItem
                      key={page.label}
                      onClick={() => route.push(page.path)}
                    >
                      <Typography textAlign="center">{page.label}</Typography>
                    </MenuItem>
                  )
              )}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }} flexGrow={1}>
            <Image src={Logo} alt={"Orange logotipo"} />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map(
              (page, index) =>
                navHandler(page) && (
                  <Button
                    key={index}
                    onClick={() => route.push(page.path)}
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                      textTransform: "initial",
                      fontSize: "20px",
                    }}
                  >
                    {page.label}
                  </Button>
                )
            )}
          </Box>

          <Box
            sx={{
              flexGrow: 0.04,
              justifyContent: "space-between",
              alignItems: "center",
              display: "flex",
            }}
          >
            {session.status === "authenticated" ? (
              <>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
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
                  <MenuItem
                    onClick={() =>
                      signOut({
                        redirect: true,
                        callbackUrl: "/",
                      })
                    }
                  >
                    <Typography textAlign="center">{"Sair"}</Typography>
                  </MenuItem>
                </Menu>
                <Notifications />
              </>
            ) : (
              <>
                <Link href={"/signin"}>Login</Link>
                <Link href={"/signup"}>Cadastre-se</Link>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
