import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { productArr } from "../../data";
import { Box, styled } from "@mui/material";

const SliderContainer = styled("Box")(({ theme }) => ({
  "& .slider-container": {
    paddingBottom:"45px",
    "& .slider-item": {
      maxWidth: "450px",
      height:"400px",
      "& img": {
        width: "100%",
        height:"100%"
      },
    },
  },
}));

const ProductSlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <SliderContainer>
      <Box className="slider-container">
        <Slider {...settings}>
          {productArr.map((product) => (
            <Box key={product.id} className="slider-item">
              <img src={product.image} alt={product.name} />
            </Box>
          ))}
        </Slider>
      </Box>
    </SliderContainer>
  );
};

export default ProductSlider;
