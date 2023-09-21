import React from "react";
import HomeLayout from "../../src/layout/HomeLayout";
import { Box } from "@mui/material";
import Banner from "./home/Banner";
import ProductSlider from "./home/ProductSlider";

export default function HomePage() {
  return (
    <>
      <Box>
        <Box className="bannerlanding">
          <Banner />
          <ProductSlider />
        </Box>
      </Box>
    </>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
