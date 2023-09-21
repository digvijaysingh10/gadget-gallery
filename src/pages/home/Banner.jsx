import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  styled,
  Button,
} from "@mui/material";
import { useRouter } from "next/router";

const BannerContainer = styled("Box")(({ theme }) => ({
  "& .bannerlanding": {
    height: "calc(100vh - 110px)",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
    },
    "& .bannerText": {
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "column",
      "& h2": {
        fontWeight: "600",
        fontSize: "52px",
      },
      "& h6": {
        fontWeight: "400",
        fontSize: "14px",
        marginTop: "24px",
      },
    },
    "& .bannerImg": {
      maxWidth: "675px",
      width: "100%",
      "& img": {
        width: "100%",
      },
    },
  },
}));

export default function Banner() {
  const router = useRouter();
  return (
    <BannerContainer>
      <Box className="bannerlanding">
        <Container maxWidth="fixed">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={6}>
              <Box className="bannerText">
                <Typography variant="h2">
                  Discover the Latest Gadgets
                </Typography>
                <Typography variant="h6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Typography>
                <Box mt={4}>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    onClick={() => {
                      return router.push("/products");
                    }}
                  >
                    Getting Started
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Box className="bannerImg">
                <img src="images/banner-pic.jpg" alt="banner img" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </BannerContainer>
  );
}
