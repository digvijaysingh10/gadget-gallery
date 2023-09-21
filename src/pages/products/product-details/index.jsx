import { useRouter } from "next/router";
import {
  Container,
  Typography,
  Box,
  Button,
  styled,
  Grid,
} from "@mui/material";
import { getProductById } from "../../../data";
import HomeLayout from "../../../layout/HomeLayout";

const ProductDetailContainer = styled("Box")(({ theme }) => ({
  "& .productCard": {
    padding: "90px 0px 45px 0px",
    "& .productImg": {
      "& img": {
        margin:"0 auto",
        maxWidth: "100%",
        maxHeight: "550px",
        height:"100%",
        display: "block",
      },
    },
    "& .productDetails": {
      "& h3": {
        textTransform: "capitalize",
        marginBottom: "16px",
      },
      "& h5": {
        marginBottom: "16px",
        "& span": {
          fontWeight: "300",
        },
      },
    },
  },
}));

function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const product = getProductById(id);

  if (!product) {
    return <Typography variant="h4" sx={{paddingTop:"110px"}}>Product not found</Typography>;
  }

  return (
    <ProductDetailContainer>
      <Container maxWidth="fixed">
        <Box className="productCard">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6}>
              <Box className="productImg">
                <img src={product.image} alt={product.name} loading="lazy" />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Box className="productDetails">
                <Typography variant="h3">{product.name}</Typography>
                <Typography variant="h5">
                  <span>{product.price}</span> INR
                </Typography>
                <Typography variant="body1">{product.description}</Typography>
                <Box mt={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ marginRight: "10px" }}
                  >
                    Buy Now
                  </Button>
                  <Button variant="contained" color="secondary">
                    Add to Cart
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ProductDetailContainer>
  );
}

ProductDetail.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};

export default ProductDetail;
