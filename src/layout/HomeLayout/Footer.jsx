import React from "react";
import Logo from "../../components/Logo";
import { Box, styled, Container, Typography, Divider } from "@mui/material";
import { useRouter } from "next/router";

const MainComponent = styled("Box")(({}) => ({
  "& .mainBox": {
    backgroundColor: "#e3e0c7",
    "& .copyRightBox": {
      padding: "45px 0",
      "& h6": {
        cursor: "pointer",
        fontWeight: "400",
        color: "#000",
      },
      "& .footerBtn":{
        display:"flex",
        flexDirection:"row"
      },
      "& .copyBox": {
        textAlign: "center",
        marginTop: "16px",
        "& p": {
          color: "#000",
        },
      },
    },
  },
}));

const Footer = () => {
  const router = useRouter();

  return (
    <MainComponent>
      <Box className="mainBox mainBox1">
        <Container>
          <Box className="copyRightBox">
            <Box className="displaySpacebetween">
              <Box>
                <Logo />
              </Box>
              <Box className="footerBtn">
                <Box>
                  <Typography
                    color="#fff"
                    variant="h6"
                    ml={4}
                    onClick={() => {
                      return router.push("/about");
                    }}
                  >
                    About
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    color="#fff"
                    variant="h6"
                    ml={4}
                    onClick={() => {
                      return router.push("/contact");
                    }}
                  >
                    Contact
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Divider sx={{ backgroundColor: "#FFFFFF40", marginTop: "16px" }} />
            <Box className="copyBox">
              <Typography variant="body2" color="rgba(255, 255, 255, 0.60)">
                Copyright©2023. Created by Gadget Gallery
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </MainComponent>
  );
};

export default Footer;
