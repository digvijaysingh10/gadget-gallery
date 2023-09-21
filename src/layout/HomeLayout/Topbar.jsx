import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  AppBar,
  Toolbar,
  Drawer,
  Grid,
  Box,
  Container,
  IconButton,
  Hidden,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../components/Logo";

const headersData = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Products",
    href: "/products",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Header() {
  const router = useRouter();
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });
  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      setState((prevState) => ({
        ...prevState,
        mobileView: window.innerWidth < 1220,
      }));
    };

    setResponsiveness();
    window.addEventListener("resize", setResponsiveness);

    return () => {
      window.removeEventListener("resize", setResponsiveness);
    };
  }, []);

  const handleDrawerOpen = () =>
    setState((prevState) => ({ ...prevState, drawerOpen: true }));
  const handleDrawerClose = () =>
    setState((prevState) => ({ ...prevState, drawerOpen: false }));

  const appLogo = (
    <Box>
      <Button onClick={() => router.push("/")}>
        <Logo className="logoImg" />
      </Button>
    </Box>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      const isActive = router.pathname === href;
      return (
        <Button
          variant="text"
          key={label}
          color="primary"
          className={`menuButton ${isActive ? 'activeButton' : ''}`}
          onClick={() => {
            router.push(href);
            if (mobileView) {
              handleDrawerClose();
            }
          }}
        >
          {label}
        </Button>
      );
    });
  };

  const displayMobile = () => (
    <Toolbar>
      <Hidden smUp>
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={handleDrawerClose}
          PaperProps={{
            style: {
              width: 240,
            },
          }}
        >
          <List>
            <ListItem
              button
              onClick={() => {
                router.push("/");
                handleDrawerClose();
              }}
            >
              <ListItemText
                primaryTypographyProps={{
                  style: {
                    color: "#000",
                    marginLeft: "20px",
                  },
                }}
              />
            </ListItem>
            <Box>{appLogo}</Box>
            {headersData.map(({ label, href }) => (
              <ListItem
                button
                key={label}
                onClick={() => {
                  router.push(href);
                  handleDrawerClose();
                }}
              >
                <ListItemText
                  primary={label}
                  primaryTypographyProps={{
                    style: {
                      color: "#000",
                      marginLeft: "20px",
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Hidden>
      <Box className="topbarmainBox">
        <Box>{appLogo}</Box>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          aria-haspopup="true"
          onClick={handleDrawerOpen}
        >
          <MenuIcon />
        </IconButton>
      </Box>
    </Toolbar>
  );

  const displayDesktop = () => (
    <Container maxWidth="fixed" className="backbarmainBox">
      <Toolbar className="topbarmainBox">
        {appLogo}
        <Grid
          container
          item
          direction="row"
          justify="flex-end"
          alignItems="center"
          style={{ paddingLeft: "0px" }}
          className="displayEnd"
        >
          {getMenuButtons()}
        </Grid>
      </Toolbar>
    </Container>
  );

  return (
    <>
      <AppBar elevation={0} style={{ background: "#e3e0c7" }}>
        <Container className={""} maxWidth="fixed">
          {mobileView ? displayMobile() : displayDesktop()}
        </Container>
      </AppBar>
    </>
  );
}
