import React from "react";
import { Typography, Box, Grid, styled, Button } from "@mui/material";
import { useRouter } from "next/router";
import HomeLayout from "../../layout/HomeLayout";

const AboutContainer = styled("Box")(({ theme }) => ({
  "& .aboutMainBox": {
    padding: "40px 20px",
    backgroundColor: "#fffded",
    "& .aboutText": {
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "column",
      justifyContent: "center",
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
    "& .aboutImages": {
      maxWidth: "675px",
      height: "400px",
      width: "100%",
      "& img": {
        width: "100%",
        height: "100%",
      },
    },
  },
  "& .descoverBox": {
    textAlign: "center",
    backgroundColor: "#fffded",
    padding: "40px 20px",
  },
}));

export default function About() {
  const router = useRouter();
  return (
    <AboutContainer>
      <Box className="bannerlanding">
        <Box sx={{ background: "#000", padding: "10px" }}>
          <Typography variant="h4" sx={{ textAlign: "center", color: "#fff" }}>
            Free shipping over $50
          </Typography>
        </Box>
        <Box className="aboutMainBox">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6} className="aboutText">
              <Box>
                <Typography variant="h3">About GadgetGallery</Typography>
                <Typography variant="h6">
                  GadgetGallery is your ultimate destination for all things
                  mobile and devices. We provide a beautiful and responsive UI
                  to enhance your browsing experience. Our informative blogs
                  offer valuable insights and updates on the latest gadgets.
                  Compare specifications and make the right choice with
                  GadgetGallery.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
              <Box className="aboutImages">
                <img src="images/products/product-5.jpg" alt="about img" />
              </Box>
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
              <Box className="aboutImages">
                <img src="images/products/product-8.jpg" alt="about img" />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ padding: "60px" }}>
          <Box className="descoverBox">
            <Typography variant="h4">
              Discover the newest mobile phones and devices in the market. Get
              detailed information, reviews, and comparisons to make an informed
              decision. Stay connected with the latest trends and advancements
              in technology.
            </Typography>
            <Box mt={2}>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  return router.push("/products");
                }}
              >
                View Products
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </AboutContainer>
  );
}

About.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
