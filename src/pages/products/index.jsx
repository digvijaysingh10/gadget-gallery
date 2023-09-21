import React from "react";
import HomeLayout from "../../layout/HomeLayout";
import { Container, Typography, Box, Grid, styled } from "@mui/material";
import { useRouter } from "next/router";
import { productArr, getProductById } from "../../data";

const ProductContainer = styled("Box")(({ theme }) => ({
  "& .productlanding": {
    padding: "90px 0px 45px 0px",
    "& .productCard": {
      width: "90%",
      height: "450px",
      backgroundColor: "#f6f6f6",
      padding: "20px",
      borderRadius: "15px",
      cursor: "pointer",
      "& .productImg": {
        height: "85%",
        "& img": {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "15px",
        },
      },
      "& .productDetails": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: "15px",
        "& h3":{
          textTransform:"capitalize"
        },
        "& h5":{
          "& span":{
            fontWeight:"300"
          }
        }
      },
    },
  },
}));

export default function Products() {
  const router = useRouter();

  return (
    <ProductContainer>
      <Box className="productlanding">
        <Container maxWidth="fixed">
          <Grid container spacing={2}>
            {productArr.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <Box className="productCard" onClick={()=>{
                  return router.push(`/products/${product.id}`)
                }}>
                  <Box className="productImg">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                    />
                  </Box>
                  <Box className="productDetails">
                    <Box>
                      <Typography variant="h3">{product.name}</Typography>
                    </Box>
                    <Box>
                      <Typography variant="h5">
                        <span> {product.price} </span>INR
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </ProductContainer>
  );
}

Products.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
